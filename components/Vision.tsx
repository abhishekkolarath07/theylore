"use client";

import Reveal from "./Reveal";

const PHASES = [
  {
    badge: "V1 — Now",
    title: "Infrastructure",
    line: "The booking rail underneath every experience — operator admin, split payouts, WhatsApp confirmations, branded microsites. What you're looking at right now.",
    variant: "v1",
  },
  {
    badge: "V2 — Next",
    title: "Discovery",
    line: "Once enough operators are running on rails, TheyLore opens a public layer — a place to find sessions you didn't know to look for, beyond any single operator you already follow.",
    variant: "v2",
  },
  {
    badge: "V3 — Horizon",
    title: "Community",
    line: "The ones who came back. The ones who brought a friend. A layer built around the regulars and the lore they make together — not just bookings, but belonging.",
    variant: "v3",
  },
] as const;

function PhaseMotif({ variant }: { variant: "v1" | "v2" | "v3" }) {
  if (variant === "v1") {
    return (
      <svg viewBox="0 0 220 70" preserveAspectRatio="xMidYMid meet" className="w-full h-[60px]">
        <line x1="14" y1="35" x2="206" y2="35" stroke="#3fa39a" strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="5 8" />
        <circle cx="40" cy="35" r="4" fill="#e8a056" />
        <circle cx="110" cy="35" r="4" fill="#e8a056" />
        <circle cx="180" cy="35" r="4" fill="#e8a056" />
      </svg>
    );
  }
  if (variant === "v2") {
    return (
      <svg viewBox="0 0 220 70" preserveAspectRatio="xMidYMid meet" className="w-full h-[60px]">
        <circle cx="110" cy="35" r="14" fill="none" stroke="#b97b3d" strokeWidth="1.4" className="animate-pulse" />
        <circle cx="110" cy="35" r="24" fill="none" stroke="#b97b3d" strokeWidth="1" opacity="0.5" />
        <circle cx="110" cy="35" r="5" fill="#b97b3d" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 220 70" preserveAspectRatio="xMidYMid meet" className="w-full h-[60px]">
      <path
        d="M110 60 C100 48 102 36 110 24 C118 36 120 48 110 60 Z"
        fill="#e8a056"
        opacity="0.85"
        className="origin-bottom"
      />
      <circle cx="78" cy="54" r="4" fill="#f4efe3" opacity="0.55" />
      <line x1="78" y1="58" x2="78" y2="66" stroke="#f4efe3" strokeOpacity="0.55" strokeWidth="1.6" />
      <circle cx="142" cy="54" r="4" fill="#f4efe3" opacity="0.55" />
      <line x1="142" y1="58" x2="142" y2="66" stroke="#f4efe3" strokeOpacity="0.55" strokeWidth="1.6" />
    </svg>
  );
}

const VARIANT_STYLES: Record<string, { card: string; badge: string; title: string; line: string }> = {
  v1: {
    card: "bg-[#fffdf8] border border-lineDark",
    badge: "bg-tide/[0.14] text-tide-dim",
    title: "text-graphite",
    line: "text-mist-dark",
  },
  v2: {
    card: "border border-[rgba(185,123,61,0.25)]",
    badge: "bg-[rgba(185,123,61,0.18)] text-ember-dim",
    title: "text-[#3a2a14]",
    line: "text-[#6b5436]",
  },
  v3: {
    card: "bg-ink border border-foam/10",
    badge: "bg-foam/[0.08] text-foam/85 border border-foam/20",
    title: "text-foam",
    line: "text-mist",
  },
};

export default function Vision() {
  return (
    <section
      id="vision"
      className="py-24 pb-[120px]"
      style={{
        background:
          "linear-gradient(180deg, #f1ead9 0%, #3a2e1f 42%, #14201a 75%, #0a1714 100%)",
      }}
    >
      <div className="max-w-[1180px] mx-auto px-10">
        <Reveal>
          <p className="eyebrow text-mist-dark">The road ahead</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-[clamp(1.8rem,3.6vw,2.7rem)] leading-[1.15] tracking-tight text-graphite mt-3.5 max-w-[24ch]">
            V1 is the rail. <span className="italic text-ember-dim">V2 and V3 build what rides on it.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-4 text-[1.05rem] text-mist-dark max-w-[56ch]">
            TheyLore isn&rsquo;t just a booking tool — it&rsquo;s infrastructure
            first, with two more layers planned once that foundation is
            proven.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-[22px]">
          {PHASES.map((p, i) => {
            const styles = VARIANT_STYLES[p.variant];
            const bgStyle = p.variant === "v2" ? { background: "#f6e3c2" } : undefined;
            return (
              <Reveal key={p.badge} delay={((i + 1) as 1 | 2 | 3)}>
                <div className={`rounded-[18px] p-[30px] transition-transform duration-300 hover:-translate-y-1 ${styles.card}`} style={bgStyle}>
                  <span className={`inline-flex font-mono text-[0.66rem] tracking-wider px-3 py-1.5 rounded-full font-semibold ${styles.badge}`}>
                    {p.badge}
                  </span>
                  <h3 className={`font-display text-[1.4rem] mt-4 mb-2.5 ${styles.title}`}>{p.title}</h3>
                  <p className={`text-[0.9rem] leading-relaxed mb-4.5 ${styles.line}`}>{p.line}</p>
                  <PhaseMotif variant={p.variant} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
