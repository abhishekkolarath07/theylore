"use client";

const OPS = [
  "Surf",
  "Kayak",
  "Trek",
  "Cycle",
  "Yoga",
  "Aerial Fitness",
  "Martial Arts",
  "Dance",
  "Wellness",
  "Scuba",
  "Corporate Offsites",
];

export default function Marquee() {
  const pills = [...OPS, ...OPS];
  return (
    <section id="operators" className="py-[46px] border-b border-lineDark overflow-hidden">
      <div className="marquee-track flex gap-3.5 w-max">
        {pills.map((o, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 border border-lineDark rounded-full px-[18px] py-[9px] text-[0.85rem] text-mist-dark whitespace-nowrap bg-white"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-tide" />
            {o}
          </span>
        ))}
      </div>
    </section>
  );
}
