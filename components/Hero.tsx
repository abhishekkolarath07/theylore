"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-[150px] overflow-visible"
      style={{ background: "linear-gradient(180deg,#07120f 0%,#0a1714 55%,#0d1a16 100%)" }}
    >
      <div
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,160,86,0.16), transparent 70%)" }}
        aria-hidden="true"
      />
      <svg
        className="absolute inset-0 w-full h-[600px] opacity-50 pointer-events-none"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 120} y1="0" x2={i * 120} y2="600" stroke="#f4efe3" strokeOpacity="0.04" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 90} x2="1440" y2={i * 90} stroke="#f4efe3" strokeOpacity="0.04" />
        ))}
      </svg>

      <div className="relative z-10 max-w-[840px] mx-auto px-10 text-center">
        <Reveal>
          <p className="eyebrow text-mist">Booking infrastructure for outdoor &amp; adventure operators</p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="font-display text-[clamp(2.3rem,5.4vw,4.1rem)] leading-[1.08] tracking-tight text-foam mt-[22px]">
            Run the session.
            <br />
            Let TheyLore run the admin.
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-5 text-[1.1rem] text-mist max-w-[50ch] mx-auto">
            One dashboard for bookings, split payouts and customer messages —
            built for surf schools, trek leads, kayak outfits and every
            operator in between.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#final-cta"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-ember text-ink px-7 py-3.5 text-[0.95rem] font-semibold transition-transform duration-300 hover:scale-[1.03]"
            >
              Get your time back
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full border border-foam/25 text-foam px-7 py-3.5 text-[0.95rem] transition-colors duration-300 hover:border-foam/60"
            >
              See the platform
            </a>
          </div>
        </Reveal>
        <Reveal delay={4}>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {["Zero setup fees", "Razorpay-native split payouts", "WhatsApp confirmations included"].map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full border border-foam/10 text-foam/80 px-3.5 py-1.5 text-[0.78rem]"
              >
                <span className="w-1 h-1 rounded-full bg-tide" />
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <DashboardStage />
    </section>
  );
}

function DashboardStage() {
  return (
    <Reveal delay={4} className="relative max-w-[1100px] mx-auto px-10 mt-16 h-[380px] max-md:h-[760px] z-[3]">
      {/* Calendar card */}
      <div className="float-a absolute top-0 left-0 w-[300px] max-md:static max-md:mx-auto bg-[#fffdf8] rounded-[14px] border border-graphite/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45),0_8px_24px_-8px_rgba(0,0,0,0.3)] overflow-hidden">
        <MockChrome url="operator.theylore.app/week" />
        <div className="p-4">
          <p className="text-[0.8rem] font-semibold m-0 text-graphite">This week</p>
          <div className="grid grid-cols-7 gap-[5px] mt-1.5">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={i} className="font-mono text-[0.6rem] text-mist-dark text-center">
                {d}
              </span>
            ))}
            {[false, true, false, true, true, true, true].map((has, i) => (
              <div
                key={i}
                className={`h-[30px] rounded-[5px] relative ${has ? "bg-tide/[0.18]" : "bg-paper-soft"}`}
              >
                {has && (
                  <span className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-tide-dim" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-3 text-[0.74rem] text-mist-dark flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-tide inline-block" />
            Dawn Surf · 6 spots left
          </p>
        </div>
      </div>

      {/* Payouts card (largest, center) */}
      <div className="float-b absolute top-[50px] left-1/2 -translate-x-1/2 max-md:static max-md:translate-x-0 max-md:mx-auto max-md:my-6 w-[340px] z-[2] bg-[#fffdf8] rounded-[14px] border border-graphite/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45),0_8px_24px_-8px_rgba(0,0,0,0.3)] overflow-hidden">
        <MockChrome url="operator.theylore.app/payouts" />
        <div className="p-4">
          <p className="font-display text-[1.9rem] text-graphite m-0">₹48,200</p>
          <p className="text-[0.74rem] text-mist-dark mt-0.5">Routed this week via Razorpay Route</p>
          <BarRow />
          <div className="flex justify-between font-mono text-[0.68rem] text-mist-dark border-t border-lineDark pt-2.5 mt-1">
            <span>Operator 92%</span>
            <span>Platform 8%</span>
          </div>
        </div>
      </div>

      {/* Bookings card */}
      <div className="float-c absolute top-[30px] right-0 max-md:static max-md:mx-auto w-[290px] bg-[#fffdf8] rounded-[14px] border border-graphite/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45),0_8px_24px_-8px_rgba(0,0,0,0.3)] overflow-hidden">
        <MockChrome url="operator.theylore.app/bookings" />
        <div className="p-4">
          <p className="text-[0.8rem] font-semibold m-0 text-graphite">Bookings</p>
          <div className="flex mt-2.5">
            {[
              ["R", "#3fa39a"],
              ["A", "#e8a056"],
              ["K", "#7a4a1f"],
              ["S", "#2b6f69"],
              ["M", "#b97b3d"],
            ].map(([letter, color], i) => (
              <span
                key={i}
                className="w-[26px] h-[26px] rounded-full border-2 border-[#fffdf8] -ml-2 first:ml-0 flex items-center justify-center font-mono text-[0.6rem] text-white"
                style={{ background: color }}
              >
                {letter}
              </span>
            ))}
          </div>
          <p className="mt-2.5 text-[0.78rem] text-mist-dark">+12 new today</p>
          <p className="flex items-center gap-2 mt-3.5 text-[0.78rem] text-graphite">
            <span className="text-tide-dim text-[0.85rem]">✓</span>Confirmation sent — WhatsApp
          </p>
          <p className="flex items-center gap-2 mt-1 text-[0.78rem] text-graphite">
            <span className="text-tide-dim text-[0.85rem]">✓</span>Confirmation sent — WhatsApp
          </p>
        </div>
      </div>
    </Reveal>
  );
}

function MockChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-2.5 bg-paper-soft border-b border-graphite/10">
      <span className="w-[7px] h-[7px] rounded-full" style={{ background: "#e8a056" }} />
      <span className="w-[7px] h-[7px] rounded-full" style={{ background: "#3fa39a" }} />
      <span className="w-[7px] h-[7px] rounded-full" style={{ background: "#8b9a93" }} />
      <span className="ml-2 font-mono text-[0.62rem] text-mist-dark">{url}</span>
    </div>
  );
}

function BarRow() {
  return (
    <div className="flex items-end gap-1.5 h-[54px] my-4">
      {[38, 52, 44, 70, 60].map((h, i) => (
        <Bar key={i} height={h} />
      ))}
    </div>
  );
}

function Bar({ height }: { height: number }) {
  return (
    <div
      className="flex-1 rounded-t-[3px]"
      style={{
        background: "linear-gradient(180deg,#e8a056,#b97b3d)",
      }}
    >
      <BarAnimator height={height} />
    </div>
  );
}

function BarAnimator({ height }: { height: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const id = requestAnimationFrame(() => {
      el.style.height = `${height}px`;
    });
    return () => cancelAnimationFrame(id);
  }, [height]);

  return (
    <div
      ref={ref}
      className="w-full h-0 transition-[height] duration-[1000ms] ease-out"
    />
  );
}
