"use client";

import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="py-28 text-center"
      style={{ background: "linear-gradient(180deg,#0a1714,#07120f)" }}
    >
      <div className="max-w-[1180px] mx-auto px-10">
        <Reveal>
          <p className="eyebrow text-mist">Let&rsquo;s get your time back</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-[clamp(2rem,4.6vw,3.2rem)] text-foam leading-tight m-0">
            Ready to run your next season on rails?
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="text-mist mt-4 text-[1.05rem]">
            Set up your booking page in an afternoon. Keep your weekends.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-ember text-ink px-7 py-3.5 text-[0.95rem] font-semibold transition-transform duration-300 hover:scale-[1.03]"
            >
              Book a demo
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-foam/25 text-foam px-7 py-3.5 text-[0.95rem] transition-colors duration-300 hover:border-foam/60"
            >
              Talk to a founder
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
