import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, Loader2, CheckCircle2 } from "lucide-react";

export default function SummarizePage() {
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSummarize = () => {
    if (!text.trim() && !file) return;
    setIsLoading(true);
    setTimeout(() => {
      setSummary(
        `## Document Summary\n\n**Document Type:** Legal Contract\n**Pages:** 14\n**Key Parties:** Party A (Acme Corp), Party B (GlobalTech Inc.)\n\n### Key Findings\n\n1. **Term & Duration:** The agreement is effective for 36 months from the execution date, with automatic renewal unless terminated with 90 days written notice.\n\n2. **Payment Terms:** Monthly payments of $12,500 are due on the first business day of each month. Late payments incur a 1.5% monthly penalty.\n\n3. **Intellectual Property:** All IP developed during the engagement remains the property of Party A, with a limited license granted to Party B for operational use.\n\n4. **Termination Clauses:** Either party may terminate for cause with 30 days written notice. Material breach triggers immediate termination rights.\n\n5. **Liability Cap:** Total liability is capped at 12 months of aggregate fees paid under the agreement.\n\n### Risk Assessment\n- **Medium Risk:** The non-compete clause in Section 8.3 may be overly broad\n- **Low Risk:** Standard indemnification provisions are included\n- **Action Required:** Arbitration clause references an outdated AAA rule set`
      );
      setIsLoading(false);
    }, 2000);
  };

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="animate-fade-up">
          <h1 className="text-2xl font-serif font-bold tracking-tight">Document Summarizer</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Upload or paste a legal document to get an AI-powered summary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-up stagger-1">
          {/* Input */}
          <div className="space-y-4">
            <div
              className="surface-elevated rounded-xl border-2 border-dashed border-border p-8 text-center cursor-pointer hover:border-primary/40 transition-colors"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm font-medium">
                {file ? file.name : "Click to upload a document"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                PDF, DOCX, or TXT — up to 20MB
              </p>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept=".pdf,.docx,.txt"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </div>

            <div className="text-center text-xs text-muted-foreground">or paste text below</div>

            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your legal document text here..."
              className="min-h-[200px]"
            />

            <Button onClick={handleSummarize} disabled={isLoading && !text.trim() && !file} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <FileText className="mr-2 h-4 w-4" />
                  Summarize Document
                </>
              )}
            </Button>
          </div>

          {/* Output */}
          <div className="surface-elevated rounded-xl p-6 min-h-[400px]">
            {!summary && !isLoading && (
              <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                <FileText className="h-10 w-10 mb-3 opacity-40" />
                <p className="text-sm">Your summary will appear here</p>
              </div>
            )}
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-full">
                <Loader2 className="h-8 w-8 animate-spin text-primary mb-3" />
                <p className="text-sm text-muted-foreground">Analyzing document...</p>
              </div>
            )}
            {summary && !isLoading && (
              <div className="animate-fade-up">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm font-medium">Analysis Complete</span>
                </div>
                <div className="prose prose-sm max-w-none text-sm leading-relaxed whitespace-pre-wrap">
                  {summary}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
