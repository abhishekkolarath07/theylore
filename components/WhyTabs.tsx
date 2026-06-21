"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const TABS = [
  {
    label: "How operators get paid",
    title: "No manual settlement, ever",
    line: "Razorpay Route splits every payment the instant a guest pays — your share routes straight to your account. No spreadsheets, no end-of-month reconciliation.",
    bullets: [
      "Same-day visibility on every payout",
      "Per-activity split rules, set once",
      "Full transaction history, exportable anytime",
    ],
    visual: { big: "₹48,200", small: "routed automatically this week" },
  },
  {
    label: "We're operators too",
    title: "Built alongside real sessions, not in a boardroom",
    line: "TheyLore started with Mumbai Surf Club as our founding partner — every feature gets tested against an actual dawn patrol before it ships.",
    bullets: [
      "Feedback loop with real operators, every week",
      "Features shaped by actual booking chaos",
      "No generic SaaS assumptions about your business",
    ],
    visual: { quote: "Built with the people who book the sessions." },
  },
  {
    label: "Your brand, not ours",
    title: "Every booking page is yours",
    line: "No banner taking over the page, no generic marketplace listing — your branded microsite, your story, your prices, with your own domain if you want one.",
    bullets: [
      "Custom domain support",
      "Your colors, your story, your photos",
      "Guests book with you, not a marketplace",
    ],
    visual: { big: "yourbrand.com", small: "your microsite, your domain" },
  },
];

export default function WhyTabs() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="py-24">
      <div className="max-w-[1180px] mx-auto px-10">
        <Reveal>
          <p className="eyebrow text-mist-dark">Why TheyLore</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-[clamp(1.8rem,3.6vw,2.7rem)] leading-[1.15] tracking-tight text-graphite mt-3.5 max-w-[22ch]">
            Built by people who&rsquo;ve actually run a season.
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-14 border border-lineDark rounded-[20px] overflow-hidden bg-white grid grid-cols-1 md:grid-cols-[300px_1fr]">
            <div className="border-b md:border-b-0 md:border-r border-lineDark flex md:block overflow-x-auto">
              {TABS.map((t, i) => (
                <button
                  key={t.label}
                  onClick={() => setActive(i)}
                  className={`block w-full text-left px-[22px] py-5 text-[0.92rem] border-b border-lineDark transition-all duration-200 whitespace-nowrap ${
                    active === i
                      ? "bg-paper-soft text-graphite font-semibold shadow-[inset_3px_0_0_#e8a056]"
                      : "text-mist-dark hover:text-graphite"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="p-9 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-center">
              <div>
                <h4 className="font-display text-[1.4rem] mb-2.5">{tab.title}</h4>
                <p className="text-[0.92rem] text-mist-dark leading-relaxed mb-3.5">{tab.line}</p>
                <ul className="m-0 p-0 list-none">
                  {tab.bullets.map((b) => (
                    <li key={b} className="text-[0.88rem] text-graphite mb-2">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-paper-soft rounded-[14px] p-[22px] min-h-[160px] flex flex-col justify-center">
                {tab.visual.big ? (
                  <>
                    <p
                      className={`m-0 text-graphite ${
                        tab.visual.big.includes(".com")
                          ? "font-mono text-[1rem]"
                          : "font-display text-[1.5rem]"
                      }`}
                    >
                      {tab.visual.big}
                    </p>
                    <p className="text-[0.74rem] text-mist-dark mt-1.5">{tab.visual.small}</p>
                  </>
                ) : (
                  <p className="font-display italic text-[1.1rem] m-0">{tab.visual.quote}</p>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
