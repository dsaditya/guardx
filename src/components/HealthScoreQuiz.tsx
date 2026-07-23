import { useState } from "react";
import { ArrowRight, RotateCcw, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

type Option = { label: string; pts: 10 | 5 | 0 };
type Question = { category: string; text: string; options: [Option, Option, Option] };

const QUESTIONS: Question[] = [
  {
    category: "Perimeter & Access",
    text: "Are all entry/exit points monitored by CCTV?",
    options: [
      { label: "All points", pts: 10 },
      { label: "Main gate only", pts: 5 },
      { label: "None", pts: 0 },
    ],
  },
  {
    category: "Perimeter & Access",
    text: "Boom barriers or automated gates at vehicle entry?",
    options: [
      { label: "Yes, automated", pts: 10 },
      { label: "Manual only", pts: 5 },
      { label: "No barrier", pts: 0 },
    ],
  },
  {
    category: "Surveillance Coverage",
    text: "CCTV coverage of common areas (clubhouse, parking, playground)?",
    options: [
      { label: "Fully covered", pts: 10 },
      { label: "Partially", pts: 5 },
      { label: "Not covered", pts: 0 },
    ],
  },
  {
    category: "Surveillance Coverage",
    text: "CCTV footage retention period?",
    options: [
      { label: "30+ days", pts: 10 },
      { label: "7–15 days", pts: 5 },
      { label: "Less than 7 days or none", pts: 0 },
    ],
  },
  {
    category: "Access Control",
    text: "Biometric/RFID access for residents at main gate?",
    options: [
      { label: "Yes", pts: 10 },
      { label: "Manual register only", pts: 5 },
      { label: "No system", pts: 0 },
    ],
  },
  {
    category: "Access Control",
    text: "Visitors logged before entry?",
    options: [
      { label: "Digital", pts: 10 },
      { label: "Manual register", pts: 5 },
      { label: "No log", pts: 0 },
    ],
  },
  {
    category: "Manpower & Response",
    text: "Guards present 24/7 at all access points?",
    options: [
      { label: "Yes, all points", pts: 10 },
      { label: "Only main gate", pts: 5 },
      { label: "No dedicated guards", pts: 0 },
    ],
  },
  {
    category: "Manpower & Response",
    text: "Documented emergency response protocol?",
    options: [
      { label: "Yes, documented + drilled", pts: 10 },
      { label: "Informal only", pts: 5 },
      { label: "None", pts: 0 },
    ],
  },
  {
    category: "Maintenance & Uptime",
    text: "Last AMC service on equipment?",
    options: [
      { label: "Within 6 months", pts: 10 },
      { label: "6–12 months", pts: 5 },
      { label: "Over a year or never", pts: 0 },
    ],
  },
  {
    category: "Maintenance & Uptime",
    text: "Equipment downtime in the last 3 months?",
    options: [
      { label: "No downtime", pts: 10 },
      { label: "Minor, resolved", pts: 5 },
      { label: "Frequent, unresolved", pts: 0 },
    ],
  },
];

const CATEGORIES = [
  "Perimeter & Access",
  "Surveillance Coverage",
  "Access Control",
  "Manpower & Response",
  "Maintenance & Uptime",
];

const getBadge = (score: number) => {
  if (score >= 80) return { label: "Excellent", classes: "bg-green-600 text-white" };
  if (score >= 60) return { label: "Good", classes: "bg-blue-600 text-white" };
  if (score >= 40) return { label: "Needs Improvement", classes: "bg-accent text-accent-foreground" };
  return { label: "High Risk", classes: "bg-red-600 text-white" };
};

const HealthScoreQuiz = () => {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(10).fill(null));
  const [current, setCurrent] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showLead, setShowLead] = useState(false);
  const [lead, setLead] = useState({ name: "", phone: "", email: "" });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const { toast } = useToast();

  const selectOption = (pts: number) => {
    const next = [...answers];
    next[current] = pts;
    setAnswers(next);
    setTimeout(() => {
      if (current < QUESTIONS.length - 1) {
        setCurrent(current + 1);
      } else {
        setShowResults(true);
      }
    }, 150);
  };

  const retake = () => {
    setAnswers(Array(10).fill(null));
    setCurrent(0);
    setShowResults(false);
    setShowLead(false);
    setLeadSubmitted(false);
    setLead({ name: "", phone: "", email: "" });
  };

  const totalScore = answers.reduce<number>((s, a) => s + (a ?? 0), 0);
  const badge = getBadge(totalScore);

  const categoryScores = CATEGORIES.map((cat) => {
    const score = QUESTIONS.reduce<number>((sum, q, i) => {
      if (q.category !== cat) return sum;
      return sum + (answers[i] ?? 0);
    }, 0);
    return { category: cat, score };
  });

  const submitLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lead.name.trim() || !lead.phone.trim()) {
      toast({ title: "Missing details", description: "Name and phone are required." });
      return;
    }
    console.log("Health Score lead:", { ...lead, totalScore, categoryScores });
    setLeadSubmitted(true);
    toast({
      title: "Request received",
      description: "The GuardX360 team will share your recommendations within 24 hours.",
    });
  };

  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto border border-border bg-section-alt p-6 md:p-10">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-wide text-accent font-semibold mb-2">
              Free Self-Assessment
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading">
              Security Health Score Quiz
            </h2>
            <p className="text-secondary text-sm mt-2">
              10 questions. Two minutes. Know where your community stands.
            </p>
          </div>

          {!showResults && (
            <>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wide text-secondary font-semibold">
                  {QUESTIONS[current].category}
                </span>
                <span className="text-xs uppercase tracking-wide text-secondary">
                  Question {current + 1} of {QUESTIONS.length}
                </span>
              </div>
              <div className="h-1 w-full bg-border mb-8">
                <div
                  className="h-full bg-accent transition-all duration-300"
                  style={{ width: `${((current + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-primary font-heading mb-6">
                {QUESTIONS[current].text}
              </h3>

              <div className="space-y-3">
                {QUESTIONS[current].options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => selectOption(opt.pts)}
                    className="w-full flex items-center justify-between border border-border bg-background hover:border-accent hover:bg-accent/5 transition-colors px-5 py-4 text-left"
                  >
                    <span className="text-primary font-medium">{opt.label}</span>
                    <span className="text-xs uppercase tracking-wide text-secondary font-semibold">
                      {opt.pts} pts
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}

          {showResults && (
            <div>
              <div className="text-center mb-8">
                <div className="text-6xl md:text-7xl font-bold text-primary font-heading">
                  {totalScore}
                  <span className="text-3xl md:text-4xl text-secondary">/100</span>
                </div>
                <div
                  className={`inline-block mt-4 px-4 py-1.5 text-xs uppercase tracking-wide font-semibold ${badge.classes}`}
                >
                  {badge.label}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {categoryScores.map((c) => (
                  <div key={c.category} className="border border-border bg-background p-4">
                    <p className="text-xs uppercase tracking-wide text-secondary font-semibold mb-1">
                      {c.category}
                    </p>
                    <p className="text-xl font-bold text-primary font-heading">
                      {c.score}
                      <span className="text-sm text-secondary font-normal">/20</span>
                    </p>
                  </div>
                ))}
              </div>

              {!showLead && !leadSubmitted && (
                <div className="flex flex-col items-center gap-3">
                  <Button
                    onClick={() => setShowLead(true)}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold uppercase tracking-wide"
                  >
                    Get detailed recommendations <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <button
                    onClick={retake}
                    className="text-sm text-secondary hover:text-primary inline-flex items-center gap-2 uppercase tracking-wide"
                  >
                    <RotateCcw className="h-4 w-4" /> Retake quiz
                  </button>
                </div>
              )}

              {showLead && !leadSubmitted && (
                <form onSubmit={submitLead} className="space-y-4 max-w-md mx-auto">
                  <div>
                    <label className="text-xs uppercase tracking-wide text-secondary block mb-1">
                      Name *
                    </label>
                    <Input
                      value={lead.name}
                      onChange={(e) => setLead({ ...lead, name: e.target.value })}
                      placeholder="Your full name"
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wide text-secondary block mb-1">
                      Phone *
                    </label>
                    <Input
                      value={lead.phone}
                      onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                      placeholder="+91"
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wide text-secondary block mb-1">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={lead.email}
                      onChange={(e) => setLead({ ...lead, email: e.target.value })}
                      placeholder="you@example.com"
                      className="border-border"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-3 pt-2">
                    <Button
                      type="submit"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold uppercase tracking-wide w-full sm:w-auto"
                    >
                      Send my recommendations <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <button
                      type="button"
                      onClick={retake}
                      className="text-sm text-secondary hover:text-primary inline-flex items-center gap-2 uppercase tracking-wide"
                    >
                      <RotateCcw className="h-4 w-4" /> Retake quiz
                    </button>
                  </div>
                </form>
              )}

              {leadSubmitted && (
                <div className="text-center">
                  <div className="bg-accent/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary font-heading mb-2">
                    Thank you
                  </h3>
                  <p className="text-secondary mb-6">
                    A GuardX360 engineer will share your detailed recommendations within 24 hours.
                  </p>
                  <button
                    onClick={retake}
                    className="text-sm text-secondary hover:text-primary inline-flex items-center gap-2 uppercase tracking-wide"
                  >
                    <RotateCcw className="h-4 w-4" /> Retake quiz
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HealthScoreQuiz;
