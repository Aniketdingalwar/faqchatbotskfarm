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
    keywords: ["about", "who", "what is", "sk natural", "company", "introduction", "tell me", "sknf", "skycult"],
    question: "What is SK Natural Farm?",
    answer: "SK Natural Farm (SKNF) is a pioneering agri-tech company under SkyCult Technologies Pvt Ltd, based in Pune, Maharashtra. We're transforming agriculture through AI-powered drone technology, precision farming, and sustainable practices.\n\n📊 **Our Impact:**\n• 5000+ Farmers Empowered\n• 50+ Projects Completed\n• 15+ Technology Partners\n• 10,000+ Acres Monitored\n\nWe seamlessly blend sustainable farming with cutting-edge technology! 🌾",
    followUp: ["What services do you offer?", "How can drones help my farm?", "Where are you located?"]
  },
  {
    id: "mission",
    keywords: ["mission", "vision", "goal", "purpose", "why", "commitment", "objective"],
    question: "What is your mission and vision?",
    answer: "🎯 **Our Mission:**\nTo promote sustainable and ethical farming practices that empower rural communities, foster self-reliance, and preserve soil health for future generations. Through cutting-edge training, innovation, and community partnerships, we deliver quality produce while driving transformative rural development.\n\n🔭 **Our Vision:**\nTo pioneer the future of agriculture by embracing continuous innovation and deploying cutting-edge smart farming technologies—setting new standards for intelligent, resilient, and prosperous agriculture.",
    followUp: ["Tell me about your services", "How do you support farmers?"]
  },
  {
    id: "location",
    keywords: ["location", "address", "where", "office", "pune", "find", "visit", "situated"],
    question: "Where is SK Natural Farm located?",
    answer: "📍 **Our Address:**\n802, Bhama Centre, Hinjawadi-Wakad Bridge, Wakad, Pune, Maharashtra - 411057, India\n\n📧 **Email:** connect@sknaturalfarm.in\n📞 **Phone:** +91 7827335954\n\nWe serve farmers across India with our drone services and agri-solutions! Our presence extends to multiple states through our network of partners.",
    followUp: ["Request a callback", "Get directions", "Contact sales team"]
  },

  // Agri Drones - Detailed
  {
    id: "agri-drones",
    keywords: ["agri drone", "agriculture drone", "farming drone", "crop drone", "drone types", "quadcopter", "hexacopter", "octocopter"],
    question: "What agricultural drones do you offer?",
    answer: "We offer smart AI-powered agricultural drones with various configurations:\n\n🛸 **Quadcopter A1** - Surveying & Mapping\n• 4 Wings | Up to 10kg payload\n\n🛸 **Hexacopter B2** - Crop Spraying\n• 6 Wings | Up to 15kg payload\n\n🛸 **Octocopter C3** - Heavy Payload Delivery\n• 8 Wings | Up to 25kg payload\n\n🛸 **Hexacopter E5** - Seed Sowing\n• 6 Wings | Up to 18kg payload\n\n🛸 **Octocopter F6** - Forest Fire Mapping\n• 8 Wings | Up to 30kg payload\n\nAll drones feature GPS/RTK navigation and precision spraying systems!",
    followUp: ["What are the drone prices?", "Book a demo", "Drone features"]
  },
  {
    id: "drone-services",
    keywords: ["drone", "spray", "aerial", "uav", "flying", "spraying", "drone help", "drone benefit"],
    question: "How do drones help in agriculture?",
    answer: "Drones deliver incredible results for farming! 🚁\n\n📈 **75% Increase** in Crop Yield\n💧 **50% Water Savings**\n🧪 **40% Less Pesticide** Usage\n⏱️ **80% Time Saved** in Field Operations\n\n**Key Benefits:**\n• Precision spraying reduces chemical waste\n• Real-time crop monitoring detects issues early\n• Soil health analysis for optimal nutrition\n• GPS-guided operations ensure complete coverage\n• Reduces manual labor and farming costs",
    followUp: ["What are drone prices?", "Request a demo", "Which crops can drones help?"]
  },
  {
    id: "drone-features",
    keywords: ["feature", "technology", "specs", "specification", "capability", "rtk", "gps", "smart flight", "navigation"],
    question: "What features do your drones have?",
    answer: "Our drones are packed with advanced features:\n\n🎮 **Smart Flight Modes**\nRemote control, mobile apps, ground control stations, and fully autonomous GPS-defined paths with RTK technology\n\n📍 **Navigation & Positioning**\nGPS, GLONASS, and RTK modules for high spatial accuracy to identify and treat specific problem zones\n\n⚖️ **Payload Capacity**\nTanks ranging from 5 to 30kg with precision spraying system controlling droplet size and coverage\n\n🔋 **Battery**\nHigh-capacity Li-Po/Li-Ion batteries, fast-charging, field-swappable\n\n🌤️ **Weather Tolerance**\nDust-proof, heat-tolerant, capable of flying in winds up to 35 km/h",
    followUp: ["Request a demo", "What are the prices?"]
  },

  // Drone Pricing - Accurate from website
  {
    id: "pricing",
    keywords: ["price", "cost", "fee", "charge", "rate", "how much", "expensive", "affordable", "package", "pricing"],
    question: "What are your drone service prices?",
    answer: "💰 **Agri Drone Service Packages:**\n\n🟢 **Alpha Mode** - ₹500/acre\n• Manual control | 15 min flight time\n• Up to 10kg payload | 300-400m range\n\n🟡 **Omega Core** - ₹1,500/hour\n• Digital access control | 35 min flight time\n• Up to 15kg payload | 600m range\n\n🔴 **Quantum Pro** - ₹2,000/hour\n• Fully automatic control | 50 min flight time\n• Up to 27kg payload | 1000m range\n\n*Custom solutions available based on farm size and requirements!*",
    followUp: ["Get a custom quote", "Book a demo", "Contact sales team"]
  },

  // Defence Drones
  {
    id: "defence-drones",
    keywords: ["defence", "defense", "military", "army", "security", "surveillance", "tactical", "armed forces", "guardian"],
    question: "Do you provide defence drones?",
    answer: "Yes! Our Defence Drone division provides specialized UAVs for security and military applications:\n\n🛡️ **Capabilities:**\n• Surveillance & reconnaissance\n• High-resolution imaging & thermal tracking\n• Autonomous mission capability\n• Rugged environment operation\n• Real-time intelligence gathering\n\n**Drone Types:**\n• Quadcopter D4 - Military Surveillance (12kg payload)\n• Various configurations for tactical operations\n\n💰 **Pricing:** Starts from ₹35,000 for basic packages, with Omega Core at ₹91,519/hr and Quantum Pro at ₹2,01,386/hr for professional use.",
    followUp: ["Request defence consultation", "Contact sales"]
  },

  // Drone Lab Setup - COMPREHENSIVE
  {
    id: "drone-lab",
    keywords: ["drone lab", "lab setup", "research", "facility", "prototyping", "testing", "innovation", "development", "r&d", "lab"],
    question: "What is your Drone Lab Setup service?",
    answer: "🔬 **Advanced Drone Lab & Research Facility**\n\nOur Innovation Hub is a specialized environment for the complete unmanned aerial systems workflow—from concept and prototyping to calibration and flight testing.\n\n**Who It's For:**\n🏢 Businesses & Startups\n🎓 Educational Institutes\n🏛️ Government Teams\n\n✅ 100% Safety Compliant\n✅ Rapid Prototyping Capabilities\n✅ Skilled Technical Support\n\nWe provide advanced tools, expert guidance, and controlled environments for confident drone technology exploration!",
    followUp: ["Drone lab services", "Industries supported", "Partner with drone lab"]
  },
  {
    id: "drone-lab-services",
    keywords: ["lab service", "prototyping", "flight testing", "calibration", "repair", "simulation", "data analysis", "lab offer"],
    question: "What services does the Drone Lab offer?",
    answer: "🛠️ **Core Drone Lab Services:**\n\n**1. Design & Prototyping**\nComplete support for building new systems. Workstations for assembling frames, motors, and sensors. Experiment with materials and new payload configurations.\n\n**2. Indoor Flight Testing** 🛸\nA controlled indoor flight zone for safe testing. Conduct stability checks, hover tests, obstacle avoidance trials, and takeoff/landing analysis without weather risks.\n\n**3. Software & AI Simulation** 🧠\nTest flight algorithms, navigation, and computer vision. High-precision simulations for weather conditions, uneven terrain, and emergency behaviors.\n\n**4. Calibration & Repair** 🔧\nPeak performance with IMU/compass calibration, sensor tuning, and battery health monitoring. Professional maintenance for reliable operations.\n\n**5. Data Capture & Analysis** 📊\nProcess data from drone sensors. Services include 2D/3D mapping, NDVI crop analysis, thermal imaging, and detailed flight log analytics.",
    followUp: ["Industries you support", "Partner with lab", "Book consultation"]
  },
  {
    id: "drone-lab-industries",
    keywords: ["industry", "sector", "agriculture lab", "construction", "industrial", "logistics", "security sector", "supported"],
    question: "Which industries does the Drone Lab support?",
    answer: "🌐 **Industries We Empower:**\n\n🌾 **Agriculture**\nPrecision farming, crop monitoring, spraying solutions\n\n🏗️ **Construction**\nSite surveys, progress monitoring, 3D mapping\n\n🏭 **Industrial**\nInfrastructure inspection, asset monitoring\n\n🛡️ **Security**\nSurveillance systems, perimeter monitoring\n\n📦 **Logistics**\nDelivery drone prototyping, route optimization\n\nWe provide aerial intelligence solutions tailored to each sector's unique requirements!",
    followUp: ["Partner with drone lab", "Request consultation", "Get pricing"]
  },
  {
    id: "drone-lab-partner",
    keywords: ["lab partner", "access lab", "use lab", "join lab", "collaborate lab", "rent lab", "lab partnership"],
    question: "How can I partner with or access the Drone Lab?",
    answer: "🤝 **Partner With Our Drone Lab**\n\nGain affordable access to advanced tools, rapid prototyping, and expert guidance!\n\n**Partnership Options:**\n• 🏢 **Corporate R&D** - Use our facility for drone development\n• 🎓 **Academic Collaboration** - Research partnerships with institutions\n• 🚀 **Startup Incubation** - Build your drone prototype with our support\n• 🏛️ **Government Projects** - Custom drone solutions for govt. initiatives\n\n**How to Get Started:**\n1️⃣ Contact our team\n2️⃣ Schedule a facility tour\n3️⃣ Discuss your project requirements\n4️⃣ Begin development with expert support\n\n📧 Email: connect@sknaturalfarm.in\n📞 Phone: +91 7827335954",
    followUp: ["Book consultation", "Send my details", "View facility"]
  },

  // Agri Services
  {
    id: "services",
    keywords: ["services", "offer", "provide", "help", "solutions", "what do you do", "agri service"],
    question: "What agricultural services do you offer?",
    answer: "We provide comprehensive agri-services:\n\n📋 **Business Proposal** - Professional agri-business plans\n📊 **DPR (Detailed Project Report)** - For government schemes & loans\n📐 **Farm Layout Design** - Optimized field planning\n📅 **Project Planning** - End-to-end agricultural project management\n🔧 **Turnkey Solutions** - Complete farm setup services\n🌿 **Landscaping** - Agricultural landscaping services\n🥬 **Kitchen Garden Setup** - Home garden solutions\n📚 **Training Programs** - Farmer capacity building\n\nPlus our core **Drone Services** for precision spraying, monitoring, and mapping!",
    followUp: ["Tell me about drone services", "Get a custom quote", "Contact for services"]
  },

  // Natural Farming
  {
    id: "natural-farming",
    keywords: ["natural", "organic", "sustainable", "eco", "environment", "chemical-free", "green", "soil health"],
    question: "What sustainable farming practices do you follow?",
    answer: "🌱 **Our Sustainable Approach:**\n\n• Natural farming methods preserving soil health\n• Precision application reduces chemical usage by 40%\n• Water conservation through smart irrigation guidance\n• Drone-based monitoring reduces unnecessary interventions\n• Focus on organic horticulture practices\n• Environmental stewardship in all operations\n\n**Core Strengths:**\n🌿 Innovation Excellence - Cutting-edge organic horticulture\n🤝 Strategic Partnerships - NGOs, government, research centers\n👥 Community Impact - Women-focused empowerment initiatives\n\n*Empowering farmers with sustainable technologies for present and future generations!*",
    followUp: ["How can I start natural farming?", "Training programs", "Contact us"]
  },

  // Training & Capacity Building
  {
    id: "training",
    keywords: ["training", "learn", "course", "workshop", "program", "certification", "education", "skill"],
    question: "Do you offer training programs?",
    answer: "📚 Yes! Training is core to our mission:\n\n**Programs Available:**\n🚁 Drone operation & maintenance training\n🌿 Sustainable farming practices\n📊 Precision agriculture techniques\n💻 Data analytics for farming\n🌱 Natural/organic farming methods\n\n**Special Focus:**\n👩‍🌾 Women-focused capacity building programs\n🌱 Grassroots empowerment initiatives\n🤝 Community training workshops\n\nWe partner with KVKs, universities, and NGOs including Bihar Agriculture University, University of Pusa, and NGO PRADAN!",
    followUp: ["Enroll in training", "Host a workshop", "Contact us"]
  },

  // Community & Partnerships
  {
    id: "farmer-support",
    keywords: ["farmer", "support", "community", "rural", "women", "empowerment", "social", "impact", "ngo", "partnership"],
    question: "How do you support farming communities?",
    answer: "🤝 **Community Impact:**\n\n• 5000+ farmers directly empowered\n• Women-focused capacity building initiatives\n• Grassroots empowerment programs\n• Rural development partnerships\n\n**Trusted Partners:**\n• KVK Kawardha, KVK Barh (Patna), KVK PRADAN\n• NGO PRADAN\n• Bihar Agriculture University\n• University of Pusa\n• Multiple research centers\n\n💬 *\"SK Natural Farm is doing commendable work in promoting sustainable and tech-driven agriculture. Their use of drones for precision farming is truly transforming the way farmers work.\"* - KVK Team",
    followUp: ["Partner with us", "Join farmer network", "Training programs"]
  },
  {
    id: "partnerships",
    keywords: ["partner", "partnership", "collaborate", "business", "dealer", "franchise", "join", "collaborate"],
    question: "Can I partner with SK Natural Farm?",
    answer: "Absolutely! We're always looking for passionate partners! 🤝\n\n**Partnership Opportunities:**\n🏢 **Service Provider Network** - Become an authorized drone service provider\n🎓 **Training Centers** - Host our programs in your region\n🌾 **FPO Collaborations** - Special programs for Farmer Producer Organizations\n🔬 **Research Partners** - Academic and industry collaborations\n🔧 **Drone Lab Partners** - Access our R&D facility\n\nWe've built strategic partnerships with NGOs, government institutions, and research centers across India!",
    followUp: ["Request partnership details", "Contact us"]
  },

  // Careers
  {
    id: "careers",
    keywords: ["job", "career", "work", "hiring", "vacancy", "intern", "employment", "opportunity", "join team"],
    question: "Are there job opportunities at SK Natural Farm?",
    answer: "🎯 **Current Openings (Pune Location):**\n\n💻 **Embedded Intern**\nSkills: Embedded C, Microcontrollers, Sensors, PCB Design\n\n🛸 **Drone Assembly Intern**\nSkills: Mechanical Assembly, Wiring, Troubleshooting\n\n🤖 **Robotics Intern**\nSkills: Arduino, Raspberry Pi, Automation\n\n📱 **Social Media Manager**\nSkills: Social media trends, content strategy\n\n📈 **Digital Marketer**\nSkills: Google Ads, SEO, Analytics\n\n📧 **Apply at:** hr@sknaturalfarm.in or connect@sknaturalfarm.in",
    followUp: ["Apply now", "Contact HR"]
  },

  // Blog & Resources
  {
    id: "blog",
    keywords: ["blog", "article", "resource", "read", "learn", "information", "knowledge", "news"],
    question: "Do you have educational resources or blogs?",
    answer: "📖 **Our Blog Features:**\n\n• **Drone Technology in Agriculture** - Complete guide on how drones transform farming\n• **Smart Irrigation Systems** - Sustainable water management guide\n• **Vertical Farming** - Growing up, not out\n• Latest agri-tech news and innovations\n• Practical farming tips and guides\n\n🌐 **Visit:** www.sknaturalfarm.in/blog\n\nStay updated on the latest in smart farming!",
    followUp: ["Visit blog", "Tell me about drone technology"]
  },

  // Contact & Lead Collection
  {
    id: "contact",
    keywords: ["contact", "call", "phone", "email", "reach", "talk", "speak", "connect", "enquiry", "inquiry", "touch"],
    question: "How can I contact you?",
    answer: "We'd love to hear from you! 📞\n\n📍 **Address:**\n802, Bhama Centre, Hinjawadi-Wakad Bridge, Wakad, Pune, Maharashtra - 411057, India\n\n📧 **Email:** connect@sknaturalfarm.in\n📞 **Phone:** +91 7827335954\n\n🌐 **Website:** www.sknaturalfarm.in\n\nOr share your details here, and our team will call you back within 24 hours!",
    followUp: ["Request a callback", "Send my contact details", "Get directions"]
  },
  {
    id: "request-service",
    keywords: ["request", "book", "hire", "get started", "order", "avail", "want service", "need help"],
    question: "How can I request your services?",
    answer: "Getting started is easy! 🚀\n\n**Option 1:** Share your details here, and our team will contact you within 24 hours.\n\n**Option 2:** Contact us directly:\n📧 connect@sknaturalfarm.in\n📞 +91 7827335954\n\n**Option 3:** Visit our office in Pune\n\nWe'll assess your farm's requirements and provide a customized solution including site survey and free consultation!",
    followUp: ["Send my details", "Request callback", "Get a quote"]
  },
  {
    id: "demo",
    keywords: ["demo", "demonstration", "trial", "show", "see", "test", "pilot", "sample"],
    question: "Can I get a drone demonstration?",
    answer: "Absolutely! We offer on-field demonstrations: 🛸\n\n✅ Live drone flight on your farm\n✅ See spraying/mapping capabilities in action\n✅ Understand data analytics features\n✅ Q&A with our technical team\n\n*Demos are subject to location availability and scheduling.*\n\nShare your farm location and contact details to book a demo!",
    followUp: ["Book a demo", "Send my details"]
  },
  {
    id: "custom-solution",
    keywords: ["custom", "customized", "tailor", "specific", "special", "unique", "my need", "personalized"],
    question: "Do you offer customized solutions?",
    answer: "Yes! We specialize in customized solutions:\n\n🎯 **For Farmers:**\n• Custom drone packages based on farm size\n• Specific crop monitoring solutions\n• Tailored training programs\n\n🏢 **For Businesses:**\n• Custom drone lab setups\n• Industry-specific drone solutions\n• Partnership programs\n\n🏛️ **For Institutions:**\n• Educational programs\n• Research collaborations\n• Government project execution (DPR, Project Planning)",
    followUp: ["Tell us your requirements", "Get a custom quote"]
  },

  // Technical Questions
  {
    id: "coverage",
    keywords: ["area", "coverage", "acre", "hectare", "capacity", "how much land", "size", "field"],
    question: "How much area can drones cover?",
    answer: "📏 **Coverage Capacity:**\n\n• **Spraying:** 8-15 acres per hour (depending on drone model)\n• **Mapping:** Up to 100+ acres per flight\n• **Monitoring:** 10,000+ acres tracked with our technology\n\n**Flight Ranges by Package:**\n• Alpha Mode: 300-400 meters\n• Omega Core: 600 meters\n• Quantum Pro: 1000 meters\n\n**Flight Time:**\n• 15-50 minutes depending on package\n\nActual coverage depends on field conditions and crop type.",
    followUp: ["What's the best package for my farm?", "Get a quote"]
  },
  {
    id: "crops",
    keywords: ["crop", "wheat", "rice", "paddy", "cotton", "sugarcane", "vegetable", "fruit", "which crop", "suitable"],
    question: "Which crops can drones help with?",
    answer: "🌾 Our drones work with various crops:\n\n**Field Crops:**\nWheat, Rice, Cotton, Sugarcane, Soybean, Maize\n\n**Horticulture:**\nMango, Grapes, Pomegranate, Citrus fruits\n\n**Vegetables:**\nTomato, Onion, Potato, leafy vegetables\n\n**Plantation:**\nTea, Coffee, Coconut\n\n**Pulses & Oilseeds:**\nGroundnut, Mustard, Chana\n\nOur precision spraying and monitoring adapt to crop-specific requirements!",
    followUp: ["Get recommendations for my crop", "Request a demo"]
  },

  // Default/Fallback
  {
    id: "default",
    keywords: [],
    question: "I have another question",
    answer: "I'm here to help! 😊 While I may not have a ready answer for that specific question, our team would be happy to assist you personally.\n\n**Popular Topics:**\n🛸 Agricultural Drones & Pricing\n🛡️ Defence Drones\n🔬 Drone Lab Setup\n🌱 Sustainable Farming Services\n📚 Training Programs\n💼 Career Opportunities\n\n📞 Or contact us: +91 7827335954",
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
  text: "🌾 Namaste! Welcome to SK Natural Farm!\n\nI'm your smart farming assistant. We're transforming agriculture with AI-powered drones, precision farming, and sustainable solutions across India.\n\n**Quick Actions:**\n• Learn about our **Agri Drones** & pricing\n• Explore **Defence Drones** & **Drone Lab**\n• Discover **Training** programs\n• Get **customized solutions** for your farm\n\nHow can I help you today?",
  quickReplies: quickReplies.slice(0, 4)
};

export function findBestMatch(input: string): FAQ {
  const normalizedInput = input.toLowerCase().trim();
  
  // Check for lead/contact intent
  const leadKeywords = ["contact", "call", "phone", "email", "reach", "talk", "speak", "connect", "enquiry", "inquiry", "request", "book", "demo", "quote", "callback", "my details"];
  const isLeadIntent = leadKeywords.some(keyword => normalizedInput.includes(keyword));
  
  let bestMatch: FAQ | null = null;
  let highestScore = 0;

  for (const faq of faqData) {
    if (faq.id === "default") continue;
    
    let score = 0;
    for (const keyword of faq.keywords) {
      if (normalizedInput.includes(keyword.toLowerCase())) {
        // Longer keyword matches get higher scores
        score += keyword.length;
        // Exact phrase match bonus
        if (keyword.includes(' ') && normalizedInput.includes(keyword)) {
          score += 5;
        }
      }
    }
    
    // Check question words for additional matching
    const questionWords = faq.question.toLowerCase().split(' ');
    for (const word of questionWords) {
      if (word.length > 3 && normalizedInput.includes(word)) {
        score += 1;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = faq;
    }
  }

  // If lead intent is strong but no good match, return contact FAQ
  if (isLeadIntent && highestScore < 5) {
    return faqData.find(f => f.id === "contact") || faqData.find(f => f.id === "default")!;
  }

  return bestMatch || faqData.find(f => f.id === "default")!;
}
