"use client";

import Reveal from "./Reveal";

const FEATURES = [
  { icon: "🗓️", title: "Operator Admin Panel", line: "One dashboard for every booking, every operator, every location." },
  { icon: "🔗", title: "Branded Microsites", line: "Your own booking page, your story, your prices, your domain." },
  { icon: "📆", title: "Booking Calendar", line: "Real-time capacity across sessions, slots and instructors." },
  { icon: "💸", title: "Split Payouts", line: "Razorpay Route settles operator and platform shares automatically." },
  { icon: "💬", title: "WhatsApp Confirmations", line: "Automated guest messages via Interakt — no manual follow-up." },
  { icon: "👥", title: "Customer CRM", line: "Every guest, every booking history, searchable in one place." },
  { icon: "💳", title: "Online Payments", line: "Cards, UPI and netbanking, all PCI-compliant out of the box." },
  { icon: "📊", title: "Finance Reporting", line: "Revenue, payouts and commission, broken down and exportable." },
  { icon: "⏳", title: "Waitlists & Capacity", line: "Auto-fill cancellations from a queue, no DMs required." },
  { icon: "📍", title: "Multi-Location Support", line: "Run Mumbai, Goa and Gokarna calendars from a single login." },
  { icon: "🧑‍🏫", title: "Staff & Instructor Roster", line: "Assign instructors to sessions, track availability at a glance." },
  { icon: "⚙️", title: "Custom Pricing Rules", line: "Early-bird, group discounts, add-ons — set once, applied always." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-paper-soft">
      <div className="max-w-[1180px] mx-auto px-10">
        <Reveal>
          <p className="eyebrow text-mist-dark">Powerful features that make the magic happen</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-[clamp(1.8rem,3.6vw,2.7rem)] leading-[1.15] tracking-tight text-graphite mt-3.5">
            Everything an operator needs. <span className="italic text-ember-dim">Nothing they don&rsquo;t.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-lineDark border border-lineDark rounded-[18px] overflow-hidden">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(((i % 4) as 0 | 1 | 2 | 3))}
              className="bg-white hover:bg-paper-soft transition-colors duration-300 p-6"
            >
              <div className="w-[38px] h-[38px] rounded-[10px] bg-tide/[0.12] flex items-center justify-center mb-3.5 text-[1.1rem]">
                {f.icon}
              </div>
              <h4 className="text-[0.95rem] font-semibold mb-1.5">{f.title}</h4>
              <p className="text-[0.82rem] text-mist-dark leading-relaxed m-0">{f.line}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
