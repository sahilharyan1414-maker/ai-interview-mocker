"use client";

import { useState } from "react";
import Link from "next/link";
import { Mic, Video, Target, ChevronDown, Menu, X } from "lucide-react";

const WAVEFORM = [
  40, 70, 55, 90, 35, 60, 80, 45, 65, 50, 75, 40, 55, 85, 60, 45, 70, 50, 90,
  35, 65, 55, 80, 45,
];

const STACKS = [
  "React",
  "Node.js",
  "Python",
  "TypeScript",
  "PostgreSQL",
  "AWS",
  "System design",
  "Go",
  "SQL",
  "Kubernetes",
];

const STEPS = [
  {
    n: "01",
    title: "Set your scene",
    body: "Enter your target role, stack, and interview type. MockMate drafts a tailored set of questions and model answers behind the scenes.",
  },
  {
    n: "02",
    title: "Go on record",
    body: "Answer out loud through your mic — no typing under pressure. Turn on your camera too if you want to practice sitting up straight.",
  },
  {
    n: "03",
    title: "Read the notes",
    body: "Each answer is graded against the model answer, with a rating and feedback you can revisit anytime from your dashboard.",
  },
];

const QUESTIONS = [
  {
    role: "Backend, system design",
    question:
      "Walk me through how you'd design a rate limiter for a public API.",
    rotate: "-rotate-2",
  },
  {
    role: "Behavioral",
    question:
      "Tell me about a time you disagreed with a teammate’s approach, and what you did next.",
    rotate: "rotate-1",
  },
  {
    role: "Frontend, React",
    question:
      "What's the difference between useMemo and useCallback, and when would you reach for each?",
    rotate: "-rotate-1",
  },
];

const MECHANICS = [
  {
    value: "3",
    label: "rounds per loop — behavioral, technical, system design",
  },
  { value: "<30s", label: "average time to grade a recorded answer" },
  { value: "Optional", label: "camera — your mic does the heavy lifting" },
  {
    value: "Saved",
    label: "every round lands on your dashboard automatically",
  },
];

// Placeholder testimonials — swap for real ones once you have users.
const TESTIMONIALS = [
  {
    quote:
      "I stopped freezing on the first question. Saying my answers out loud, not typing them, made the real interview feel familiar.",
    name: "Priya",
    role: "Frontend engineer",
  },
  {
    quote:
      "The feedback on my system design round told me exactly where I was hand-waving. Fixed it before it cost me an offer.",
    name: "Daniel",
    role: "Backend engineer",
  },
  {
    quote:
      "Being able to pick the exact stack meant the questions matched what I'd actually get asked, not generic trivia.",
    name: "Wei",
    role: "Full-stack engineer",
  },
];

function Logomark() {
  return (
    <span className="flex h-6 items-end gap-0.5">
      <span className="w-1 h-3 bg-slate-500 rounded-sm" />
      <span className="w-1 h-6 bg-sky-400 rounded-sm" />
      <span className="w-1 h-4 bg-slate-500 rounded-sm" />
    </span>
  );
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToQuestions = () => {
    document
      .getElementById("questions")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="top"
      className="font-ui bg-slate-950 text-slate-100 min-h-screen antialiased"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Archivo:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
        .font-ui { font-family: 'Archivo', ui-sans-serif, system-ui, sans-serif; }
        .waveform-bar { transform: scaleY(0.55); transform-origin: bottom; }
        .ticker-track { display: flex; width: max-content; }
        @media (prefers-reduced-motion: no-preference) {
          .waveform-bar { animation: rr-wave 1.1s ease-in-out infinite; }
          .ticker-track { animation: rr-marquee 30s linear infinite; }
        }
        @keyframes rr-wave {
          0%, 100% { transform: scaleY(0.35); }
          50% { transform: scaleY(1); }
        }
        @keyframes rr-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <Logomark />
            <span className="font-display text-lg tracking-tight">
              MockMate
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a
              href="#how-it-works"
              className="hover:text-slate-100 transition-colors"
            >
              How it works
            </a>
            <a
              href="#questions"
              className="hover:text-slate-100 transition-colors"
            >
              Sample questions
            </a>
            <a
              href="#reviews"
              className="hover:text-slate-100 transition-colors"
            >
              Reviews
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <Link
              href="/sign-in"
              className="text-sm text-slate-400 hover:text-slate-100 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className="rounded-md bg-sky-400 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              Get started
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-slate-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950 px-6 py-4 flex flex-col gap-4 text-sm">
            <a
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
              className="text-slate-300"
            >
              How it works
            </a>
            <a
              href="#questions"
              onClick={() => setMenuOpen(false)}
              className="text-slate-300"
            >
              Sample questions
            </a>
            <a
              href="#reviews"
              onClick={() => setMenuOpen(false)}
              className="text-slate-300"
            >
              Reviews
            </a>
            <a href="/signin" className="text-slate-300">
              Sign in
            </a>
            <a
              href="/signup"
              className="rounded-md bg-sky-400 px-4 py-2 text-center font-medium text-slate-950"
            >
              Get started
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 pb-24 pt-16 lg:grid-cols-12 lg:pt-24">
          <div className="lg:col-span-7">
            <h1 className="font-display text-5xl leading-tight text-slate-50 sm:text-6xl">
              Say it here first.
            </h1>
            <p className="mt-6 max-w-md text-lg text-slate-400">
              MockMate turns your target role and stack into a live mock
              interview — spoken questions, real answers, and scored feedback
              before the real one starts.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="/signup"
                className="rounded-md bg-sky-400 px-6 py-3 text-sm font-medium text-slate-950 hover:bg-sky-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                Get started
              </a>
              <button
                onClick={scrollToQuestions}
                className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-100 transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                See a sample question
                <ChevronDown size={16} />
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Mic size={16} className="text-sky-400" /> Speak your answers
              </span>
              <span className="flex items-center gap-2">
                <Video size={16} className="text-sky-400" /> Camera optional
              </span>
              <span className="flex items-center gap-2">
                <Target size={16} className="text-sky-400" /> Tailored to your
                stack
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-lg border border-slate-800 bg-slate-900 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                  </span>
                  <span className="text-xs text-slate-400">Live</span>
                </div>
                <span className="font-display text-xs tabular-nums text-slate-500">
                  07:42
                </span>
              </div>

              <div className="px-5 py-5">
                <p className="text-xs text-slate-500">Interviewer</p>
                <p className="mt-2 text-slate-100">
                  Tell me about a time you had to debug a production issue under
                  pressure.
                </p>
              </div>

              <div className="border-t border-slate-800 px-5 py-5">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Mic size={14} /> You — speaking
                </div>
                <div className="mt-3 flex h-12 items-end gap-1">
                  {WAVEFORM.map((h, i) => (
                    <span
                      key={i}
                      className="waveform-bar w-1 rounded-sm bg-sky-400"
                      style={{
                        height: `${h}%`,
                        animationDelay: `${i * 0.06}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-800 px-5 py-5">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-500">Clarity</span>
                      <span className="font-display text-sm tabular-nums text-slate-100">
                        8.4
                      </span>
                    </div>
                    <div className="mt-2 h-1 rounded-full bg-slate-800">
                      <div
                        className="h-1 rounded-full bg-sky-400"
                        style={{ width: "84%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-500">Structure</span>
                      <span className="font-display text-sm tabular-nums text-slate-100">
                        7.9
                      </span>
                    </div>
                    <div className="mt-2 h-1 rounded-full bg-slate-800">
                      <div
                        className="h-1 rounded-full bg-sky-400"
                        style={{ width: "79%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="border-y border-slate-800 bg-slate-900 py-4">
        <div className="overflow-hidden">
          <div className="ticker-track">
            {[...STACKS, ...STACKS].map((s, i) => (
              <span
                key={i}
                className="mx-4 flex items-center gap-4 text-sm text-slate-500 whitespace-nowrap"
              >
                {s}
                <span className="h-1 w-1 rounded-full bg-slate-700" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-3xl text-slate-50 sm:text-4xl max-w-md">
          Three rounds, no surprises.
        </h2>
        <div className="mt-12 divide-y divide-slate-800 border-t border-slate-800">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="grid gap-3 py-8 sm:grid-cols-12 sm:gap-8"
            >
              <span className="font-display text-3xl text-slate-700 sm:col-span-2">
                {step.n}
              </span>
              <h3 className="sm:col-span-3 text-lg text-slate-100">
                {step.title}
              </h3>
              <p className="sm:col-span-7 text-slate-400">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sample questions */}
      <section
        id="questions"
        className="bg-slate-900 border-y border-slate-800 py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl text-slate-50 sm:text-4xl max-w-md">
            Cue cards, not trivia.
          </h2>
          <p className="mt-4 max-w-md text-slate-400">
            Every question is generated for the role and stack you set —
            here&apos;s what that looks like in practice.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {QUESTIONS.map((q, i) => (
              <div
                key={i}
                className={`${q.rotate} rounded-lg border border-slate-800 bg-slate-950 p-6 transition-transform hover:rotate-0`}
              >
                <span className="inline-block rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-400">
                  {q.role}
                </span>
                <p className="mt-4 font-display text-lg leading-snug text-slate-100">
                  {q.question}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanics */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid divide-y divide-slate-800 border-y border-slate-800 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {MECHANICS.map((m, i) => (
            <div key={i} className="px-2 py-8 sm:px-6">
              <p className="font-display text-3xl tabular-nums text-sky-400">
                {m.value}
              </p>
              <p className="mt-2 text-sm text-slate-400">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-3xl text-slate-50 sm:text-4xl max-w-md">
          From the other side of the mic.
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div key={i}>
              <span className="font-display text-4xl text-slate-700">
                &ldquo;
              </span>
              <p className="-mt-3 text-slate-300">{t.quote}</p>
              <p className="mt-4 text-sm text-slate-500">
                — {t.name}, {t.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-slate-800">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(56,189,248,0.14), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-28 text-center">
          <h2 className="font-display text-4xl text-slate-50 sm:text-5xl">
            Your next interview starts here.
          </h2>
          <p className="mt-4 text-slate-400">
            Practice as many rounds as you need before the real thing.
          </p>
          <a
            href="/signup"
            className="mt-8 inline-block rounded-md bg-sky-400 px-8 py-3 text-sm font-medium text-slate-950 hover:bg-sky-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            Get started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Logomark />
                <span className="font-display text-lg">MockMate</span>
              </div>
              <p className="mt-3 text-sm text-slate-500 max-w-xs">
                Practice interviews, out loud.
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-300">Product</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-500">
                <li>
                  <a href="#how-it-works" className="hover:text-slate-300">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#questions" className="hover:text-slate-300">
                    Sample questions
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-slate-300">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm text-slate-300">Company</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-slate-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm text-slate-300">Legal</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-slate-300">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-300">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-800 pt-8 text-xs text-slate-600">
            © {new Date().getFullYear()} MockMate
          </div>
        </div>
      </footer>
    </div>
  );
}
