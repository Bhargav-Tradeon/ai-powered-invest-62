
import { Button } from "@/components/ui/button";
import { TrendingUp, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/9fdb8176-f871-426b-a190-fe0b6d33d7fb.png" 
            alt="TradeOn.AI" 
            className="h-16 w-auto"
          />
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 animate-fade-in">
          Transforming Stock Market
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Analysis with AI Precision
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200">
          Empower your investments with lightning-fast, AI-driven insights that analyze millions of data points 
          every minute from company filings, news, and global markets.
        </p>
        
        {/* Value Proposition */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in delay-400">
          <div className="flex items-center gap-2 text-slate-700">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span>Real-Time Insights</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <span>360-Degree Market View</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            <span>Unbiased, Data-Driven</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-600">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            Experience the Future
            <TrendingUp className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-6 text-lg"
          >
            <Play className="mr-2 w-5 h-5" />
            See AI in Action
          </Button>
        </div>
        
        {/* Trust Indicator */}
        <p className="text-sm text-slate-500 mt-8 animate-fade-in delay-800">
          Connected to hundreds of data source points • Always updated • Always accessible
        </p>
      </div>
    </section>
  );
};
