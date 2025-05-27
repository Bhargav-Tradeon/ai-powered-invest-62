
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Check } from "lucide-react";

export const APISection = () => {
  const features = [
    "Real-time NSE/BSE financial data streams",
    "Historical Indian market data with flexible time ranges", 
    "Customizable endpoints and data formats",
    "Enterprise-grade security and SEBI compliance support"
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Need API data for your business?
          </h2>
          <p className="text-slate-600 text-lg max-w-4xl mx-auto">
            Explore plans designed to fuel your company's growth and give you a competitive 
            edge in the Indian financial industry.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-12">
              <div className="flex flex-col lg:flex-row items-start gap-12">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center">
                    <Database className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Enterprise Data Solutions
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Access our comprehensive Indian financial data API with customizable endpoints, 
                    historical data, and real-time market information to power your applications, 
                    dashboards, or analytics platforms.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
