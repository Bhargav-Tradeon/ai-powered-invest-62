
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Zap, Brain, Shield, BarChart3, Globe, Clock, Target } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { MetricsSection } from "@/components/MetricsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { InsightsDemo } from "@/components/InsightsDemo";
import { TrustSection } from "@/components/TrustSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <MetricsSection />
      <FeaturesSection />
      <InsightsDemo />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
