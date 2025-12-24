import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface LeadEmailRequest {
  name: string;
  phone: string;
  location: string;
  farmSize?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, location, farmSize, message }: LeadEmailRequest = await req.json();

    console.log("Received lead request:", { name, phone, location, farmSize, message });

    // Validate required fields
    if (!name || !phone || !location) {
      return new Response(
        JSON.stringify({ error: "Name, phone, and location are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const emailHtml = `
      <h2>New Lead Request from SK Natural Farm Website</h2>
      <hr />
      <h3>Contact Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Location/District:</strong> ${location}</li>
        ${farmSize ? `<li><strong>Farm Size:</strong> ${farmSize}</li>` : ''}
      </ul>
      ${message ? `
        <h3>Message:</h3>
        <p>${message}</p>
      ` : ''}
      <hr />
      <p><em>This lead was submitted through the SK Natural Farm chatbot.</em></p>
      <p><em>Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</em></p>
    `;

    const emailResponse = await resend.emails.send({
      from: "SK Natural Farm <onboarding@resend.dev>",
      to: ["connect@sknaturalfarm.in"],
      subject: `New Lead Request: ${name} from ${location}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-lead-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
