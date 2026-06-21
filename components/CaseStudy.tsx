"use client";

import Reveal from "./Reveal";

export default function CaseStudy() {
  return (
    <section id="story" className="py-24 bg-paper-soft">
      <div className="max-w-[1180px] mx-auto px-10">
        <Reveal>
          <div className="bg-ink rounded-[24px] p-9 md:p-[52px] grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-12 items-center text-foam">
            <div>
              <span className="inline-flex items-center gap-2 border border-foam/25 rounded-full px-3.5 py-1.5 text-[0.74rem] text-foam/75 mb-4.5">
                <span className="w-1.5 h-1.5 rounded-full bg-tide inline-block" />
                Founding Partner
              </span>
              <h3 className="font-display text-[1.9rem] mb-3.5 leading-tight">Mumbai Surf Club</h3>
              <p className="text-mist text-[0.98rem] leading-relaxed mb-5">
                TheyLore&rsquo;s first operator partner — dawn surf sessions,
                board hire and beginner courses, run entirely through one
                booking link.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <Stat val="1" label="link for every session" />
                <Stat val="0" label="spreadsheets in use" />
                <Stat val="100%" label="payments routed automatically" />
              </div>
            </div>

            <div className="bg-foam/[0.04] border border-foam/10 rounded-2xl p-6">
              <p className="eyebrow text-mist mb-3.5">operator.theylore.app/mumbaisurf</p>
              <div className="grid grid-cols-7 gap-1.5">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <span key={i} className="font-mono text-[0.6rem] text-foam/50 text-center">
                    {d}
                  </span>
                ))}
                {[
                  "bg-foam/[0.06]",
                  "bg-tide/25",
                  "bg-foam/[0.06]",
                  "bg-tide/25",
                  "bg-ember/25",
                  "bg-tide/25",
                  "bg-ember/25",
                ].map((cls, i) => (
                  <div key={i} className={`h-[30px] rounded-[5px] ${cls}`} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ val, label }: { val: string; label: string }) {
  return (
    <div>
      <p className="font-display text-[1.7rem] text-ember m-0">{val}</p>
      <p className="text-[0.72rem] text-mist mt-0.5">{label}</p>
    </div>
  );
}
