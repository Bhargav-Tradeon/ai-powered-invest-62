
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Zap } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Trade Smarter. Trade Faster. Trade with Confidence.
        </h2>
        <p className="text-xl text-slate-700 mb-8 leading-relaxed">
          Join a growing community of forward-thinking analysts and investors who trust TradeOn.AI 
          to guide their decisions with unmatched speed, accuracy, and breadth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            Sign Up Today
            <TrendingUp className="ml-2 w-6 h-6" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-slate-300 text-slate-700 hover:bg-slate-100 px-12 py-6 text-xl"
          >
            Experience Demo
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-slate-600">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span>Data-driven insights</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-600" />
            <span>Lightning-fast analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
            <span>Always accessible</span>
          </div>
        </div>
      </div>
    </section>
  );
};
