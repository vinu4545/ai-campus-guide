import { Bot, CheckCircle2, Clock, FileText, GraduationCap, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const steps = [
  { label: "Application submitted", done: true },
  { label: "Documents uploaded", done: true },
  { label: "Assessment scheduled", done: true },
  { label: "Interview", done: false },
  { label: "Offer letter", done: false },
];

const Dashboard = () => {
  const completed = steps.filter((s) => s.done).length;
  const pct = (completed / steps.length) * 100;

  return (
    <div className="container py-12">
      <div className="flex items-end justify-between mb-8 animate-fade-in">
        <div>
          <div className="text-xs uppercase tracking-wider text-primary mb-1">Dashboard</div>
          <h1 className="text-3xl md:text-4xl font-bold">Welcome back, <span className="gradient-text">Alex</span></h1>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Application active
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-muted-foreground">Application progress</div>
              <div className="text-2xl font-bold mt-1">{completed} of {steps.length} steps</div>
            </div>
            <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center btn-glow">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <Progress value={pct} className="h-2 mb-6" />
          <div className="space-y-3">
            {steps.map((s) => (
              <div key={s.label} className="flex items-center gap-3 text-sm">
                {s.done ? (
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                ) : (
                  <Clock className="w-5 h-5 text-muted-foreground" />
                )}
                <span className={s.done ? "" : "text-muted-foreground"}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center btn-glow">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Program</div>
                <div className="font-semibold text-sm">B.Tech CS & AI</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">Intake: Fall 2026</div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">Copilot recommendations</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-primary">•</span> Apply for the Merit Scholarship by Feb 1</li>
              <li className="flex gap-2"><span className="text-primary">•</span> Take the AI placement quiz</li>
              <li className="flex gap-2"><span className="text-primary">•</span> Join the Robotics open house</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mt-5">
        {[
          { label: "Submitted", value: "Oct 12, 2026", icon: FileText },
          { label: "Next deadline", value: "Nov 30, 2026", icon: Clock },
          { label: "Status", value: "On track", icon: CheckCircle2 },
        ].map((s) => (
          <div key={s.label} className="glass rounded-2xl p-5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
              <div className="font-semibold text-sm">{s.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
