export interface FAQ {
  id: string;
  keywords: string[];
  question: string[];
  answer: string;
  followUp?: string[];
}

export const faqData: FAQ[] = [
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
    id: "mission",
    keywords: ["mission", "vision", "goal", "purpose", "aim", "objective", "why sk natural farm", "what do you do", "what is your mission", "company mission", "company vision", "why this company", "reason for existence", "what is your aim", "commitment"],
    question: [
      "What is your mission?",
      "What is the mission of SK Natural Farm?",
      "What is your company mission?",
      "What is your vision?",
      "What do you aim to achieve?",
      "What is the goal of SK Natural Farm?",
      "Why was SK Natural Farm started?",
      "What is the purpose of SK Natural Farm?",
      "What is your objective?",
      "Why do you do what you do?"
    ],
    answer: "🎯 **Our Mission:**\nTo promote sustainable and ethical farming practices that empower rural communities, foster self-reliance, and preserve soil health for future generations. Through cutting-edge training, innovation, and community partnerships, we deliver quality produce while driving transformative rural development.\n\n🔭 **Our Vision:**\nTo pioneer the future of agriculture by embracing continuous innovation and deploying cutting-edge smart farming technologies—setting new standards for intelligent, resilient, and prosperous agriculture. 🚀",
    followUp: ["Tell me about your services", "How do you support farmers?"]
  },
  {
    id: "location",
    keywords: ["location", "address", "where", "office", "pune", "find", "visit", "situated", "based"],
    question: [
      "Where is SK Natural Farm located?",
      "What is your address?",
      "Where is your office?",
      "How can I visit you?",
      "Where are you based?"
    ],
    answer: "📍 **Our Address:**\n802, Bhama Centre, Hinjawadi-Wakad Bridge, Wakad, Pune, Maharashtra - 411057, India\n\n📧 **Email:** connect@sknaturalfarm.in\n📞 **Phone:** +91 7827335954\n\nWe serve farmers across India with our drone services and agri-solutions! Our presence extends to multiple states through our network of partners.",
    followUp: ["Request a callback", "Get directions", "Contact sales team"]
  },

  // =========================
  // SERVICES
  // =========================
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
    answer: "We offer a comprehensive range of smart farming solutions:\n\n🚁 **Drone Services** - Aerial spraying, crop monitoring, and field mapping\n📊 **Data Analytics** - Soil analysis, crop health insights, and yield predictions\n🌿 **Natural Farming** - Sustainable practices and organic solutions\n🎓 **Training Programs** - Empowering farmers with new skills\n🤝 **Community Support** - Connecting farmers for shared growth\n📋 **Business Proposal & DPR** - Professional agri-business plans\n📐 **Farm Layout Design** - Optimized field planning\n🔧 **Turnkey Solutions** - Complete farm setup services\n\nWould you like details on any specific service?",
    followUp: ["Tell me about drone services", "Drone Lab Setup", "What is precision agriculture?", "Contact for services"]
  },
  {
    id: "drone-services",
    keywords: ["drone", "spray", "aerial", "uav", "flying", "spraying", "drone help", "drone benefit"],
    question: [
      "How do drones help in agriculture?",
      "What can drones do for farming?",
      "Tell me about drone services",
      "How do drones benefit farming?",
      "What are the advantages of agricultural drones?"
    ],
    answer: "Drones are game-changers for modern farming! 🚁\n\n📈 **75% Increase** in Crop Yield\n💧 **50% Water Savings**\n🧪 **40% Less Pesticide** Usage\n⏱️ **80% Time Saved** in Field Operations\n\n**Key Benefits:**\n✈️ **Precision Spraying** - Apply pesticides and fertilizers with pinpoint accuracy, saving up to 30% on inputs\n📸 **Crop Monitoring** - Identify pest infestations, diseases, and nutrient deficiencies early\n🗺️ **Field Mapping** - Create detailed maps of your farm for better planning\n⏱️ **Time Saving** - Cover large areas in minutes instead of hours\n💧 **Water Management** - Detect irrigation issues before they become problems\n\nOur trained drone pilots handle everything professionally!",
    followUp: ["How much does drone spraying cost?", "Request a demo", "Which crops can drones help?"]
  },
  {
    id: "precision-agriculture",
    keywords: ["precision", "smart", "technology", "tech", "modern", "analytics", "data", "precision agriculture"],
    question: [
      "What is precision agriculture?",
      "Tell me about smart farming",
      "How does technology help in farming?",
      "What is smart agriculture?"
    ],
    answer: "Precision agriculture is the future of farming! 🎯 It uses technology to make farming decisions based on actual field data rather than guesswork.\n\nWe use:\n📡 **Sensors & Drones** - To collect real-time field data\n🧪 **Soil Analysis** - Understanding exactly what your soil needs\n📈 **Data Analytics** - Converting raw data into actionable insights\n🌡️ **Weather Integration** - Planning around accurate forecasts\n📍 **GPS Navigation** - High spatial accuracy for precise operations\n\nThe result? Higher yields, lower costs, and healthier crops!",
    followUp: ["How can I get started?", "What are the costs?", "Request a demo"]
  },
  {
    id: "natural-farming",
    keywords: ["natural", "organic", "sustainable", "eco", "environment", "chemical-free", "green", "soil health"],
    question: [
      "What is sustainable natural farming?",
      "Tell me about natural farming",
      "What are your sustainable practices?",
      "Do you support organic farming?",
      "How do you protect the environment?"
    ],
    answer: "Sustainable natural farming is our core philosophy! 🌍 It's about growing healthy food while protecting our planet.\n\nOur approach includes:\n🌱 **Zero Chemical Inputs** - Using natural alternatives to pesticides\n🐛 **Biological Pest Control** - Working with nature, not against it\n🔄 **Crop Rotation** - Keeping soil healthy and productive\n💚 **Composting** - Turning farm waste into valuable fertilizer\n🐝 **Biodiversity** - Creating habitats for beneficial insects\n💧 **Water Conservation** - Through smart irrigation guidance\n\n**Core Strengths:**\n🌿 Innovation Excellence - Cutting-edge organic horticulture\n🤝 Strategic Partnerships - NGOs, government, research centers\n👥 Community Impact - Women-focused empowerment initiatives\n\nHealthier farms mean healthier food and happier farmers!",
    followUp: ["How do I transition to natural farming?", "What support do you provide?", "Training programs"]
  },

  // =========================
  // COMMUNITY & SUPPORT
  // =========================
  {
    id: "farmer-support",
    keywords: ["farmer", "support", "help", "community", "training", "education", "learn", "rural", "women", "empowerment", "social", "impact", "ngo", "partnership"],
    question: [
      "How do you support farmers?",
      "What help do you provide to farmers?",
      "Tell me about farmer community",
      "How do you empower farmers?",
      "What community programs do you have?"
    ],
    answer: "Farmer empowerment is at the heart of everything we do! 💪\n\n🤝 **Community Impact:**\n• 5000+ farmers directly empowered\n• Women-focused capacity building initiatives\n• Grassroots empowerment programs\n• Rural development partnerships\n\n**What We Offer:**\n👨‍🌾 **Training Programs** - Hands-on workshops on drone operation and smart farming\n📚 **Knowledge Sharing** - Regular sessions on best practices\n🤝 **Community Groups** - Connect with fellow progressive farmers\n📞 **24/7 Support** - Our experts are just a call away\n💰 **Financing Help** - Guidance on government schemes and subsidies\n\n**Trusted Partners:**\n• KVK Kawardha, KVK Barh (Patna), KVK PRADAN\n• NGO PRADAN\n• Bihar Agriculture University\n• University of Pusa\n\nWe don't just sell services - we build partnerships!",
    followUp: ["Join a training program", "Request a callback", "Partner with us"]
  },
  {
    id: "training",
    keywords: ["training", "learn", "course", "workshop", "program", "certification", "education", "skill"],
    question: [
      "Do you offer training programs?",
      "Can I learn drone operation?",
      "What courses do you provide?",
      "Is there any certification program?",
      "How can I get trained?"
    ],
    answer: "Yes! We offer comprehensive training programs for farmers and agri-entrepreneurs: 🎓\n\n**Available Programs:**\n🚁 **Drone Pilot Training** - Learn to operate agricultural drones\n📊 **Smart Farming Basics** - Introduction to precision agriculture\n🌿 **Natural Farming Certification** - Sustainable practices training\n💼 **Agri-Entrepreneurship** - Start your own agri-tech business\n💻 **Data Analytics for Farming** - Learn farm data analysis\n\n**Special Focus:**\n👩‍🌾 Women-focused capacity building programs\n🌱 Grassroots empowerment initiatives\n🤝 Community training workshops\n\nAll programs include hands-on practice and certification!\n\nWe partner with KVKs, universities, and NGOs including Bihar Agriculture University, University of Pusa, and NGO PRADAN!",
    followUp: ["Request training details", "Contact us", "Enroll now"]
  },

  // =========================
  // PRICING & PACKAGES
  // =========================
  {
    id: "pricing",
    keywords: ["price", "cost", "fee", "charge", "rate", "how much", "expensive", "affordable", "package", "pricing"],
    question: [
      "What are your pricing and packages?",
      "How much does it cost?",
      "What are your rates?",
      "Tell me about your packages",
      "What are your drone service prices?"
    ],
    answer: "Our pricing is designed to be farmer-friendly and flexible! 💰\n\n**Agri Drone Service Packages:**\n\n🟢 **Alpha Mode (Minimal Use)**\n• ₹500 per acre\n• Manual control\n• 15 minutes flight time\n• Up to 10 kg weight lifting\n• 300–400 meter operational range\n\n🟡 **Omega Core (Moderate Use)**\n• ₹1500 per hour\n• Digital access control\n• 35 minutes flight time\n• Up to 15 kg weight lifting\n• 600 meter operational range\n\n🔵 **Quantum Pro (Professional Use)**\n• ₹2000 per hour\n• Fully automatic control\n• 50 minutes flight time\n• Up to 27 kg weight lifting\n• 1000 meter operational range\n\n**Why Choose Us:**\n✅ No hidden charges\n✅ Pay only for what you use\n✅ Bulk discounts available\n✅ Government subsidy assistance\n\nFor an exact quote tailored to your farm, please share your details!",
    followUp: ["Get a custom quote", "Contact sales team", "Request drone demo"]
  },
  {
    id: "agri-drone-packages",
    keywords: ["packages", "package", "services package", "rates", "per acre", "drone-services per acre", "drone-services package", "can i get a package", "service plans", "service options", "drone service plans", "cost per acre", "agriculture drone packages", "cost of drone services", "agri drone pricing", "agri drone service plans", "cost of drone", "agri drone service options"],
    question: [
      "What agri drone service packages are available?",
      "Can you tell me about your agri drone service packages?",
      "What are the different agri drone service packages offered?",
      "Do you have various agri drone service packages?",
      "What options do you have for agri drone service packages?"
    ],
    answer: "SK Natural Farm offers three agri drone service packages under the Agro category, customizable as per farming needs:\n\n🟢 **Alpha Mode (Minimal Use)**\n• ₹500 per acre\n• Manual control\n• 15 minutes flight time\n• Up to 10 kg weight lifting\n• 300–400 meter operational range\n\n🟡 **Omega Core (Moderate Use)**\n• ₹1500 per hour\n• Digital access control\n• 35 minutes flight time\n• Up to 15 kg weight lifting\n• 600 meter operational range\n\n🔵 **Quantum Pro (Professional Use)**\n• ₹2000 per hour\n• Fully automatic control\n• 50 minutes flight time\n• Up to 27 kg weight lifting\n• 1000 meter operational range\n\nEach package is designed for different farm sizes and usage intensity, and can be customized to match exact requirements. 🚁",
    followUp: ["Get pricing", "Contact sales team", "Request drone demo"]
  },

  // =========================
  // CONTACT & LEAD COLLECTION
  // =========================
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
    id: "partnerships",
    keywords: ["partner", "partnership", "collaborate", "business", "dealer", "franchise", "join"],
    question: [
      "Can I partner with SK Natural Farm?",
      "How can I collaborate with you?",
      "Do you have partnership programs?",
      "Can I become a dealer?",
      "How to join your network?"
    ],
    answer: "Absolutely! We're always looking for passionate partners to grow with us! 🤝\n\n**Partnership Opportunities:**\n🏢 **Dealer Network** - Become an authorized service provider\n🎓 **Training Centers** - Host our programs in your region\n🌾 **FPO Collaborations** - Special programs for Farmer Producer Organizations\n🔬 **Research Partners** - Academic and industry collaborations\n🔧 **Drone Lab Partners** - Access our R&D facility\n\nWe've built strategic partnerships with NGOs, government institutions, and research centers across India!\n\nShare your interest, and our partnerships team will connect with you!",
    followUp: ["Request partnership details", "Contact us"]
  },
  {
    id: "impact",
    keywords: ["impact", "success", "results", "farmers helped", "achievements", "story", "case study"],
    question: [
      "What impact have you made?",
      "How many farmers have you helped?",
      "What are your achievements?",
      "Tell me your success stories"
    ],
    answer: "We're proud of the difference we're making in Indian agriculture! 🌟\n\n**Our Impact:**\n👨‍🌾 5000+ farmers empowered\n🌾 10,000+ acres monitored\n💧 50% water savings achieved\n🧪 40% reduction in chemical usage\n📈 75% improvement in crop yields\n🎯 50+ projects completed\n🤝 15+ technology partners\n\n💬 *\"SK Natural Farm is doing commendable work in promoting sustainable and tech-driven agriculture. Their use of drones for precision farming is truly transforming the way farmers work.\"* - KVK Team\n\nEvery number represents a farmer whose life we've touched. And we're just getting started!",
    followUp: ["Learn more about our work", "Join our community"]
  },

  // =========================
  // CROPS & FARM TYPES
  // =========================
  {
    id: "crop-types",
    keywords: ["crop", "crops", "which crops", "suitable", "wheat", "rice", "paddy", "cotton", "sugarcane", "vegetable", "fruit"],
    question: [
      "Which crops are suitable for drone spraying?",
      "What crops can you help with?",
      "Do you work with wheat/rice/cotton?",
      "Can drones help with my crop?"
    ],
    answer: "Drone spraying is suitable for a wide variety of crops! 🌾\n\n**Field Crops:**\nCotton, Soybean, Sugarcane, Paddy, Wheat, Maize\n\n**Horticulture:**\nMango, Grapes, Pomegranate, Citrus fruits\n\n**Vegetables:**\nTomato, Onion, Potato, leafy vegetables\n\n**Plantation:**\nTea, Coffee, Coconut\n\n**Pulses & Oilseeds:**\nGroundnut, Mustard, Chana\n\nOur team customizes spraying based on crop type and requirements. Our precision spraying and monitoring adapt to crop-specific needs!",
    followUp: ["Drone spraying cost", "Request demo", "Get recommendations for my crop"]
  },
  {
    id: "small-farm",
    keywords: ["small farmer", "small land", "1 acre", "2 acre", "small farm", "marginal farmer"],
    question: [
      "Is your service suitable for small farmers?",
      "Can small farmers use your service?",
      "Do you help farmers with small land?",
      "Is it affordable for small farmers?"
    ],
    answer: "Yes! 🌾 Our services are designed for both small and large farmers. Even farmers with small landholdings can benefit from drone spraying and advisory support.\n\n**Benefits for Small Farmers:**\n• Alpha Mode package at just ₹500/acre\n• Group booking discounts available\n• Government subsidy assistance\n• Training programs for self-operation\n\nWe believe every farmer deserves access to modern technology!",
    followUp: ["Pricing details", "Contact team", "Training programs"]
  },

  // =========================
  // DRONE LAB FOR COLLEGES
  // =========================
  {
    id: "drone-lab",
    keywords: ["drone lab", "college lab", "drone laboratory", "lab setup", "research", "facility", "prototyping", "testing", "innovation", "development", "r&d", "lab"],
    question: [
      "Do you set up drone labs for colleges and institutions?",
      "What is your Drone Lab Setup service?",
      "Tell me about drone lab",
      "Can you setup a lab in our college?"
    ],
    answer: "Yes! 🚁 SK Natural Farm provides complete drone lab setup solutions for colleges, universities, ITIs, and training institutes.\n\n🔬 **Advanced Drone Lab & Research Facility**\n\nOur Innovation Hub is a specialized environment for the complete unmanned aerial systems workflow—from concept and prototyping to calibration and flight testing.\n\n**Who It's For:**\n🏢 Businesses & Startups\n🎓 Educational Institutes\n🏛️ Government Teams\n\n✅ 100% Safety Compliant\n✅ Rapid Prototyping Capabilities\n✅ Skilled Technical Support\n\nWe provide advanced tools, expert guidance, and controlled environments for confident drone technology exploration!",
    followUp: ["What does the drone lab include?", "Contact for lab setup", "Drone lab services"]
  },
  {
    id: "lab-components",
    keywords: ["lab equipment", "lab components", "what is included", "drone lab items", "drone lab include", "drone lab setup includes"],
    question: [
      "What does a drone lab setup include?",
      "What equipment is in the drone lab?",
      "What are the components of drone lab?",
      "What is included in lab setup?"
    ],
    answer: "Our drone lab setup includes:\n\n🛠️ **Training drones & components**\n🖥️ **Simulation software**\n🔋 **Batteries, chargers & safety kits**\n📡 **Controllers & sensors**\n📘 **Curriculum & lab manuals**\n👨‍🏫 **Faculty & student training**\n🔧 **Assembly workstations**\n📊 **Data analysis tools**\n\nThe setup can be customized based on institution requirements and budget.",
    followUp: ["Customization options", "Request proposal", "Contact us"]
  },
  {
    id: "lab-demo",
    keywords: ["lab demo", "college demo", "presentation", "visit"],
    question: [
      "Can you give a drone lab demo at our college?",
      "Can we see a demonstration?",
      "Can you visit our college?",
      "How can we see the lab?"
    ],
    answer: "Yes! 😊 We provide on-site or virtual demonstrations for colleges and institutions. Our team explains lab structure, learning outcomes, and implementation process in detail.\n\n**Demo Includes:**\n• Lab setup walkthrough\n• Live drone demonstration\n• Curriculum overview\n• Q&A session\n• Cost and timeline discussion",
    followUp: ["Request demo", "Contact us", "Get proposal"]
  },
  {
    id: "drone-lab-services",
    keywords: ["services included", "what is included", "drone lab support", "core services", "drone lab services"],
    question: [
      "What core services are included in the Drone Lab Setup?",
      "What services does the Drone Lab offer?",
      "What all is included in lab services?"
    ],
    answer: "🛠️ **Core Drone Lab Services:**\n\n**1. Design & Prototyping**\nComplete support for building new systems. Workstations for assembling frames, motors, and sensors. Experiment with materials and new payload configurations.\n\n**2. Indoor Flight Testing** 🛸\nA controlled indoor flight zone for safe testing. Conduct stability checks, hover tests, obstacle avoidance trials, and takeoff/landing analysis without weather risks.\n\n**3. Software & AI Simulation** 🧠\nTest flight algorithms, navigation, and computer vision. High-precision simulations for weather conditions, uneven terrain, and emergency behaviors.\n\n**4. Calibration & Repair** 🔧\nPeak performance with IMU/compass calibration, sensor tuning, and battery health monitoring. Professional maintenance for reliable operations.\n\n**5. Data Capture & Analysis** 📊\nProcess data from drone sensors. Services include 2D/3D mapping, NDVI crop analysis, thermal imaging, and detailed flight log analytics.",
    followUp: ["How to join the lab", "Drone lab cost", "Partner with lab"]
  },
  {
    id: "drone-lab-testing",
    keywords: ["flight testing", "indoor test", "controlled testing", "test environment", "drone lab testing"],
    question: [
      "Does the Drone Lab include flight testing facilities?",
      "Can we test drones indoors?",
      "Is there a testing zone?"
    ],
    answer: "Yes! ✈️ The Drone Lab includes a controlled indoor flight testing zone where drones can be safely tested for stability, navigation, obstacle avoidance, and other flight behaviors without weather risks.\n\n**Testing Capabilities:**\n• Hover stability tests\n• Takeoff/landing analysis\n• Obstacle avoidance trials\n• Navigation accuracy testing\n• Emergency behavior simulation",
    followUp: ["Request lab demo", "Contact team", "Lab services"]
  },
  {
    id: "drone-lab-industries",
    keywords: ["industry", "sector", "agriculture lab", "construction", "industrial", "logistics", "security sector", "supported"],
    question: [
      "Which industries does the Drone Lab support?",
      "What sectors can use the lab?",
      "Who can use the drone lab?"
    ],
    answer: "🌐 **Industries We Empower:**\n\n🌾 **Agriculture**\nPrecision farming, crop monitoring, spraying solutions\n\n🏗️ **Construction**\nSite surveys, progress monitoring, 3D mapping\n\n🏭 **Industrial**\nInfrastructure inspection, asset monitoring\n\n🛡️ **Security**\nSurveillance systems, perimeter monitoring\n\n📦 **Logistics**\nDelivery drone prototyping, route optimization\n\nWe provide aerial intelligence solutions tailored to each sector's unique requirements!",
    followUp: ["Partner with drone lab", "Request consultation", "Get pricing"]
  },

  // =========================
  // OPERATIONS & MAINTENANCE
  // =========================
  {
    id: "maintenance",
    keywords: ["maintenance", "repair", "service", "spares"],
    question: [
      "Who handles drone maintenance in the lab?",
      "Do you provide repair services?",
      "How is maintenance done?"
    ],
    answer: "We train faculty and lab assistants on basic drone maintenance. Additionally, SK Natural Farm provides:\n\n🔧 **Maintenance Services:**\n• Technical support and guidance\n• Spare parts supply\n• Repair services\n• Calibration assistance\n• Battery health monitoring\n\nOur team ensures your drones are always in peak operating condition!",
    followUp: ["Faculty training", "Support services", "Contact us"]
  },
  {
    id: "lab-safety-training",
    keywords: ["safety training", "lab safety", "precautions"],
    question: [
      "Is safety training included in the drone lab?",
      "What safety measures are there?",
      "How do you ensure safety?"
    ],
    answer: "Yes! 🛡️ Safety training is a core part of the drone lab. Students and faculty are trained on:\n\n• Drone handling best practices\n• Battery safety protocols\n• Emergency procedures\n• Lab safety rules\n• Flight zone regulations\n• First aid basics\n\nWe ensure 100% safety compliance in all our lab setups!",
    followUp: ["Safety guidelines", "Lab modules", "Contact us"]
  },

  // =========================
  // AGRI DRONES – SK NATURAL FARM
  // =========================
  {
    id: "agri-drones-overview",
    keywords: ["agri drones", "agricultural drones", "farm drones", "drone overview", "agri drone"],
    question: [
      "What are Agri Drones offered by SK Natural Farm?",
      "Tell me about your agricultural drones",
      "What farming drones do you have?"
    ],
    answer: "Agri Drones at SK Natural Farm are intelligent drone systems designed for modern farming. They provide precision spraying, real-time crop monitoring, soil health analysis, and yield optimization to increase efficiency, save time, and promote sustainable farming. 🚁\n\nWe offer smart AI-powered agricultural drones with various configurations:\n\n🛸 **Quadcopter A1** - Surveying & Mapping\n• 4 Wings | Up to 10kg payload\n\n🛸 **Hexacopter B2** - Crop Spraying\n• 6 Wings | Up to 15kg payload\n\n🛸 **Octocopter C3** - Heavy Payload Delivery\n• 8 Wings | Up to 25kg payload\n\n🛸 **Hexacopter E5** - Seed Sowing\n• 6 Wings | Up to 18kg payload\n\n🛸 **Octocopter F6** - Forest Fire Mapping\n• 8 Wings | Up to 30kg payload\n\nAll drones feature GPS/RTK navigation and precision spraying systems!",
    followUp: ["How do agri drones help farmers?", "What drone types are available?", "Service packages"]
  },
  {
    id: "agri-drones-benefits",
    keywords: ["benefits", "advantages", "why use drone", "value"],
    question: [
      "How do agri drones benefit farming?",
      "What are the advantages of using drones?",
      "Why should I use drones?"
    ],
    answer: "Agri drones help farmers by:\n\n📈 **75% Increase** in Crop Yield\n💧 **50% Water Savings**\n🧪 **40% Less Pesticide** Usage\n⏱️ **80% Time Saved** in Field Operations\n\n**Additional Benefits:**\n• Reduced manual labor\n• Better decision-making with data\n• Early disease detection\n• Precise input application\n• Reduced farming costs 🌾",
    followUp: ["Precision spraying", "Crop monitoring", "Get a quote"]
  },
  {
    id: "agri-drones-tech",
    keywords: ["technology", "gps", "rtk", "navigation", "autonomous"],
    question: [
      "What technology do SK Natural Farm agri drones use?",
      "How do the drones navigate?",
      "What GPS technology is used?"
    ],
    answer: "These drones use advanced technology for precision farming:\n\n📡 **Navigation & Positioning:**\n• GPS, GLONASS, and RTK navigation\n• High spatial accuracy for precise operations\n• Autonomous flight paths\n\n🎮 **Control Systems:**\n• Mobile app control\n• Ground control stations\n• Remote controllers\n• Fully autonomous GPS-defined paths\n\n🧠 **Smart Features:**\n• Real-time monitoring\n• Automated spraying patterns\n• Weather-adaptive operations",
    followUp: ["Flight autonomy", "Training programs", "Request demo"]
  },
  {
    id: "agri-drones-spray",
    keywords: ["spraying", "pesticide", "fertilizer", "precision spray"],
    question: [
      "Can these drones be used for crop spraying?",
      "How does drone spraying work?",
      "Is drone spraying effective?"
    ],
    answer: "Yes! 🚜 The agri drones are equipped with tanks and precision spraying systems that control droplet size, spray volume, and coverage. This makes pesticide and fertilizer application more efficient and reduces chemical waste. 💧\n\n**Spraying Capabilities:**\n• Tanks from 5-30kg capacity\n• Precision nozzle control\n• Even coverage patterns\n• 30% savings on inputs\n• Faster than manual spraying",
    followUp: ["Cost of spraying", "Drone demo", "Which crops?"]
  },
  {
    id: "agri-drone-types",
    keywords: ["types of drones", "quadcopter", "hexacopter", "octocopter", "models"],
    question: [
      "What types of agri drones are available?",
      "What models do you have?",
      "Tell me about drone configurations"
    ],
    answer: "SK Natural Farm offers drones by wing configuration:\n\n🛸 **Quadcopter (4 Wings)**\n• Best for surveying & mapping\n• Up to 10kg payload\n\n🛸 **Hexacopter (6 Wings)**\n• Ideal for crop spraying & seed sowing\n• Up to 15-18kg payload\n\n🛸 **Octocopter (8 Wings)**\n• Heavy payload delivery & specialized tasks\n• Up to 25-30kg payload\n\nEach configuration is optimized for specific applications! 🚁",
    followUp: ["Best drone for my farm", "Contact sales", "Request demo"]
  },
  {
    id: "agri-drone-payload",
    keywords: ["payload", "weight capacity", "tank", "load"],
    question: [
      "What payload capacity do the agri drones have?",
      "How much can the drones carry?",
      "What is the tank capacity?"
    ],
    answer: "Agri drones come with payload capacities ranging from about 5 kg up to 30 kg depending on the model. This determines how much fluid or equipment they can carry for spraying or other tasks. 📦\n\n**Payload by Package:**\n• Alpha Mode: Up to 10kg\n• Omega Core: Up to 15kg\n• Quantum Pro: Up to 27kg\n\n**By Model:**\n• Quadcopter A1: 10kg\n• Hexacopter B2: 15kg\n• Octocopter C3: 25kg\n• Hexacopter E5: 18kg\n• Octocopter F6: 30kg",
    followUp: ["Compare models", "Request demo", "Service packages"]
  },
  {
    id: "agri-drones-autonomy",
    keywords: ["autonomy", "flight path", "gps route", "fully automatic", "auto"],
    question: [
      "Can agri drones fly autonomously?",
      "Are the drones automatic?",
      "Do I need to control the drone manually?"
    ],
    answer: "Yes! ✈️ The advanced drone models support fully autonomous flight based on GPS-defined paths, enabling efficient coverage of fields without manual piloting. They reduce farmer effort and improve precision. 🔄\n\n**Flight Modes Available:**\n• Manual control\n• Semi-automatic\n• Fully autonomous (Quantum Pro)\n\n**Smart Features:**\n• Pre-programmed flight paths\n• RTK precision navigation\n• Obstacle avoidance\n• Auto return-to-home",
    followUp: ["Training on autonomy", "Drone services", "Quantum Pro details"]
  },
  {
    id: "agri-drone-range",
    keywords: ["range", "operational range", "coverage", "distance"],
    question: [
      "What is the operational range of these agri drones?",
      "How far can the drones fly?",
      "What area can be covered?"
    ],
    answer: "📏 **Coverage Capacity:**\n\n• **Spraying:** 8-15 acres per hour (depending on drone model)\n• **Mapping:** Up to 100+ acres per flight\n• **Monitoring:** 10,000+ acres tracked with our technology\n\n**Flight Ranges by Package:**\n• Alpha Mode: 300-400 meters\n• Omega Core: 600 meters\n• Quantum Pro: 1000 meters\n\n**Flight Time:**\n• Alpha: 15 minutes\n• Omega Core: 35 minutes\n• Quantum Pro: 50 minutes\n\nActual coverage depends on field conditions and crop type.",
    followUp: ["Compare models", "Drone demo", "Get a quote"]
  },
  {
    id: "agri-drone-training",
    keywords: ["drone training", "pilot training", "skills", "how to fly"],
    question: [
      "Do you provide training for using agri drones?",
      "Can I learn to fly drones?",
      "Is there pilot training?"
    ],
    answer: "Yes! 🎓 SK Natural Farm offers training on how to operate agri drones safely and efficiently.\n\n**Training Includes:**\n• Flight control basics\n• Spraying techniques\n• Drone maintenance\n• Safety protocols\n• Data interpretation\n• Certification on completion\n\nWe also train farmers to become drone pilots!",
    followUp: ["Training details", "Enroll now", "Contact us"]
  },
  {
    id: "drone-features",
    keywords: ["feature", "specs", "specification", "capability", "smart flight"],
    question: [
      "What features do your drones have?",
      "What are the drone specifications?",
      "Tell me about drone capabilities"
    ],
    answer: "Our drones are packed with advanced features:\n\n🎮 **Smart Flight Modes**\nRemote control, mobile apps, ground control stations, and fully autonomous GPS-defined paths with RTK technology\n\n📍 **Navigation & Positioning**\nGPS, GLONASS, and RTK modules for high spatial accuracy to identify and treat specific problem zones\n\n⚖️ **Payload Capacity**\nTanks ranging from 5 to 30kg with precision spraying system controlling droplet size and coverage\n\n🔋 **Battery**\nHigh-capacity Li-Po/Li-Ion batteries, fast-charging, field-swappable\n\n🌤️ **Weather Tolerance**\nDust-proof, heat-tolerant, capable of flying in winds up to 35 km/h",
    followUp: ["Request a demo", "What are the prices?", "Book now"]
  },

  // =========================
  // DEFENCE DRONES
  // =========================
  {
    id: "defence-drone-packages",
    keywords: ["defence drone packages", "defence drone package", "army drone packages", "defence drone pricing", "military drone cost", "defence service plans", "army drone service", "security drone packages", "defence drone rates", "military drone packages", "defence drone service options", "cost of defence drones", "defence drone service pricing", "army drone service plans", "defence", "defense", "military", "army", "security", "surveillance", "tactical", "armed forces", "guardian"],
    question: [
      "What defence drone service packages are available?",
      "Do you provide defence drones?",
      "Tell me about military drones",
      "What security drone options do you have?"
    ],
    answer: "SK Natural Farm offers specialized Defence Drone Service Packages under the **Army** category, designed for surveillance and professional military use:\n\n🟢 **Alpha Mode (Minimal Use)**\n• ₹35,000 per acre\n• Manual control\n• 15 minutes flight time\n• Up to 10 kg weight lifting\n• 300–400 meter operational range\n\n🟡 **Omega Core (Moderate Use)**\n• ₹91,519 per hour\n• Digital access control\n• 35 minutes flight time\n• Up to 15 kg weight lifting\n• 600 meter operational range\n\n🔵 **Quantum Pro (Professional Use)**\n• ₹2,01,386 per hour\n• Fully automatic control\n• 50 minutes flight time\n• Up to 27 kg weight lifting\n• 1000 meter operational range\n\n**Capabilities:**\n• Surveillance & reconnaissance\n• High-resolution imaging & thermal tracking\n• Autonomous mission capability\n• Rugged environment operation\n\nThese defence-grade packages are built for high-reliability missions and can be customized based on operational and security requirements. 🛡️",
    followUp: ["Request defence drone quote", "Contact defence sales team", "Request defence drone demo"]
  },

  // =========================
  // CAREERS
  // =========================
  {
    id: "careers",
    keywords: ["job", "career", "work", "hiring", "vacancy", "intern", "employment", "opportunity", "join team", "openings"],
    question: [
      "Are there job opportunities at SK Natural Farm?",
      "Are you hiring?",
      "What jobs are available?",
      "Do you have internship opportunities?",
      "How can I work with you?"
    ],
    answer: "🎯 **Current Openings (Pune Location):**\n\n💻 **Embedded Intern**\nSkills: Embedded C, Microcontrollers, Sensors, PCB Design\n\n🛸 **Drone Assembly Intern**\nSkills: Mechanical Assembly, Wiring, Troubleshooting\n\n🤖 **Robotics Intern**\nSkills: Arduino, Raspberry Pi, Automation\n\n📱 **Social Media Manager**\nSkills: Social media trends, content strategy\n\n📈 **Digital Marketer**\nSkills: Google Ads, SEO, Analytics\n\n📧 **Apply at:** hr@sknaturalfarm.in or connect@sknaturalfarm.in",
    followUp: ["Apply now", "Contact HR", "Send resume"]
  },

  // =========================
  // BLOG & RESOURCES
  // =========================
  {
    id: "blog",
    keywords: ["blog", "article", "resource", "read", "learn", "information", "knowledge", "news"],
    question: [
      "Do you have educational resources or blogs?",
      "Where can I learn more?",
      "Do you have articles?",
      "What resources are available?"
    ],
    answer: "📖 **Our Blog Features:**\n\n• **Drone Technology in Agriculture** - Complete guide on how drones transform farming\n• **Smart Irrigation Systems** - Sustainable water management guide\n• **Vertical Farming** - Growing up, not out\n• Latest agri-tech news and innovations\n• Practical farming tips and guides\n\n🌐 **Visit:** www.sknaturalfarm.in/blog\n\nStay updated on the latest in smart farming!",
    followUp: ["Visit blog", "Tell me about drone technology"]
  },

  // =========================
  // REQUEST SERVICES
  // =========================
  {
    id: "request-service",
    keywords: ["request", "book", "hire", "get started", "order", "avail", "want service", "need help"],
    question: [
      "How can I request your services?",
      "How do I book drone services?",
      "I want to hire your services",
      "How do I get started?"
    ],
    answer: "Getting started is easy! 🚀\n\n**Option 1:** Share your details here, and our team will contact you within 24 hours.\n\n**Option 2:** Contact us directly:\n📧 connect@sknaturalfarm.in\n📞 +91 7827335954\n\n**Option 3:** Visit our office in Pune\n802, Bhama Centre, Hinjawadi-Wakad Bridge, Wakad, Pune, Maharashtra - 411057\n\nWe'll assess your farm's requirements and provide a customized solution including site survey and free consultation!",
    followUp: ["Send my details", "Request callback", "Get a quote"]
  },
  {
    id: "demo",
    keywords: ["demo", "demonstration", "trial", "show", "see", "test", "pilot", "sample"],
    question: [
      "Can I get a drone demonstration?",
      "Can you show me a demo?",
      "Can I see the drones in action?",
      "Is trial available?"
    ],
    answer: "Absolutely! We offer on-field demonstrations: 🛸\n\n✅ Live drone flight on your farm\n✅ See spraying/mapping capabilities in action\n✅ Understand data analytics features\n✅ Q&A with our technical team\n\n*Demos are subject to location availability and scheduling.*\n\nShare your farm location and contact details to book a demo!",
    followUp: ["Book a demo", "Send my details", "Contact us"]
  },
  {
    id: "custom-solution",
    keywords: ["custom", "customized", "tailor", "specific", "special", "unique", "my need", "personalized"],
    question: [
      "Do you offer customized solutions?",
      "Can you customize for my needs?",
      "Do you have special packages?",
      "Can you tailor services for me?"
    ],
    answer: "Yes! We specialize in customized solutions:\n\n🎯 **For Farmers:**\n• Custom drone packages based on farm size\n• Specific crop monitoring solutions\n• Tailored training programs\n\n🏢 **For Businesses:**\n• Custom drone lab setups\n• Industry-specific drone solutions\n• Partnership programs\n\n🏛️ **For Institutions:**\n• Educational programs\n• Research collaborations\n• Government project execution (DPR, Project Planning)\n\nTell us your requirements and we'll create the perfect solution!",
    followUp: ["Tell us your requirements", "Get a custom quote", "Contact us"]
  },
  {
    id: "coverage",
    keywords: ["area", "coverage", "acre", "hectare", "capacity", "how much land", "size", "field"],
    question: [
      "How much area can drones cover?",
      "What is the coverage capacity?",
      "How many acres can you spray?"
    ],
    answer: "📏 **Coverage Capacity:**\n\n• **Spraying:** 8-15 acres per hour (depending on drone model)\n• **Mapping:** Up to 100+ acres per flight\n• **Monitoring:** 10,000+ acres tracked with our technology\n\n**Flight Ranges by Package:**\n• Alpha Mode: 300-400 meters\n• Omega Core: 600 meters\n• Quantum Pro: 1000 meters\n\n**Flight Time:**\n• 15-50 minutes depending on package\n\nActual coverage depends on field conditions and crop type.",
    followUp: ["What's the best package for my farm?", "Get a quote"]
  },

  // =========================
  // GREETINGS & COMMON PHRASES
  // =========================
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "namaste", "namaskar", "good morning", "good afternoon", "good evening"],
    question: [
      "Hi",
      "Hello",
      "Hey",
      "Namaste",
      "Good morning",
      "Good afternoon",
      "Good evening"
    ],
    answer: "🙏 Namaste! Welcome to SK Natural Farm!\n\nI'm here to help you explore our smart farming solutions. We offer:\n\n🚁 Agri Drone Services\n🛡️ Defence Drones\n🔬 Drone Lab Setup\n🌿 Sustainable Farming Services\n🎓 Training Programs\n\nWhat would you like to know about?",
    followUp: ["What services do you offer?", "Drone pricing", "Contact details"]
  },
  {
    id: "thanks",
    keywords: ["thank", "thanks", "thank you", "dhanyawad", "shukriya", "appreciate"],
    question: [
      "Thank you",
      "Thanks",
      "Thanks for your help",
      "Dhanyawad"
    ],
    answer: "You're welcome! 😊 It was my pleasure to assist you.\n\nIf you have any more questions or need further assistance, feel free to ask anytime!\n\n🌾 Happy farming with SK Natural Farm!",
    followUp: ["Contact us", "Explore services", "Request callback"]
  },
  {
    id: "bye",
    keywords: ["bye", "goodbye", "see you", "alvida", "take care"],
    question: [
      "Bye",
      "Goodbye",
      "See you",
      "Take care"
    ],
    answer: "Goodbye! 👋 Thank you for chatting with SK Natural Farm.\n\nFeel free to come back anytime you have questions. We're always here to help!\n\n🌱 Wishing you success in your farming journey!",
    followUp: ["Visit website", "Contact us"]
  },

  // =========================
  // DEFAULT/FALLBACK
  // =========================
  {
    id: "default",
    keywords: [],
    question: ["I have another question"],
    answer: "I'm here to help! 😊 While I may not have a ready answer for that specific question, our team would be happy to assist you personally.\n\n**Popular Topics:**\n🛸 Agricultural Drones & Pricing\n🛡️ Defence Drones\n🔬 Drone Lab Setup\n🌱 Sustainable Farming Services\n📚 Training Programs\n💼 Career Opportunities\n\nYou can:\n📞 Request a callback from our experts\n📧 Send us your query at connect@sknaturalfarm.in\n📱 Call us: +91 7827335954\n\nWhat would you like to do?",
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
    
    // Keyword matching with weighted scores
    for (const keyword of faq.keywords) {
      if (normalizedInput.includes(keyword.toLowerCase())) {
        // Longer keyword matches get higher scores
        score += keyword.length * 2;
        // Exact phrase match bonus
        if (keyword.includes(' ') && normalizedInput.includes(keyword)) {
          score += 10;
        }
      }
    }
    
    // Question matching - check against all question variations
    for (const question of faq.question) {
      const normalizedQuestion = question.toLowerCase();
      
      // Exact question match - highest priority
      if (normalizedInput === normalizedQuestion || 
          normalizedInput === normalizedQuestion.replace('?', '')) {
        score += 100;
      }
      
      // High similarity match
      const questionWords = normalizedQuestion.split(/\s+/).filter(w => w.length > 2);
      let matchedWords = 0;
      for (const word of questionWords) {
        if (normalizedInput.includes(word)) {
          matchedWords++;
        }
      }
      
      // Calculate match percentage
      if (questionWords.length > 0) {
        const matchPercentage = matchedWords / questionWords.length;
        if (matchPercentage >= 0.7) {
          score += 50 * matchPercentage;
        } else if (matchPercentage >= 0.5) {
          score += 25 * matchPercentage;
        }
      }
    }
    
    // Check for individual important words in input
    const inputWords = normalizedInput.split(/\s+/).filter(w => w.length > 3);
    for (const word of inputWords) {
      for (const keyword of faq.keywords) {
        if (keyword.includes(word) || word.includes(keyword)) {
          score += 3;
        }
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = faq;
    }
  }

  // If lead intent is strong but no good match, return contact FAQ
  if (isLeadIntent && highestScore < 10) {
    return faqData.find(f => f.id === "contact") || faqData.find(f => f.id === "default")!;
  }

  // Return best match if score is good enough, otherwise default
  if (bestMatch && highestScore >= 5) {
    return bestMatch;
  }

  return faqData.find(f => f.id === "default")!;
}
