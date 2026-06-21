"use client";

import Reveal from "./Reveal";

const POINTS = [
  {
    num: "01",
    title: "One model, every activity",
    line: "Surf session, trek permit, dance class, scuba dive — the same booking backbone flexes to fit, no separate setup per activity type.",
  },
  {
    num: "02",
    title: "Split payouts without spreadsheets",
    line: "Razorpay Route handles the math the moment a guest pays — your share lands automatically, no manual settlement at month-end.",
  },
  {
    num: "03",
    title: "Confirmations you don't have to send",
    line: "Booking confirmed, weather note, packing list — delivered over WhatsApp the moment a guest checks out.",
  },
];

const RULES = [
  { label: "Dawn Surf Session", tag: "92 / 8" },
  { label: "Multi-day Trek Permit", tag: "95 / 5" },
  { label: "Equipment Add-on", tag: "90 / 10" },
  { label: "Corporate Offsite", tag: "Custom" },
];

export default function Customise() {
  return (
    <section className="py-24">
      <div className="max-w-[1180px] mx-auto px-10">
        <Reveal>
          <p className="eyebrow text-mist-dark">Built around how you run sessions</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-[clamp(1.8rem,3.6vw,2.7rem)] leading-[1.15] tracking-tight text-graphite mt-3.5 max-w-[20ch]">
            We don&rsquo;t make you fit our model.{" "}
            <span className="italic text-tide-dim">We fit yours.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-center">
          <Reveal delay={2}>
            {POINTS.map((p, i) => (
              <div
                key={p.num}
                className={`flex gap-4 py-[22px] border-t border-lineDark ${
                  i === POINTS.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="font-mono text-[0.78rem] text-ember-dim min-w-[28px] pt-0.5">{p.num}</span>
                <div>
                  <h4 className="font-display text-[1.15rem] mb-1.5">{p.title}</h4>
                  <p className="text-[0.92rem] text-mist-dark leading-relaxed m-0">{p.line}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={3}>
            <div className="bg-ink rounded-[18px] p-7">
              <div className="bg-[#fffdf8] rounded-xl p-[18px]">
                <p className="eyebrow text-mist-dark mb-2.5">Sample payout rule</p>
                {RULES.map((r, i) => (
                  <div
                    key={r.label}
                    className={`flex justify-between items-center py-2.5 text-[0.82rem] ${
                      i !== RULES.length - 1 ? "border-b border-dashed border-lineDark" : ""
                    }`}
                  >
                    <span>{r.label}</span>
                    <span className="font-mono text-[0.65rem] bg-tide/[0.14] text-tide-dim px-2 py-1 rounded">
                      {r.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
