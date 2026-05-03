import { Bot, Sparkles } from "lucide-react";
import { Copilot } from "@/components/copilot/Copilot";
import lokmanyaLogo from "../components/Images/Image_URL.png";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Logo header */}
      <header className="w-full px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img
            src={lokmanyaLogo}
            alt="Lokmanya College logo"
            className="h-12 w-auto rounded-xl bg-white/90 px-1 py-0.5 object-contain shadow-sm"
          />
          <span className="font-semibold text-lg tracking-tight text-foreground">
            Lokmanya <span className="gradient-text">College</span>
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
            <span className="gradient-text">Lokmanya College</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Get instant guidance on courses, admissions, fees, and deadlines. Tap the assistant in the corner to start chatting with Lokmanya College support.
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
