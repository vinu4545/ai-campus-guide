import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="border-t border-border/50 mt-24">
    <div className="container py-12 grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-bold">Nova<span className="gradient-text">Edu</span></span>
        </div>
        <p className="text-sm text-muted-foreground">AI-powered smart admissions for the next generation.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Explore</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/courses" className="hover:text-primary">Courses</Link></li>
          <li><Link to="/admissions" className="hover:text-primary">Admissions</Link></li>
          <li><Link to="/about" className="hover:text-primary">About</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Resources</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>FAQs</li>
          <li>Scholarships</li>
          <li>Campus Life</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Contact</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>admissions@novaedu.ai</li>
          <li>+1 (555) 010-2030</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} NovaEdu. Powered by AI.
    </div>
  </footer>
);
