export default function Footer() {
  return (
    <footer className="bg-ink py-14 text-mist">
      <div className="max-w-[1180px] mx-auto px-10">
        <div className="flex flex-wrap justify-between gap-8">
          <div>
            <p className="font-display italic text-[1.4rem] text-foam m-0">TheyLore</p>
            <p className="text-[0.85rem] max-w-[30ch] mt-2.5">
              Booking infrastructure for outdoor &amp; adventure operators across India.
            </p>
          </div>
          <div className="flex flex-wrap gap-16">
            <FooterCol
              title="Product"
              links={[
                ["Features", "#features"],
                ["Roadmap", "#vision"],
                ["Operators", "#operators"],
              ]}
            />
            <FooterCol
              title="Company"
              links={[
                ["About", "#story"],
                ["Contact", "#"],
                ["Careers", "#"],
              ]}
            />
            <FooterCol
              title="Connect"
              links={[
                ["Instagram", "#"],
                ["LinkedIn", "#"],
              ]}
            />
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-lineLight text-[0.78rem] text-mist-dark flex flex-wrap justify-between gap-3">
          <span>© 2026 TheyLore, a SIGMAE company.</span>
          <span>Mumbai, India</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h5 className="eyebrow text-foam/50 mb-3.5">{title}</h5>
      {links.map(([label, href]) => (
        <a key={label} href={href} className="block text-[0.86rem] text-mist hover:text-foam transition-colors mb-2.5">
          {label}
        </a>
      ))}
    </div>
  );
}
