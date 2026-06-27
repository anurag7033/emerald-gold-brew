import { useEffect, useState } from "react";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "menu", label: "Menu" },
  { id: "contact", label: "Contact" },
];

const HIGHLIGHTS = [
  "Premium tea blends",
  "Cozy ambience",
  "Freshly brewed coffee",
  "Warm hospitality",
];

export function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.12_0.03_160)] text-[oklch(0.97_0.01_90)]">
      <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[oklch(0.14_0.03_160/0.95)] backdrop-blur" : "bg-transparent"}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-serif text-xl tracking-wide text-[oklch(0.78_0.12_82)]">
            Tea Square Cafe
          </a>
          <div className="hidden gap-6 text-sm md:flex">
            {NAV.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-[oklch(0.97_0.01_90/0.8)] transition hover:text-[oklch(0.78_0.12_82)]">
                {item.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="rounded-full border border-[oklch(0.78_0.12_82/0.5)] px-4 py-2 text-sm text-[oklch(0.78_0.12_82)] transition hover:bg-[oklch(0.78_0.12_82/0.12)]">
            Visit Us
          </a>
        </div>
      </nav>

      <main id="home" className="flex min-h-screen items-center px-6 py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <section className="space-y-6">
            <p className="font-serif text-2xl italic text-[oklch(0.78_0.12_82)]">Sip. Relax. Repeat.</p>
            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              A warm corner for tea, coffee, and slow afternoons.
            </h1>
            <p className="max-w-xl text-lg text-[oklch(0.97_0.01_90/0.8)]">
              Discover handcrafted beverages, comforting bites, and a calm ambience designed for lingering conversations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="rounded-full bg-[oklch(0.78_0.12_82)] px-6 py-3 font-medium text-[oklch(0.21_0.04_160)] transition hover:opacity-90">
                Explore Menu
              </a>
              <a href="#about" className="rounded-full border border-[oklch(0.78_0.12_82/0.45)] px-6 py-3 font-medium text-[oklch(0.78_0.12_82)] transition hover:bg-[oklch(0.78_0.12_82/0.12)]">
                Our Story
              </a>
            </div>
          </section>

          <section className="rounded-3xl border border-[oklch(0.78_0.12_82/0.25)] bg-[oklch(0.18_0.04_160/0.75)] p-8 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[oklch(0.78_0.12_82)]">Why guests love us</p>
            <ul className="mt-6 space-y-4">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-2xl border border-[oklch(0.78_0.12_82/0.16)] bg-[oklch(0.21_0.04_160/0.55)] px-4 py-3">
                  <span className="text-lg text-[oklch(0.78_0.12_82)]">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 rounded-3xl border border-[oklch(0.78_0.12_82/0.2)] bg-[oklch(0.16_0.04_160/0.9)] p-8 md:grid-cols-[0.95fr_1.05fr] md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[oklch(0.78_0.12_82)]">About us</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">More than a cafe — a place to unwind.</h2>
          </div>
          <p className="text-[oklch(0.97_0.01_90/0.8)] leading-relaxed">
            Tea Square Cafe brings together premium tea, fresh coffee, comforting food, and thoughtful service in a calm, luxurious setting. Whether you are meeting a friend or taking a pause between errands, you will feel right at home.
          </p>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-6xl px-6 py-8 pb-20">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[oklch(0.78_0.12_82)]">Signature menu</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Fresh favourites, brewed with care.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { name: "Royal Masala Tea", desc: "A rich, fragrant blend with warming spices." },
            { name: "Hazelnut Latte", desc: "Smooth espresso with a mellow, nutty finish." },
            { name: "Cheese Garlic Sandwich", desc: "Crispy, cheesy, and made for sharing." },
          ].map((item) => (
            <div key={item.name} className="rounded-2xl border border-[oklch(0.78_0.12_82/0.18)] bg-[oklch(0.16_0.04_160/0.9)] p-6">
              <h3 className="font-serif text-xl text-[oklch(0.78_0.12_82)]">{item.name}</h3>
              <p className="mt-3 text-sm text-[oklch(0.97_0.01_90/0.75)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-[oklch(0.78_0.12_82/0.2)] bg-[oklch(0.16_0.04_160/0.95)] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[oklch(0.78_0.12_82)]">Visit us</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Come sip with us at Tea Square Cafe.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-[oklch(0.97_0.01_90/0.8)]">
              <p>Phone: +91 6307559329</p>
              <p>Email: teasquarecafe04@gmail.com</p>
              <p>Instagram: @tea_square_cafe</p>
            </div>
            <a href="https://wa.me/916307559329" className="inline-flex items-center justify-center rounded-full bg-[oklch(0.78_0.12_82)] px-6 py-3 font-medium text-[oklch(0.21_0.04_160)] transition hover:opacity-90">
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
