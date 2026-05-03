import { Bot, Sparkles } from "lucide-react";
import { Copilot } from "@/components/copilot/Copilot";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Logo header */}
      <header className="w-full px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center btn-glow">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg tracking-tight">
            Nova<span className="gradient-text">Copilot</span>
          </span>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground px-3 py-1.5 rounded-full border border-border bg-white/60">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          AI Admissions Assistant · Online
        </span>
      </header>

      {/* Centered hero */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Powered by AI · Built for Students</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
            Your <span className="gradient-text">College Admission</span><br /> Copilot
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Get instant guidance on courses, admissions, fees, and deadlines. Tap the assistant in the corner to start chatting.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
            <span className="px-3 py-1.5 rounded-full bg-white/70 border border-border">🎓 Course guidance</span>
            <span className="px-3 py-1.5 rounded-full bg-white/70 border border-border">📝 Admission help</span>
            <span className="px-3 py-1.5 rounded-full bg-white/70 border border-border">💰 Fee details</span>
            <span className="px-3 py-1.5 rounded-full bg-white/70 border border-border">📅 Deadlines</span>
          </div>

          <p className="mt-12 text-sm text-muted-foreground inline-flex items-center gap-2">
            Click the
            <span className="inline-flex w-6 h-6 rounded-full bg-gradient-primary items-center justify-center">
              <Bot className="w-3.5 h-3.5 text-primary-foreground" />
            </span>
            button to begin
          </p>
        </div>
      </main>

      <Copilot />
    </div>
  );
};

export default Index;
