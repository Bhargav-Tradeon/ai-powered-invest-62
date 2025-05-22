
import { TrendingUp, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/9fdb8176-f871-426b-a190-fe0b6d33d7fb.png" 
                alt="TradeOn.AI" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-slate-600 mb-6 max-w-md">
              Empowering investors with AI-driven insights to make confident, data-backed trading decisions in real-time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors">
                <Twitter className="w-5 h-5 text-slate-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors">
                <Linkedin className="w-5 h-5 text-slate-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors">
                <Mail className="w-5 h-5 text-slate-600" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-slate-900 font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">API</a></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-slate-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © 2024 TradeOn.AI. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
