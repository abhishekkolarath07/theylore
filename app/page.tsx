import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Customise from "@/components/Customise";
import Features from "@/components/Features";
import WhyTabs from "@/components/WhyTabs";
import CaseStudy from "@/components/CaseStudy";
import Vision from "@/components/Vision";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <Customise />
        <Features />
        <WhyTabs />
        <CaseStudy />
        <Vision />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
