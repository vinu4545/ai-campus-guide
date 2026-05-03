import { Link } from "react-router-dom";
import { ArrowRight, Bot, GraduationCap, Sparkles, Zap, ShieldCheck, BookOpen, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Bot, title: "AI Copilot Guidance", desc: "24/7 admissions assistant that answers in seconds." },
  { icon: Zap, title: "Smart Recommendations", desc: "Personalized course matches based on your interests." },
  { icon: ShieldCheck, title: "Verified Process", desc: "Transparent steps from application to enrollment." },
  { icon: BookOpen, title: "Modern Curriculum", desc: "AI, Data, Design — built with industry leaders." },
];

const stats = [
  { value: "30K+", label: "Students" },
  { value: "120+", label: "Programs" },
  { value: "98%", label: "Placement" },
  { value: "AI", label: "First" },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-60 pointer-events-none" />
        <div className="container relative pt-20 pb-24 md:pt-32 md:pb-32">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Next-gen admissions, powered by AI</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              AI-Powered <br />
              <span className="gradient-text">Smart Admissions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover programs, get instant guidance, and apply with confidence — all with NovaCopilot, your personal admissions AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary border-0 btn-glow text-base h-12 px-6">
                <Link to="/admissions">
                  Apply Now <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base h-12 px-6 border-border/80">
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>

          {/* floating preview */}
          <div className="mt-16 max-w-3xl mx-auto glass rounded-2xl p-6 animate-scale-in">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center btn-glow shrink-0">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-muted-foreground mb-1">NovaCopilot</div>
                <div className="text-sm">
                  <span className="text-primary font-medium">Tip:</span> Click the glowing button on the bottom-right to start chatting. Try “Which course is best for AI?”
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for the <span className="gradient-text">AI generation</span></h2>
          <p className="text-muted-foreground">Everything a modern student needs to choose, apply, and thrive.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.title} className="glass rounded-2xl p-6 hover:border-primary/40 transition group">
              <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform btn-glow">
                <f.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="container py-20">
        <div className="glass rounded-3xl p-8 md:p-14 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <div className="grid md:grid-cols-2 gap-8 items-center relative">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">A campus where <span className="gradient-text">AI meets ambition</span></h2>
              <p className="text-muted-foreground mb-6">
                Our programs are co-designed with leaders from Google, Microsoft and OpenAI. Every student gets personalized guidance from NovaCopilot — from the first question to graduation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-gradient-primary border-0">
                  <Link to="/about">About the College</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/dashboard">View Dashboard</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Users, label: "Mentorship", v: "1:1" },
                { icon: Trophy, label: "Awards", v: "50+" },
                { icon: GraduationCap, label: "Alumni", v: "Global" },
                { icon: Bot, label: "AI Copilot", v: "24/7" },
              ].map((c) => (
                <div key={c.label} className="bg-background/40 border border-border/60 rounded-2xl p-5">
                  <c.icon className="w-5 h-5 text-primary mb-3" />
                  <div className="text-2xl font-bold">{c.v}</div>
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
