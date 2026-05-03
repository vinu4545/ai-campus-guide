import { Link } from "react-router-dom";
import { CheckCircle2, FileText, ClipboardCheck, MessageSquare, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: FileText, title: "Submit Application", desc: "Fill the smart online form in 5 minutes." },
  { icon: ClipboardCheck, title: "Upload Documents", desc: "Transcripts, ID and a short personal note." },
  { icon: MessageSquare, title: "Assessment & Interview", desc: "Online assessment + faculty conversation." },
  { icon: GraduationCap, title: "Offer & Enrollment", desc: "Receive your offer and join the community." },
];

const fees = [
  { name: "B.Tech CS & AI", fee: "$4,200/yr" },
  { name: "B.Sc Data Science", fee: "$3,600/yr" },
  { name: "BBA Digital Business", fee: "$3,200/yr" },
  { name: "B.Des UX Design", fee: "$3,900/yr" },
];

const eligibility = [
  "Minimum 65% in Grade 12",
  "Math required for tech programs",
  "English proficiency (IELTS 6.0+ for international)",
  "Portfolio for Design programs",
];

const Admissions = () => (
  <div className="container py-16 space-y-20">
    <section className="max-w-2xl animate-fade-in">
      <div className="text-xs uppercase tracking-wider text-primary mb-2">Admissions</div>
      <h1 className="text-4xl md:text-5xl font-bold mb-3">Your journey starts <span className="gradient-text">here</span></h1>
      <p className="text-muted-foreground">A simple, transparent, AI-guided admissions process.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-6">Process</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <div key={s.title} className="glass rounded-2xl p-6 relative">
            <span className="absolute top-4 right-4 text-xs font-bold text-primary/60">0{i + 1}</span>
            <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center btn-glow mb-4">
              <s.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="grid lg:grid-cols-2 gap-6">
      <div className="glass rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-5">Eligibility</h2>
        <ul className="space-y-3">
          {eligibility.map((e) => (
            <li key={e} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="glass rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-5">Fee Structure</h2>
        <div className="divide-y divide-border/60">
          {fees.map((f) => (
            <div key={f.name} className="flex items-center justify-between py-3 text-sm">
              <span>{f.name}</span>
              <span className="font-semibold gradient-text">{f.fee}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">💡 Up to 40% scholarship for top scorers.</p>
      </div>
    </section>

    <section className="glass rounded-3xl p-10 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to begin?</h2>
        <p className="text-muted-foreground mb-6">Your application takes less than 5 minutes.</p>
        <Button asChild size="lg" className="bg-gradient-primary border-0 btn-glow">
          <Link to="/dashboard">Start Application <ArrowRight className="w-4 h-4 ml-1" /></Link>
        </Button>
      </div>
    </section>
  </div>
);

export default Admissions;
