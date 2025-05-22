
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Brain, Shield, BarChart3, Clock, Target } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Speed",
      description: "Get insights faster than the market moves. Our AI processes millions of data points in milliseconds.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Brain,
      title: "Deep Intelligence",
      description: "Advanced neural networks analyze patterns, sentiment, and correlations humans miss.",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      icon: Shield,
      title: "Risk Control",
      description: "AI-powered risk assessment helps you avoid pitfalls and protect your portfolio.",
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: BarChart3,
      title: "Visual Analytics",
      description: "Interactive dashboards that turn complex data into clear, actionable insights.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Never miss an opportunity with round-the-clock market surveillance and alerts.",
      gradient: "from-teal-400 to-blue-500"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Identify high-probability trades with surgical precision using AI pattern recognition.",
      gradient: "from-red-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose TradeOn.AI?
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Experience the perfect combination of speed, intelligence, and control. 
            Our platform eliminates guesswork and puts data-driven confidence at your fingertips.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
