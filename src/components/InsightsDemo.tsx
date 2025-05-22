
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

export const InsightsDemo = () => {
  const insights = [
    {
      stock: "AAPL",
      change: "+2.4%",
      signal: "Strong Buy",
      confidence: "94%",
      trend: "up",
      price: "$175.23",
      analysis: "AI detected bullish momentum pattern with high institutional buying volume"
    },
    {
      stock: "TSLA", 
      change: "-1.8%",
      signal: "Hold",
      confidence: "87%",
      trend: "down",
      price: "$238.45",
      analysis: "Mixed signals detected - waiting for clearer trend confirmation"
    },
    {
      stock: "NVDA",
      change: "+5.7%",
      signal: "Buy",
      confidence: "91%", 
      trend: "up",
      price: "$456.78",
      analysis: "Strong AI sector momentum with positive earnings sentiment analysis"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            See AI Insights in Action
          </h2>
          <p className="text-slate-600 text-lg">
            Real-time analysis that gives you the edge in every trade
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <Card 
              key={index}
              className="bg-white border-slate-100 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{insight.stock}</h3>
                    <p className="text-slate-600">{insight.price}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-semibold ${insight.trend === 'up' ? 'text-green-600' : 'text-red-600'} flex items-center gap-1`}>
                      {insight.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      {insight.change}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Signal:</span>
                    <span className={`font-semibold px-3 py-1 rounded-full text-sm ${
                      insight.signal === 'Strong Buy' || insight.signal === 'Buy' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {insight.signal}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Confidence:</span>
                    <span className="text-slate-900 font-semibold">{insight.confidence}</span>
                  </div>
                  
                  <div className="mt-4 p-3 bg-slate-50 rounded-lg">
                    <p className="text-sm text-slate-700 leading-relaxed">{insight.analysis}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Updates every second • AI confidence scores • Real-time alerts</p>
          <div className="flex justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
            <span className="text-green-600 text-sm">Live Data Feed Active</span>
          </div>
        </div>
      </div>
    </section>
  );
};
