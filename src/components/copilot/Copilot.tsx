import { useEffect, useRef, useState } from "react";
import { Bot, X, Send, Sparkles, ArrowLeftRight, Minimize2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Markdown } from "./Markdown";
import { getCopilotReply, QuickReply } from "./copilotEngine";

type Msg = {
  id: string;
  role: "user" | "assistant";
  content: string;
  quickReplies?: QuickReply[];
};

const STORAGE_KEY = "novacopilot:history";

export const Copilot = () => {
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState<"right" | "left">("right");
  const [width, setWidth] = useState(typeof window !== "undefined" ? Math.min(820, Math.round(window.innerWidth * 0.65)) : 720);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try { setMessages(JSON.parse(stored)); return; } catch {}
    }
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "### 👋 Welcome to **NovaCopilot**\nI'm your AI admissions assistant. Ask me anything about courses, fees, or how to apply.",
        quickReplies: [
          { label: "Best course for AI", query: "Which course is best for AI?" },
          { label: "Admission steps", query: "admission process" },
          { label: "Fees", query: "fees" },
          { label: "Deadlines", query: "deadlines" },
        ],
      },
    ]);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Msg = { id: crypto.randomUUID(), role: "user", content: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply = getCopilotReply(trimmed);
      setMessages((m) => [
        ...m,
        { id: crypto.randomUUID(), role: "assistant", content: reply.markdown, quickReplies: reply.quickReplies },
      ]);
      setTyping(false);
    }, 700 + Math.random() * 500);
  };

  // Resizing
  const dragRef = useRef<{ startX: number; startW: number } | null>(null);
  const onDragStart = (e: React.MouseEvent) => {
    dragRef.current = { startX: e.clientX, startW: width };
    window.addEventListener("mousemove", onDragMove);
    window.addEventListener("mouseup", onDragEnd);
  };
  const onDragMove = (e: MouseEvent) => {
    if (!dragRef.current) return;
    const delta = side === "right" ? dragRef.current.startX - e.clientX : e.clientX - dragRef.current.startX;
    const next = Math.min(720, Math.max(340, dragRef.current.startW + delta));
    setWidth(next);
  };
  const onDragEnd = () => {
    dragRef.current = null;
    window.removeEventListener("mousemove", onDragMove);
    window.removeEventListener("mouseup", onDragEnd);
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open Copilot"
          className="fixed bottom-6 right-6 z-50 group"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-primary blur-xl opacity-60 group-hover:opacity-90 transition" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary animate-pulse-glow text-primary-foreground transition-transform group-hover:scale-110">
            <Bot className="w-7 h-7" />
            <Sparkles className="w-3.5 h-3.5 absolute top-3 right-3 animate-pulse" />
          </span>
        </button>
      )}

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/40 backdrop-blur-sm animate-fade-in md:bg-background/20"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Panel */}
      {open && (
        <aside
          className={cn(
            "fixed top-0 z-50 h-screen flex flex-col glass border-l border-border/60 shadow-2xl",
            side === "right" ? "right-0 animate-slide-in-right" : "left-0 animate-slide-in-left",
            "w-full md:w-auto"
          )}
          style={{ maxWidth: "100vw", width: typeof window !== "undefined" && window.innerWidth >= 768 ? width : "100%" }}
        >
          {/* Drag handle */}
          <div
            onMouseDown={onDragStart}
            className={cn(
              "hidden md:block absolute top-0 h-full w-1.5 cursor-col-resize hover:bg-primary/40 transition-colors",
              side === "right" ? "left-0" : "right-0"
            )}
          />

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-background/50">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center btn-glow">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold text-sm flex items-center gap-1.5">
                  NovaCopilot
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-[11px] text-muted-foreground">AI admissions assistant</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setSide(side === "right" ? "left" : "right")}
                className="p-2 rounded-md hover:bg-secondary transition"
                aria-label="Switch side"
                title="Move panel"
              >
                <ArrowLeftRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-md hover:bg-secondary transition md:hidden"
                aria-label="Minimize"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-md hover:bg-destructive/20 hover:text-destructive transition"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((m) => (
              <div key={m.id} className={cn("flex gap-2 animate-fade-in", m.role === "user" && "justify-end")}>
                {m.role === "assistant" && (
                  <div className="w-7 h-7 shrink-0 rounded-md bg-gradient-primary flex items-center justify-center mt-0.5">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3.5 py-2.5",
                    m.role === "user"
                      ? "bg-gradient-primary text-primary-foreground rounded-tr-sm"
                      : "bg-secondary/70 border border-border/60 rounded-tl-sm"
                  )}
                >
                  {m.role === "assistant" ? <Markdown text={m.content} /> : <p className="text-sm">{m.content}</p>}
                  {m.quickReplies && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {m.quickReplies.map((q) => (
                        <button
                          key={q.label}
                          onClick={() => send(q.query)}
                          className="text-xs px-2.5 py-1 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition"
                        >
                          {q.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex gap-2 animate-fade-in">
                <div className="w-7 h-7 shrink-0 rounded-md bg-gradient-primary flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-secondary/70 border border-border/60 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-blink" />
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-blink" style={{ animationDelay: "0.2s" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-blink" style={{ animationDelay: "0.4s" }} />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="border-t border-border/60 p-3 bg-background/50"
          >
            <div className="flex items-center gap-2 bg-secondary/70 border border-border/60 rounded-xl px-3 py-2 focus-within:border-primary/60 transition">
              <Sparkles className="w-4 h-4 text-primary shrink-0" />
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about admissions, courses, fees..."
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                size="sm"
                disabled={!input.trim()}
                className="bg-gradient-primary border-0 h-8 px-3"
              >
                <Send className="w-3.5 h-3.5" />
              </Button>
            </div>
            <p className="text-[10px] text-muted-foreground mt-2 text-center">
              Simulated AI · Powered by NovaEdu
            </p>
          </form>
        </aside>
      )}
    </>
  );
};
