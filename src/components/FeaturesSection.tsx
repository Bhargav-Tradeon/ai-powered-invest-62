
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Brain, BarChart3, TrendingUp, Gauge, Shield } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Comprehensive Data Integration",
      description: "Processes NSE/BSE filings, annual reports, corporate announcements, and market news for a holistic Indian market view.",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      icon: Brain,
      title: "AI-Driven Financial Analysis",
      description: "Advanced algorithms analyze balance sheets, P&L statements, and cash flows with SEBI compliance for Indian company assessment.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Gauge,
      title: "Real-Time Sentiment Analysis",
      description: "Advanced sentiment tools evaluate investor mood from Economic Times, Moneycontrol, and social media in real-time.",
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Technical Analysis",
      description: "AI tracks Nifty/Sensex patterns, identifying technical indicators specific to Indian market volatility.",
      gradient: "from-teal-400 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "User-Friendly Interface",
      description: "Intuitive navigation with customizable dashboards tailored for Indian equity, commodity, and currency markets.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Unbiased Decision Making",
      description: "Eliminate guesswork with insights based on Indian market data patterns, FII/DII flows, and regulatory updates.",
      gradient: "from-red-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Unlock Market Intelligence Like Never Before
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Experience the perfect combination of comprehensive coverage, AI precision, and lightning-fast analysis. 
            Our platform delivers insights that are broader, deeper, and faster than ever before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white border-slate-100 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
