
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Zap } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Trade with Confidence?
        </h2>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Join thousands of investors who've already gained the edge with AI-powered insights. 
          Start your journey to smarter investing today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            Get Started Free
            <TrendingUp className="ml-2 w-6 h-6" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-600 text-gray-300 hover:bg-gray-800 px-12 py-6 text-xl backdrop-blur-sm"
          >
            Schedule Demo
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-400" />
            <span>Setup in 5 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};
