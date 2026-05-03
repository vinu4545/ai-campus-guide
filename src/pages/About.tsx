import { Building2, Users, Trophy, Globe2 } from "lucide-react";

const stats = [
  { icon: Building2, value: "50+", label: "Acres campus" },
  { icon: Users, value: "30K+", label: "Active students" },
  { icon: Trophy, value: "120+", label: "Awards" },
  { icon: Globe2, value: "60+", label: "Countries" },
];

const About = () => (
  <div className="container py-16 space-y-16">
    <section className="max-w-3xl animate-fade-in">
      <div className="text-xs uppercase tracking-wider text-primary mb-2">About</div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">A college built for the <span className="gradient-text">future of learning</span></h1>
      <p className="text-muted-foreground text-lg">
        NovaEdu is an AI-first institution combining world-class faculty, modern infrastructure, and a deep belief in personalized education.
      </p>
    </section>

    <section className="grid md:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="glass rounded-2xl p-6">
          <s.icon className="w-6 h-6 text-primary mb-3" />
          <div className="text-3xl font-bold">{s.value}</div>
          <div className="text-sm text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </section>

    <section className="grid lg:grid-cols-2 gap-6">
      <div className="glass rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-3">Our mission</h2>
        <p className="text-muted-foreground">
          Empower every learner with intelligent guidance, modern curriculum, and a global network — so ambition is never limited by access.
        </p>
      </div>
      <div className="glass rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-3">Our campus</h2>
        <p className="text-muted-foreground">
          Five academic blocks, three research labs, an innovation hub, and residential housing — all designed for collaboration.
        </p>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-6">Faculty highlights</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { name: "Dr. Aisha Verma", role: "AI & ML · ex-Google Brain" },
          { name: "Prof. Liam Chen", role: "Data Science · Stanford" },
          { name: "Dr. Maria Rossi", role: "Design · ex-Apple" },
        ].map((f) => (
          <div key={f.name} className="glass rounded-2xl p-6">
            <div className="w-12 h-12 rounded-full bg-gradient-primary mb-3 btn-glow" />
            <div className="font-semibold">{f.name}</div>
            <div className="text-sm text-muted-foreground">{f.role}</div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
