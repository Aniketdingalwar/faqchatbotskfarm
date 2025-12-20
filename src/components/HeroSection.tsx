import { Leaf, Plane, BarChart3, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-earth">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nature-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Smart Agriculture Solutions</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-heading leading-tight mb-6 animate-slide-up">
            Revolutionizing Farming with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-nature">
              Drone Technology
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "100ms" }}>
            SK Natural Farm combines cutting-edge drone technology with sustainable natural farming practices to help Indian farmers grow more while protecting our planet.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { icon: Plane, label: "Drone Services", desc: "Precision aerial solutions" },
              { icon: BarChart3, label: "Data Analytics", desc: "Smart farm insights" },
              { icon: Leaf, label: "Natural Farming", desc: "Sustainable practices" },
              { icon: Users, label: "Community", desc: "Farmer empowerment" }
            ].map((feature, index) => (
              <div
                key={feature.label}
                className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-chat transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-chat flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground font-heading text-sm mb-1">
                  {feature.label}
                </h3>
                <p className="text-xs text-muted-foreground font-body">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Text */}
          <p className="mt-16 text-muted-foreground font-body animate-fade-in" style={{ animationDelay: "600ms" }}>
            👋 Have questions? Chat with our assistant in the bottom right corner!
          </p>
        </div>
      </div>
    </section>
  );
}
