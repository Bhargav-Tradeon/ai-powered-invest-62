
import { Button } from "@/components/ui/button";
import { TrendingUp, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
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
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Stop Guessing.
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Start Winning.
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200">
          Take control of your investments with AI-powered insights that analyze global markets in real-time. 
          Make confident decisions backed by data, not emotions.
        </p>
        
        {/* Value Proposition */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in delay-400">
          <div className="flex items-center gap-2 text-gray-300">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span>Real-time Analysis</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
            <span>AI-Driven Insights</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
            <span>Global Coverage</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-600">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            Start Trading Smarter
            <TrendingUp className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-6 text-lg backdrop-blur-sm"
          >
            <Play className="mr-2 w-5 h-5" />
            Watch Demo
          </Button>
        </div>
        
        {/* Trust Indicator */}
        <p className="text-sm text-gray-500 mt-8 animate-fade-in delay-800">
          Trusted by 50,000+ investors worldwide • No credit card required
        </p>
      </div>
    </section>
  );
};
