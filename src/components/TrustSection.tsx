
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const TrustSection = () => {
  const testimonials = [
    {
      quote: "TradeOn.AI transformed my trading strategy. The AI insights helped me increase my portfolio by 35% in 6 months across NSE and BSE.",
      author: "Priya Sharma",
      title: "Portfolio Manager, ICICI Securities",
      avatar: "PS"
    },
    {
      quote: "The speed and accuracy of market analysis is unmatched. It's like having a team of analysts working 24/7 on Indian markets.",
      author: "Rajesh Kumar", 
      title: "Fund Manager, SBI Mutual Fund",
      avatar: "RK"
    },
    {
      quote: "Finally, an AI platform that understands both Indian market dynamics and global sentiment. Game-changing technology for SEBI compliance.",
      author: "Anita Desai",
      title: "Investment Analyst, Kotak Mahindra",
      avatar: "AD"
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
            <div className="text-2xl font-bold text-slate-600">ICICI Securities</div>
            <div className="text-2xl font-bold text-slate-600">HDFC AMC</div>
            <div className="text-2xl font-bold text-slate-600">SBI Mutual Fund</div>
            <div className="text-2xl font-bold text-slate-600">Kotak Mahindra</div>
          </div>
        </div>
      </div>
    </section>
  );
};
