"use client";

import { useEffect, useState } from "react";

export default function SiteNav() {
  const [pastHero, setPastHero] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        const bottom = hero.getBoundingClientRect().bottom;
        setPastHero(bottom < 80);
      }
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const isLight = pastHero;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 h-[68px] flex items-center justify-between px-10 transition-all duration-400 border-b ${
        isLight
          ? "bg-paper/85 backdrop-blur-md border-lineDark"
          : scrolled
          ? "bg-ink/70 backdrop-blur-md border-lineLight"
          : "bg-transparent border-transparent"
      }`}
    >
      <a
        href="#hero"
        onClick={scrollTo("hero")}
        className={`font-display italic text-[1.3rem] transition-colors duration-400 ${
          isLight ? "text-graphite" : "text-foam"
        }`}
      >
        TheyLore
      </a>
      <div
        className={`hidden md:flex items-center gap-9 eyebrow transition-colors duration-400 ${
          isLight ? "text-mist-dark" : "text-foam/65"
        }`}
      >
        <a href="#features" onClick={scrollTo("features")} className="hover:opacity-80 transition-opacity">
          Features
        </a>
        <a href="#operators" onClick={scrollTo("operators")} className="hover:opacity-80 transition-opacity">
          Operators
        </a>
        <a href="#vision" onClick={scrollTo("vision")} className="hover:opacity-80 transition-opacity">
          Roadmap
        </a>
        <a href="#story" onClick={scrollTo("story")} className="hover:opacity-80 transition-opacity">
          About
        </a>
      </div>
      <a
        href="#final-cta"
        onClick={scrollTo("final-cta")}
        className={`inline-flex items-center gap-2 rounded-full px-[18px] py-[9px] text-[0.78rem] font-medium transition-all duration-300 hover:-translate-y-0.5 ${
          isLight ? "bg-graphite text-paper" : "bg-ember text-ink"
        }`}
      >
        Book a demo <span>→</span>
      </a>
    </nav>
  );
}
