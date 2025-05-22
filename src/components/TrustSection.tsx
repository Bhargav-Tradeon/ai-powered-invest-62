
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const TrustSection = () => {
  const testimonials = [
    {
      quote: "TradeOn.AI transformed my trading strategy. The AI insights helped me increase my portfolio by 40% in 6 months.",
      author: "Sarah Chen",
      title: "Portfolio Manager, Goldman Sachs",
      avatar: "SC"
    },
    {
      quote: "The speed and accuracy of market analysis is unmatched. It's like having a team of analysts working 24/7.",
      author: "Michael Rodriguez", 
      title: "Hedge Fund Director",
      avatar: "MR"
    },
    {
      quote: "Finally, an AI platform that understands both data and market psychology. Game-changing technology.",
      author: "Jennifer Liu",
      title: "Investment Analyst",
      avatar: "JL"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-slate-600 text-lg">
            See what professional investors are saying about TradeOn.AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-white border-slate-100 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold">{testimonial.author}</p>
                    <p className="text-slate-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Company Logos */}
        <div className="text-center">
          <p className="text-slate-500 mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-2xl font-bold text-slate-600">Goldman Sachs</div>
            <div className="text-2xl font-bold text-slate-600">JP Morgan</div>
            <div className="text-2xl font-bold text-slate-600">Fidelity</div>
            <div className="text-2xl font-bold text-slate-600">BlackRock</div>
          </div>
        </div>
      </div>
    </section>
  );
};
