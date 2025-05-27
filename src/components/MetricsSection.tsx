
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Zap, Globe, Database } from "lucide-react";

export const MetricsSection = () => {
  const metrics = [
    {
      icon: Database,
      value: "Millions",
      label: "Data Points/Minute",
      description: "Continuous analysis at unprecedented scale"
    },
    {
      icon: Zap,
      value: "<1s",
      label: "Insight Generation",
      description: "Lightning-fast AI processing speed"
    },
    {
      icon: Globe,
      value: "360°",
      label: "Market Coverage", 
      description: "Comprehensive global data integration"
    },
    {
      icon: TrendingUp,
      value: "24/7",
      label: "Market Monitoring",
      description: "Always accessible, always updated"
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Beyond Human Scope and Speed
          </h2>
          <p className="text-slate-600 text-lg">
            Our AI scans millions of data points every minute, detecting patterns that would take human analysts weeks to uncover
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card 
              key={index} 
              className="bg-white border-slate-100 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-slate-700 mb-1">{metric.label}</div>
                <div className="text-sm text-slate-500">{metric.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
