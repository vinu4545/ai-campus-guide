import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => (
  <div className="container py-16">
    <div className="max-w-2xl mb-10 animate-fade-in">
      <div className="text-xs uppercase tracking-wider text-primary mb-2">Contact</div>
      <h1 className="text-4xl md:text-5xl font-bold mb-3">Get in <span className="gradient-text">touch</span></h1>
      <p className="text-muted-foreground">We'll get back to you within 24 hours. Or ask Lokmanya College for instant answers.</p>
    </div>

    <div className="grid lg:grid-cols-3 gap-6">
      <div className="space-y-4">
        {[
          { icon: Mail, label: "Email", value: "admissions@lokmanyacollege.edu" },
          { icon: Phone, label: "Phone", value: "+1 (555) 010-2030" },
          { icon: MapPin, label: "Campus", value: "Lokmanya College Campus" },
        ].map((c) => (
          <div key={c.label} className="glass rounded-2xl p-5 flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center btn-glow shrink-0">
              <c.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">{c.label}</div>
              <div className="font-medium">{c.value}</div>
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); toast.success("Message sent! We'll reply soon."); (e.target as HTMLFormElement).reset(); }}
        className="lg:col-span-2 glass rounded-2xl p-8 space-y-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <Input required placeholder="Full name" className="bg-background/50 border-border/60 h-11" />
          <Input required type="email" placeholder="Email" className="bg-background/50 border-border/60 h-11" />
        </div>
        <Input required placeholder="Subject" className="bg-background/50 border-border/60 h-11" />
        <Textarea required placeholder="Your message..." rows={6} className="bg-background/50 border-border/60" />
        <Button type="submit" size="lg" className="bg-gradient-primary border-0 btn-glow">
          Send Message <Send className="w-4 h-4 ml-1" />
        </Button>
      </form>
    </div>
  </div>
);

export default Contact;
