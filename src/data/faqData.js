export const faqData = [
  // =========================
  // GENERAL INFORMATION
  // =========================
  {
    id: "about",
    keywords: ["about", "who", "what is", "sk natural", "company", "introduction", "tell me", "sknf", "skycult", "what does", "what kind", "explain"],
    question: [
      "What is SK Natural Farm?",
      "Tell me about SK Natural Farm",
      "Can you explain what SK Natural Farm is?",
      "What does SK Natural Farm do?",
      "Who are you?",
      "About SK Natural Farm",
      "What kind of company is SK Natural Farm?",
      "Give me an introduction to SK Natural Farm",
      "What is your company about?",
      "Explain SK Natural Farm in simple words"
    ],
    answer: "SK Natural Farm (SKNF) is a pioneering agri-tech company under SkyCult Technologies Pvt Ltd, based in Pune, Maharashtra. We're transforming agriculture through AI-powered drone technology, precision farming, and sustainable practices.\n\n📊 **Our Impact:**\n• 5000+ Farmers Empowered\n• 50+ Projects Completed\n• 15+ Technology Partners\n• 10,000+ Acres Monitored\n\nWe seamlessly blend sustainable farming with cutting-edge technology! 🌾",
    followUp: ["What services do you offer?", "How can drones help my farm?", "Where are you located?"]
  },
  {
    id: "services",
    keywords: ["services", "offer", "provide", "help", "solutions", "what do you do", "agri service"],
    question: [
      "What services do you offer?",
      "What do you provide?",
      "How can you help me?",
      "What solutions do you have?",
      "Tell me about your services"
    ],
    answer: "We offer a comprehensive range of smart farming solutions:\n\n🚁 **Drone Services** - Aerial spraying, crop monitoring, and field mapping\n📊 **Data Analytics** - Soil analysis, crop health insights, and yield predictions\n🌿 **Natural Farming** - Sustainable practices and organic solutions\n🎓 **Training Programs** - Empowering farmers with new skills\n🤝 **Community Support** - Connecting farmers for shared growth\n\nWould you like details on any specific service?",
    followUp: ["Tell me about drone services", "Drone Lab Setup", "What is precision agriculture?", "Contact for services"]
  },
  {
    id: "contact",
    keywords: ["contact", "call", "phone", "email", "reach", "talk", "speak", "connect", "enquiry", "inquiry", "touch"],
    question: [
      "How can I contact you?",
      "What are your contact details?",
      "How do I reach you?",
      "Can I call you?",
      "What is your phone number?",
      "What is your email?"
    ],
    answer: "We'd love to hear from you! 📞\n\nYou can reach SK Natural Farm through:\n\n📍 **Address:**\n802, Bhama Centre, Hinjawadi-Wakad Bridge, Wakad, Pune, Maharashtra - 411057, India\n\n🌐 **Website:** www.sknaturalfarm.in\n📧 **Email:** connect@sknaturalfarm.in\n📱 **Phone:** +91 7827335954\n\nOr simply share your details here, and our team will call you back within 24 hours!",
    followUp: ["Request a callback", "Send my contact details"]
  },
  {
    id: "pricing",
    keywords: ["price", "cost", "fee", "charge", "rate", "how much", "expensive", "affordable", "package", "pricing"],
    question: [
      "What are your pricing and packages?",
      "How much does it cost?",
      "What are your rates?",
      "Tell me about your packages"
    ],
    answer: "Our pricing is designed to be farmer-friendly and flexible! 💰\n\n**Agri Drone Service Packages:**\n\n🟢 **Alpha Mode** - ₹500 per acre\n🟡 **Omega Core** - ₹1500 per hour\n🔵 **Quantum Pro** - ₹2000 per hour\n\n✅ No hidden charges\n✅ Bulk discounts available\n✅ Government subsidy assistance\n\nFor an exact quote tailored to your farm, please share your details!",
    followUp: ["Get a custom quote", "Contact sales team", "Request drone demo"]
  },
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "namaste", "namaskar", "good morning", "good afternoon", "good evening"],
    question: ["Hi", "Hello", "Hey", "Namaste", "Good morning"],
    answer: "🙏 Namaste! Welcome to SK Natural Farm!\n\nI'm here to help you explore our smart farming solutions. We offer:\n\n🚁 Agri Drone Services\n🛡️ Defence Drones\n🔬 Drone Lab Setup\n🌿 Sustainable Farming Services\n🎓 Training Programs\n\nWhat would you like to know about?",
    followUp: ["What services do you offer?", "Drone pricing", "Contact details"]
  },
  {
    id: "default",
    keywords: [],
    question: ["I have another question"],
    answer: "I'm here to help! 😊 While I may not have a ready answer for that specific question, our team would be happy to assist you personally.\n\nYou can:\n📞 Request a callback from our experts\n📧 Send us your query at connect@sknaturalfarm.in\n📱 Call us: +91 7827335954\n\nWhat would you like to do?",
    followUp: ["Request a callback", "Explore services", "Contact us"]
  }
];

export const quickReplies = [
  "What services do you offer?",
  "Drone pricing",
  "Book a demo",
  "Drone Lab Setup",
  "Contact details"
];

export const welcomeMessage = {
  text: "🌾 Namaste! Welcome to SK Natural Farm!\n\nI'm your smart farming assistant. We're transforming agriculture with AI-powered drones, precision farming, and sustainable solutions across India.\n\nHow can I help you today?",
  quickReplies: quickReplies.slice(0, 4)
};

export function findBestMatch(input) {
  const normalizedInput = input.toLowerCase().trim();
  
  let bestMatch = null;
  let highestScore = 0;

  for (const faq of faqData) {
    if (faq.id === "default") continue;
    
    let score = 0;
    
    for (const keyword of faq.keywords) {
      if (normalizedInput.includes(keyword.toLowerCase())) {
        score += keyword.length * 2;
      }
    }
    
    for (const question of faq.question) {
      const normalizedQuestion = question.toLowerCase();
      if (normalizedInput === normalizedQuestion || normalizedInput === normalizedQuestion.replace('?', '')) {
        score += 100;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = faq;
    }
  }

  if (bestMatch && highestScore >= 5) {
    return bestMatch;
  }

  return faqData.find(f => f.id === "default");
}
