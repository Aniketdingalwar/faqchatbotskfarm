export interface FAQ {
  id: string;
  keywords: string[];
  question: string;
  answer: string;
  followUp?: string[];
}

export const faqData: FAQ[] = [
  // General Information
  {
    id: "about",
    keywords: ["about", "who", "what is", "sk natural", "company", "introduction", "tell me"],
    question: "What is SK Natural Farm?",
    answer: "SK Natural Farm is a pioneering agri-tech company dedicated to revolutionizing Indian agriculture. We combine cutting-edge drone technology with sustainable natural farming practices to help farmers increase yields, reduce costs, and protect the environment. Our mission is to empower farmers with smart solutions that make farming more profitable and eco-friendly! 🌱",
    followUp: ["What services do you offer?", "How can drones help my farm?"]
  },
  {
    id: "mission",
    keywords: ["mission", "vision", "goal", "purpose", "why"],
    question: "What is your mission?",
    answer: "Our mission is to transform traditional farming into smart, sustainable agriculture. We believe every farmer deserves access to modern technology that can help them grow more while using fewer resources. Through drone technology, data analytics, and natural farming methods, we're building a future where farming is both profitable and environmentally responsible. 🚀",
    followUp: ["Tell me about your services", "How do you support farmers?"]
  },

  // Services
  {
    id: "services",
    keywords: ["services", "offer", "provide", "help", "solutions", "what do you do"],
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of smart farming solutions:\n\n🚁 **Drone Services** - Aerial spraying, crop monitoring, and field mapping\n📊 **Data Analytics** - Soil analysis, crop health insights, and yield predictions\n🌿 **Natural Farming** - Sustainable practices and organic solutions\n🎓 **Training Programs** - Empowering farmers with new skills\n🤝 **Community Support** - Connecting farmers for shared growth\n\nWould you like details on any specific service?",
    followUp: ["Tell me about drone services", "What is precision agriculture?", "Contact for services"]
  },
  {
    id: "drone-services",
    keywords: ["drone", "spray", "aerial", "uav", "flying", "spraying"],
    question: "How do drones help in agriculture?",
    answer: "Drones are game-changers for modern farming! Here's how they help:\n\n✈️ **Precision Spraying** - Apply pesticides and fertilizers with pinpoint accuracy, saving up to 30% on inputs\n📸 **Crop Monitoring** - Identify pest infestations, diseases, and nutrient deficiencies early\n🗺️ **Field Mapping** - Create detailed maps of your farm for better planning\n⏱️ **Time Saving** - Cover large areas in minutes instead of hours\n💧 **Water Management** - Detect irrigation issues before they become problems\n\nOur trained drone pilots handle everything professionally!",
    followUp: ["How much does drone spraying cost?", "Request a demo"]
  },
  {
    id: "precision-agriculture",
    keywords: ["precision", "smart", "technology", "tech", "modern", "analytics", "data"],
    question: "What is precision agriculture?",
    answer: "Precision agriculture is the future of farming! 🎯 It uses technology to make farming decisions based on actual field data rather than guesswork.\n\nWe use:\n📡 **Sensors & Drones** - To collect real-time field data\n🧪 **Soil Analysis** - Understanding exactly what your soil needs\n📈 **Data Analytics** - Converting raw data into actionable insights\n🌡️ **Weather Integration** - Planning around accurate forecasts\n\nThe result? Higher yields, lower costs, and healthier crops!",
    followUp: ["How can I get started?", "What are the costs?"]
  },
  {
    id: "natural-farming",
    keywords: ["natural", "organic", "sustainable", "eco", "environment", "chemical-free", "green"],
    question: "What is sustainable natural farming?",
    answer: "Sustainable natural farming is our core philosophy! 🌍 It's about growing healthy food while protecting our planet.\n\nOur approach includes:\n🌱 **Zero Chemical Inputs** - Using natural alternatives to pesticides\n🐛 **Biological Pest Control** - Working with nature, not against it\n🔄 **Crop Rotation** - Keeping soil healthy and productive\n💚 **Composting** - Turning farm waste into valuable fertilizer\n🐝 **Biodiversity** - Creating habitats for beneficial insects\n\nHealthier farms mean healthier food and happier farmers!",
    followUp: ["How do I transition to natural farming?", "What support do you provide?"]
  },

  // Community & Support
  {
    id: "farmer-support",
    keywords: ["farmer", "support", "help", "community", "training", "education", "learn"],
    question: "How do you support farmers?",
    answer: "Farmer empowerment is at the heart of everything we do! 💪\n\n👨‍🌾 **Training Programs** - Hands-on workshops on drone operation and smart farming\n📚 **Knowledge Sharing** - Regular sessions on best practices\n🤝 **Community Groups** - Connect with fellow progressive farmers\n📞 **24/7 Support** - Our experts are just a call away\n💰 **Financing Help** - Guidance on government schemes and subsidies\n\nWe don't just sell services - we build partnerships!",
    followUp: ["Join a training program", "Request a callback"]
  },
  {
    id: "training",
    keywords: ["training", "learn", "course", "workshop", "program", "certification"],
    question: "Do you offer training programs?",
    answer: "Yes! We offer comprehensive training programs for farmers and agri-entrepreneurs: 🎓\n\n**Available Programs:**\n🚁 **Drone Pilot Training** - Learn to operate agricultural drones\n📊 **Smart Farming Basics** - Introduction to precision agriculture\n🌿 **Natural Farming Certification** - Sustainable practices training\n💼 **Agri-Entrepreneurship** - Start your own agri-tech business\n\nAll programs include hands-on practice and certification!",
    followUp: ["Request training details", "Contact us"]
  },

  // Pricing & Contact
  {
    id: "pricing",
    keywords: ["price", "cost", "fee", "charge", "rate", "how much", "expensive", "affordable"],
    question: "What are your pricing and packages?",
    answer: "Our pricing is designed to be farmer-friendly and flexible! 💰\n\n**Service-based Pricing:**\n• Drone spraying: Per acre rates (varies by crop type)\n• Soil analysis: Per sample basis\n• Consulting: Customized packages\n\n**Why Choose Us:**\n✅ No hidden charges\n✅ Pay only for what you use\n✅ Bulk discounts available\n✅ Government subsidy assistance\n\nFor an exact quote tailored to your farm, please share your details!",
    followUp: ["Get a custom quote", "Contact sales team"]
  },
  {
    id: "contact",
    keywords: ["contact", "call", "phone", "email", "reach", "talk", "speak", "connect", "enquiry", "inquiry"],
    question: "How can I contact you?",
    answer: "We'd love to hear from you! 📞\n\nYou can reach SK Natural Farm through:\n\n🌐 **Website:** www.sknaturalfarm.in\n📧 **Email:** info@sknaturalfarm.in\n📱 **Phone:** Available on our website\n📍 **Location:** India\n\nOr simply share your details here, and our team will call you back within 24 hours!",
    followUp: ["Request a callback", "Send my contact details"]
  },
  {
    id: "partnerships",
    keywords: ["partner", "partnership", "collaborate", "business", "dealer", "franchise", "join"],
    question: "Can I partner with SK Natural Farm?",
    answer: "Absolutely! We're always looking for passionate partners to grow with us! 🤝\n\n**Partnership Opportunities:**\n🏢 **Dealer Network** - Become an authorized service provider\n🎓 **Training Centers** - Host our programs in your region\n🌾 **FPO Collaborations** - Special programs for Farmer Producer Organizations\n🔬 **Research Partners** - Academic and industry collaborations\n\nShare your interest, and our partnerships team will connect with you!",
    followUp: ["Request partnership details", "Contact us"]
  },
  {
    id: "impact",
    keywords: ["impact", "success", "results", "farmers helped", "achievements", "story", "case study"],
    question: "What impact have you made?",
    answer: "We're proud of the difference we're making in Indian agriculture! 🌟\n\n**Our Impact:**\n👨‍🌾 Thousands of farmers empowered\n🌾 Lakhs of acres covered\n💧 Significant water savings through precision irrigation\n🧪 Reduced chemical usage by up to 30%\n📈 Improved yields for partner farmers\n\nEvery number represents a farmer whose life we've touched. And we're just getting started!",
    followUp: ["Learn more about our work", "Join our community"]
  },

  // Default/Fallback
  {
    id: "default",
    keywords: [],
    question: "I have another question",
    answer: "I'm here to help! 😊 While I may not have a ready answer for that specific question, our team would be happy to assist you personally.\n\nYou can:\n📞 Request a callback from our experts\n📧 Send us your query directly\n💬 Ask me about our services, drones, training, or pricing!\n\nWhat would you like to do?",
    followUp: ["Request a callback", "Explore services", "Contact us"]
  }
];

export const quickReplies = [
  "What services do you offer?",
  "How do drones help in farming?",
  "Tell me about natural farming",
  "What are your prices?",
  "Request a callback"
];

export const welcomeMessage = {
  text: "Namaste! 🙏 Welcome to SK Natural Farm. I'm your smart farming assistant, here to help you explore our drone-powered agricultural solutions.\n\nHow can I help you today?",
  quickReplies: quickReplies.slice(0, 4)
};

export function findBestMatch(input: string): FAQ {
  const normalizedInput = input.toLowerCase().trim();
  
  let bestMatch: FAQ | null = null;
  let highestScore = 0;

  for (const faq of faqData) {
    if (faq.id === "default") continue;
    
    let score = 0;
    for (const keyword of faq.keywords) {
      if (normalizedInput.includes(keyword)) {
        score += keyword.length; // Longer matches get higher scores
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = faq;
    }
  }

  return bestMatch || faqData.find(f => f.id === "default")!;
}
