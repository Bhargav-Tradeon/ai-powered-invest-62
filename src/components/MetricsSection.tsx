
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Zap, Globe, Users } from "lucide-react";

export const MetricsSection = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "94%",
      label: "Accuracy Rate",
      description: "AI predictions vs market outcomes"
    },
    {
      icon: Zap,
      value: "<50ms",
      label: "Analysis Speed",
      description: "Real-time data processing"
    },
    {
      icon: Globe,
      value: "180+",
      label: "Global Markets",
      description: "Countries and exchanges covered"
    },
    {
      icon: Users,
      value: "50K+",
      label: "Active Users",
      description: "Professional investors trust us"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Numbers Speak for Themselves
          </h2>
          <p className="text-gray-400 text-lg">
            See why leading investors choose TradeOn.AI for market intelligence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card 
              key={index} 
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-gray-300 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-500">{metric.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
