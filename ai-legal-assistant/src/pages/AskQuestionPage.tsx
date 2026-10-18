import { useState, useRef, useEffect } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestions = [
  "What are the grounds for divorce under the Hindu Marriage Act?",
  "Explain the bail provisions under Section 439 CrPC",
  "What are the tenant rights under the Rent Control Act?",
  "How does Article 21 protect the right to privacy?",
];

export default function AskQuestionPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;

    setInput("");
    const userMsg: Message = { role: "user", content: msg };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Based on my analysis of relevant Indian legal provisions:\n\n**Regarding your question:** "${msg}"\n\nThis is an important area of Indian law governed by multiple statutes and judicial precedents from the Supreme Court and various High Courts.\n\n**Key Points:**\n1. The applicable legal framework falls under the relevant Indian statute and is subject to the jurisdiction of the concerned court\n2. The Supreme Court of India has addressed similar issues in landmark judgments\n3. The constitutional validity of such provisions has been upheld under Articles 14, 19, and 21 of the Constitution of India\n\n**Relevant Statutes:**\n- Indian Penal Code, 1860 (IPC)\n- Code of Criminal Procedure, 1973 (CrPC)\n- Code of Civil Procedure, 1908 (CPC)\n- The Constitution of India\n\n**Important Case Law:**\n- Refer to decisions of the Hon'ble Supreme Court for authoritative interpretation\n\n*Note: This is AI-generated legal information for research purposes only and does not constitute legal advice under the Advocates Act, 1961. Please consult a licensed advocate for specific legal guidance.*`,
        },
      ]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto flex flex-col h-[calc(100vh-7.5rem)]">
        <div className="mb-6 animate-fade-up shrink-0">
          <h1 className="text-2xl font-serif font-bold tracking-tight">Ask a Legal Question</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Get AI-powered answers on Indian statutes, case law, and legal principles.
          </p>
        </div>

        <div className="flex-1 overflow-auto space-y-4 pb-4 min-h-0">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center animate-fade-up stagger-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary mb-5">
                <Sparkles className="h-7 w-7 text-primary" />
              </div>
              <h2 className="font-serif text-xl font-semibold mb-2">How can I help?</h2>
              <p className="text-sm text-muted-foreground mb-8 max-w-md">
                Ask any question about Indian law — I'll analyse relevant statutes, Supreme Court & High Court judgments, and legal principles.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="text-left text-sm p-3 rounded-lg border border-border bg-card hover:bg-secondary transition-colors card-hover"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""} animate-fade-up`}>
              {msg.role === "assistant" && (
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shrink-0 mt-0.5">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border"
                }`}
                style={{ whiteSpace: "pre-wrap" }}
              >
                {msg.content}
              </div>
              {msg.role === "user" && (
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary shrink-0 mt-0.5">
                  <User className="h-4 w-4 text-foreground" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 animate-fade-in">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shrink-0">
                <Bot className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="bg-card border border-border rounded-xl px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="h-2 w-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="h-2 w-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="border-t border-border pt-4 shrink-0">
          <div className="flex gap-3">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your legal question..."
              className="min-h-[44px] max-h-32 resize-none"
              rows={1}
            />
            <Button
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              size="icon"
              className="shrink-0 h-11 w-11"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            AI-generated content is for research purposes only. Not legal advice under the Advocates Act, 1961.
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
