import { useEffect, useRef, useState } from "react";
import { Bot, RotateCcw, X, Send, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Markdown } from "./Markdown";
import { getCopilotReply, QuickReply } from "./copilotEngine";
import collegeImage from "../Images/college_Image.webp";

type Msg = {
  id: string;
  role: "user" | "assistant";
  content: string;
  quickReplies?: QuickReply[];
};

const STORAGE_KEY = "lokmanya-college:history";

const getInitialMessages = (): Msg[] => [
  {
    id: "welcome",
    role: "assistant",
    content:
      "### 👋 Welcome to **Lokmanya College**\nI'm your AI admissions assistant. Ask me anything about courses, fees, or how to apply.",
    quickReplies: [
      { label: "Best course for AI", query: "Which course is best for AI?" },
      { label: "Admission steps", query: "admission process" },
      { label: "Fees", query: "fees" },
      { label: "Deadlines", query: "deadlines" },
    ],
  },
];

export const Copilot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try { setMessages(JSON.parse(stored)); return; } catch {}
    }
    setMessages(getInitialMessages());
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

  const resetChat = () => {
    setInput("");
    setTyping(false);
    setMessages(getInitialMessages());
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open Copilot"
          className="fixed bottom-6 right-6 z-50 group transition-all duration-300 ease-out hover:scale-105 active:scale-95 animate-fade-in"
        >
          <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,#1e3c72,#2a5298)] blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-300" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1e3c72,#2a5298)] text-white shadow-[0_16px_40px_rgba(30,60,114,0.35)] transition-transform duration-300 group-hover:scale-110">
            <Bot className="w-7 h-7" />
            <Sparkles className="w-3.5 h-3.5 absolute top-3 right-3 animate-pulse" />
          </span>
        </button>
      )}

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/15 backdrop-blur-[2px] animate-fade-in"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Panel */}
      {open && (
        <aside
          className={cn(
            "fixed bottom-6 right-6 z-50 flex flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.22)] ring-1 ring-black/5 animate-fade-in md:top-1/2 md:-translate-y-1/2 md:bottom-auto",
            "w-[min(390px,calc(100vw-1.5rem))] h-[min(560px,calc(100vh-1.5rem))]"
          )}
        >

          {/* Header */}
          <div className="flex items-center justify-between gap-3 bg-[linear-gradient(135deg,#1e3c72,#2a5298)] px-4 py-4 text-white shadow-sm">
            <button
              onClick={resetChat}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label="Reset chat"
              title="Reset chat"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
            <div className="flex-1 text-center">
              <div className="text-[15px] font-semibold tracking-wide">Chat with us</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto bg-[#f6f8fc] px-3 py-4">
            {messages.map((m) => (
              <div key={m.id} className={cn("mb-3 flex animate-fade-in", m.role === "user" ? "justify-end" : "justify-start")}>
                <div className={cn("flex max-w-[86%] gap-2", m.role === "user" && "flex-row-reverse")}> 
                  {m.role === "assistant" && (
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
                      <Bot className="h-4.5 w-4.5 text-[#2a5298]" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm transition-all duration-200",
                      m.role === "user"
                        ? "rounded-tr-md bg-[linear-gradient(135deg,#1e3c72,#2a5298)] text-white"
                        : "rounded-tl-md bg-[#f1f3f8] text-slate-700 ring-1 ring-slate-200"
                    )}
                  >
                    {m.role === "assistant" ? <Markdown text={m.content} /> : <p className="text-sm">{m.content}</p>}
                    {m.id === "welcome" && m.role === "assistant" && (
                      <img
                        src={collegeImage}
                        alt="Lokmanya College"
                        className="mt-3 w-full rounded-xl object-cover"
                      />
                    )}
                    {m.quickReplies && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {m.quickReplies.map((q) => (
                          <button
                            key={q.label}
                            onClick={() => send(q.query)}
                            className="rounded-full border border-[#d6dbea] bg-white px-3 py-1.5 text-xs font-medium text-[#1e3c72] transition hover:-translate-y-0.5 hover:border-[#9bb3df] hover:shadow-sm"
                          >
                            {q.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {typing && (
              <div className="mb-3 flex animate-fade-in justify-start">
                <div className="flex max-w-[86%] gap-2">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
                    <Bot className="h-4.5 w-4.5 text-[#2a5298]" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-md bg-[#f1f3f8] px-4 py-3 shadow-sm ring-1 ring-slate-200">
                    <span className="h-2 w-2 rounded-full bg-[#2a5298] animate-blink" />
                    <span className="h-2 w-2 rounded-full bg-[#2a5298] animate-blink" style={{ animationDelay: "0.2s" }} />
                    <span className="h-2 w-2 rounded-full bg-[#2a5298] animate-blink" style={{ animationDelay: "0.4s" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="border-t border-slate-200 bg-white px-3 py-3"
          >
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-[#f8faff] px-3 py-2.5 shadow-sm transition focus-within:border-[#9bb3df]">
              <Sparkles className="w-4 h-4 shrink-0 text-[#2a5298]" />
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about admissions, courses, fees..."
                className="flex-1 bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
              />
              <Button
                type="submit"
                disabled={!input.trim()}
                className="h-9 rounded-xl border-0 bg-[linear-gradient(135deg,#1e3c72,#2a5298)] px-4 text-white shadow-md transition hover:opacity-95"
              >
                <Send className="w-3.5 h-3.5" />
              </Button>
            </div>
            <p className="mt-2 text-center text-[10px] text-slate-500">
              Powered by Lokmanya College AI
            </p>
          </form>
        </aside>
      )}
    </>
  );
};
