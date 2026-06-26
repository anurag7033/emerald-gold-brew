import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/tea-square-logo.jpg.asset.json";
import heroCafe from "@/assets/hero-cafe.jpg";
import heroCup from "@/assets/hero-cup.jpg";
import aboutCafe from "@/assets/about-cafe.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tea Square Cafe — Sip • Relax • Repeat" },
      { name: "description", content: "Premium tea, fresh coffee and delicious food in a luxury ambience. Visit Tea Square Cafe." },
      { property: "og:title", content: "Tea Square Cafe" },
      { property: "og:description", content: "Premium Tea • Fresh Coffee • Delicious Food • Relaxing Ambience" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CafeOrCoffeeShop",
        name: "Tea Square Cafe",
        description: "Premium tea and coffee cafe.",
        telephone: "+91-6307559329",
        email: "teasquarecafe04@gmail.com",
        sameAs: ["https://www.instagram.com/tea_square_cafe"],
      }),
    }],
  }),
  component: Index,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "menu", label: "Menu" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

const MENU_ITEMS = [
  { name: "Tea", desc: "Aromatic blends brewed to perfection." },
  { name: "Bun Makkhan", desc: "Soft buns with creamy butter." },
  { name: "Maggi", desc: "Classic spicy masala maggi." },
  { name: "Cold Drink", desc: "Chilled refreshing beverages." },
  { name: "Patties", desc: "Crispy golden veg patties." },
  { name: "Sandwich", desc: "Toasted grilled sandwiches." },
  { name: "Cold Coffee", desc: "Creamy iced coffee delight." },
  { name: "Momos", desc: "Steamed dumplings with chutney." },
  { name: "Pani Puri", desc: "Tangy street-style favorite." },
  { name: "Spring Roll", desc: "Crunchy veg spring rolls." },
  { name: "Chilli Potato", desc: "Spicy Indo-Chinese classic." },
  { name: "Burger", desc: "Juicy stacked veg burgers." },
  { name: "Chhola Chawal", desc: "Hearty chickpeas with rice." },
  { name: "Rajma Chawal", desc: "Comfort kidney beans & rice." },
  { name: "Veg Biryani", desc: "Fragrant spiced rice." },
  { name: "Pav Bhaji", desc: "Buttery bhaji with pav." },
];

const FEATURES = [
  "Premium Tea", "Organic Ingredients", "Freshly Brewed", "Cozy Ambience",
  "Friendly Staff", "Free WiFi", "Clean Environment", "Soft Music",
];

const PARTNERS = ["Himanshu Verma", "Utkarsh Sharma", "Raghvendra Pratap Singh", "Saurabh Panday"];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      {/* Navbar */}
      <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[oklch(0.16_0.04_160/0.92)] backdrop-blur-xl shadow-[0_8px_30px_-15px_oklch(0_0_0/0.6)]" : "bg-transparent"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Tea Square Cafe" className="h-12 w-12 rounded-md object-cover ring-1 ring-[oklch(0.78_0.12_82/0.4)]" />
            <span className="hidden font-serif text-lg tracking-wide text-gold sm:block">Tea Square Cafe</span>
          </a>
          <ul className="hidden gap-8 text-sm md:flex">
            {NAV.map(n => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-foreground/80 transition hover:text-gold">{n.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="hidden rounded-full bg-gold px-5 py-2 text-sm font-medium transition hover:opacity-90 md:inline-flex">Visit Us</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
        <img src={heroCafe} alt="Luxury cafe interior" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.18_0.04_160/0.85),oklch(0.16_0.04_160/0.95))]" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 py-32 md:grid-cols-2 md:items-center">
          <div className="animate-fade-up">
            <img src={logoAsset.url} alt="Tea Square Cafe logo" className="mb-6 h-24 w-24 rounded-xl object-cover ring-1 ring-[oklch(0.78_0.12_82/0.4)]" />
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">Welcome to Tea Square Cafe</p>
            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Experience Every <br />
              <span className="bg-[var(--gradient-gold)] bg-clip-text text-transparent">Sip in Luxury</span>
            </h1>
            <p className="mt-6 max-w-lg text-base text-foreground/80 md:text-lg">
              Premium Tea • Fresh Coffee • Delicious Food • Relaxing Ambience
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#menu" className="rounded-full bg-gold px-7 py-3 text-sm font-medium shadow-[var(--shadow-gold)] transition hover:scale-105">Explore Menu</a>
              <a href="#contact" className="rounded-full border border-[oklch(0.78_0.12_82/0.5)] px-7 py-3 text-sm font-medium text-gold transition hover:bg-[oklch(0.78_0.12_82/0.1)]">Contact Us</a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative mx-auto h-[460px] w-[460px] animate-glow rounded-full">
              <img src={heroCup} alt="Golden teacup" className="absolute inset-0 h-full w-full rounded-full object-cover" />
              <span className="animate-steam absolute left-1/2 top-10 h-12 w-2 -translate-x-1/2 rounded-full bg-white/40 blur-md" />
              <span className="animate-steam absolute left-1/2 top-10 h-12 w-2 -translate-x-1/2 rounded-full bg-white/30 blur-md" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-gold/70">scroll</div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl ring-1 ring-[oklch(0.78_0.12_82/0.25)]">
            <img src={aboutCafe} alt="Tea Square Cafe interior" loading="lazy" className="h-[500px] w-full object-cover transition duration-700 hover:scale-105" />
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">About Us</p>
            <h2 className="font-serif text-4xl md:text-5xl">A Sanctuary for <span className="text-gold">Tea Lovers</span></h2>
            <div className="gold-divider my-6 mx-0" />
            <p className="text-foreground/80 leading-relaxed">
              Tea Square Cafe is more than just a cafe — it's a destination where premium tea meets fresh coffee,
              delicious food and a calming luxurious ambience. From quiet mornings to lively family gatherings,
              every corner of our space is crafted to turn ordinary moments into memorable ones.
            </p>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Sip your favourite brew, relax with loved ones, and repeat the joy — that's our promise.
            </p>
            <div className="mt-8 flex gap-6 text-sm">
              <div><div className="font-serif text-3xl text-gold">15+</div><div className="text-foreground/60">Signature Items</div></div>
              <div><div className="font-serif text-3xl text-gold">100%</div><div className="text-foreground/60">Fresh Daily</div></div>
              <div><div className="font-serif text-3xl text-gold">★★★★★</div><div className="text-foreground/60">Loved Locally</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Menu</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Crafted with <span className="text-gold">Love</span></h2>
          <div className="gold-divider my-6" />
          <p className="mx-auto max-w-xl text-foreground/70">A curated selection of our most-loved brews, bites and comfort meals.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MENU_ITEMS.map((item) => (
            <div key={item.name} className="glass-card group p-6 hover:-translate-y-1.5 hover:border-[oklch(0.78_0.12_82/0.6)] hover:shadow-[var(--shadow-gold)]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.78_0.12_82/0.12)] text-2xl ring-1 ring-[oklch(0.78_0.12_82/0.3)]">
                <span className="font-serif text-gold">{item.name.charAt(0)}</span>
              </div>
              <h3 className="font-serif text-xl text-foreground">{item.name}</h3>
              <p className="mt-2 text-sm text-foreground/65">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[oklch(0.18_0.04_160)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">A Premium <span className="text-gold">Experience</span></h2>
            <div className="gold-divider my-6" />
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f} className="glass-card flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:border-[oklch(0.78_0.12_82/0.6)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-sm">✦</div>
                <span className="font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Gallery</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Moments at <span className="text-gold">Tea Square</span></h2>
          <div className="gold-divider my-6" />
        </div>
        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {[heroCafe, heroCup, aboutCafe, heroCafe, aboutCafe, heroCup].map((src, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-xl ring-1 ring-[oklch(0.78_0.12_82/0.2)] ${i === 0 ? "row-span-2" : ""} ${i === 3 ? "col-span-2" : ""}`}>
              <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.04_160/0.7)] to-transparent opacity-60 transition group-hover:opacity-40" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[oklch(0.18_0.04_160)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Get in Touch</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Visit <span className="text-gold">Tea Square Cafe</span></h2>
            <div className="gold-divider my-6" />
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="glass-card space-y-6 p-8">
              <ContactRow label="Phone" value="6307559329" href="tel:6307559329" cta="Call" />
              <ContactRow label="Email" value="teasquarecafe04@gmail.com" href="mailto:teasquarecafe04@gmail.com" cta="Email" />
              <ContactRow label="Instagram" value="@tea_square_cafe" href="https://www.instagram.com/tea_square_cafe?utm_source=qr" cta="Follow" />
              <ContactRow label="Location" value="Find us on Google Maps" href="https://maps.app.goo.gl/MpuEtytRoV7x1Ady5?g_st=iw" cta="Directions" />
            </div>
            <div className="overflow-hidden rounded-2xl ring-1 ring-[oklch(0.78_0.12_82/0.25)]">
              <iframe
                title="Tea Square Cafe Map"
                src="https://maps.google.com/maps?q=Tea%20Square%20Cafe&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-full min-h-[400px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Partners</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">The People Behind <span className="text-gold">Tea Square</span></h2>
          <div className="gold-divider my-6" />
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNERS.map((p) => (
            <div key={p} className="glass-card p-6 text-center transition hover:-translate-y-1 hover:border-[oklch(0.78_0.12_82/0.6)]">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gold font-serif text-xl">
                {p.split(" ").map(n => n[0]).slice(0,2).join("")}
              </div>
              <p className="font-serif text-lg">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[oklch(0.78_0.12_82/0.2)] bg-[oklch(0.14_0.03_160)] py-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
          <div>
            <img src={logoAsset.url} alt="Tea Square Cafe" className="h-16 w-16 rounded-lg object-cover ring-1 ring-[oklch(0.78_0.12_82/0.4)]" />
            <p className="mt-4 font-serif text-lg text-gold">Tea Square Cafe</p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-foreground/60">Sip • Relax • Repeat</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map(n => <li key={n.id}><a href={`#${n.id}`} className="text-foreground/70 hover:text-gold">{n.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gold">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              <li><a href="tel:6307559329" className="hover:text-gold">+91 6307559329</a></li>
              <li><a href="mailto:teasquarecafe04@gmail.com" className="hover:text-gold">teasquarecafe04@gmail.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gold">Follow</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              <li><a href="https://www.instagram.com/tea_square_cafe?utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-gold">Instagram</a></li>
              <li><a href="https://maps.app.goo.gl/MpuEtytRoV7x1Ady5?g_st=iw" target="_blank" rel="noreferrer" className="hover:text-gold">Google Maps</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-[oklch(0.78_0.12_82/0.15)] px-6 pt-6 text-center text-xs text-foreground/50">
          © {new Date().getFullYear()} Tea Square Cafe — Designed with ♥ for Tea Lovers
        </div>
      </footer>
    </div>
  );
}

function ContactRow({ label, value, href, cta }: { label: string; value: string; href: string; cta: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[oklch(0.78_0.12_82/0.15)] pb-4 last:border-b-0 last:pb-0">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-gold/80">{label}</p>
        <p className="mt-1 text-base">{value}</p>
      </div>
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="rounded-full border border-[oklch(0.78_0.12_82/0.5)] px-4 py-2 text-xs font-medium text-gold transition hover:bg-gold hover:text-[var(--primary-foreground)]">
        {cta}
      </a>
    </div>
  );
}
