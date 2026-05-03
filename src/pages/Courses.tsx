import { Link } from "react-router-dom";
import { Bot, Clock, DollarSign, ArrowRight, Cpu, BarChart3, Briefcase, Palette, Atom, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  { icon: Cpu, name: "B.Tech Computer Science & AI", duration: "4 years", fee: "$4,200/yr", tag: "Most Popular" },
  { icon: BarChart3, name: "B.Sc Data Science", duration: "3 years", fee: "$3,600/yr" },
  { icon: Briefcase, name: "BBA Digital Business", duration: "3 years", fee: "$3,200/yr" },
  { icon: Palette, name: "B.Des UX & Product Design", duration: "4 years", fee: "$3,900/yr" },
  { icon: Atom, name: "B.Sc Applied Physics", duration: "3 years", fee: "$3,100/yr" },
  { icon: Wrench, name: "B.Tech Robotics & IoT", duration: "4 years", fee: "$4,000/yr", tag: "New" },
];

const Courses = () => (
  <div className="container py-16">
    <div className="max-w-2xl mb-12 animate-fade-in">
      <div className="text-xs uppercase tracking-wider text-primary mb-2">Programs</div>
      <h1 className="text-4xl md:text-5xl font-bold mb-3">Explore our <span className="gradient-text">courses</span></h1>
      <p className="text-muted-foreground">Modern, industry-aligned programs designed for the AI era.</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {courses.map((c) => (
        <div key={c.name} className="glass rounded-2xl p-6 hover:border-primary/50 transition group relative">
          {c.tag && (
            <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-gradient-primary text-primary-foreground font-semibold">
              {c.tag}
            </span>
          )}
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center btn-glow mb-4 group-hover:scale-110 transition-transform">
            <c.icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="font-semibold text-lg mb-3">{c.name}</h3>
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-5">
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {c.duration}</span>
            <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" /> {c.fee}</span>
          </div>
          <div className="flex gap-2">
            <Button asChild size="sm" className="bg-gradient-primary border-0 flex-1">
              <Link to="/admissions">Apply <ArrowRight className="w-3.5 h-3.5 ml-1" /></Link>
            </Button>
            <Button size="sm" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
              <Bot className="w-3.5 h-3.5 mr-1" /> Ask Copilot
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Courses;
