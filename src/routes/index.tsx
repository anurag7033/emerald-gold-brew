import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Leaf, Sofa, Sparkles, Users, Music, Phone, Instagram, MapPin, MessageCircle,
  Coffee, CupSoda, Facebook, Plus, ArrowUp
} from "lucide-react";
import logoAsset from "@/assets/tea-square-logo.jpg.asset.json";
import heroCafe from "@/assets/hero-cafe.jpg";
import heroCup from "@/assets/hero-cup.jpg";
import aboutCafe from "@/assets/about-cafe.jpg";
import leafBg from "@/assets/leaf-bg.jpg";
import menuMasalaTea from "@/assets/menu-masala-tea.jpg";
import menuHazelnutLatte from "@/assets/menu-hazelnut-latte.jpg";
import menuCheeseSandwich from "@/assets/menu-cheese-sandwich.jpg";
import menuChocolavaCake from "@/assets/menu-chocolava-cake.jpg";

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
  { id: "about", label: "About Us" },
  { id: "menu", label: "Menu" },
  { id: "gallery", label: "Gallery" },
  { id: "reservation", label: "Reservation" },
  { id: "contact", label: "Contact" },
];

const FEATURES = [
  { icon: Leaf, title: "Premium Tea", subtitle: "Collection" },
  { icon: Sofa, title: "Cozy", subtitle: "Ambience" },
  { icon: Sparkles, title: "Fresh &", subtitle: "Hygienic" },
  { icon: Users, title: "Friendly", subtitle: "Staff" },
  { icon: Music, title: "Free Wi-Fi", subtitle: "& Music" },
];

const MENU_ITEMS = [
  { name: "Royal Masala Tea", desc: "A perfect blend of spices and premium leaves.", price: "₹120", image: menuMasalaTea },
  { name: "Hazelnut Latte", desc: "Smooth espresso with a hint of hazelnut.", price: "₹150", image: menuHazelnutLatte },
  { name: "Cheese Garlic Sandwich", desc: "Crispy, cheesy and absolutely irresistible.", price: "₹180", image: menuCheeseSandwich },
  { name: "Chocolava Cake", desc: "Warm, gooey and heavenly dessert for you.", price: "₹150", image: menuChocolavaCake },
];

const STATS = [
  { icon: Coffee, value: "15+", label: "Signature Items" },
  { icon: Users, value: "10K+", label: "Happy Customers" },
  { icon: CupSoda, value: "35K+", label: "Cups Served" },
  { icon: MapPin, value: "1", label: "Outlet Branch" },
];

const WHY_CHOOSE = [
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
      <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[oklch(0.14_0.03_160/0.95)] backdrop-blur-xl shadow-[0_8px_30px_-15px_oklch(0_0_0/0.6)]" : "bg-transparent"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Tea Square Cafe" width={48} height={48} className="h-12 w-12 rounded-md object-cover ring-1 ring-[oklch(0.78_0.12_82/0.4)]" />
            <span className="hidden font-serif text-lg tracking-wide text-gold sm:block">Tea Square Cafe</span>
          </a>
          <ul className="hidden gap-6 text-sm lg:flex">
            {NAV.map(n => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-foreground/80 transition hover:text-gold">{n.label}</a>
              </li>
            ))}
          </ul>
          <a href="#reservation" className="hidden rounded-full bg-gold px-5 py-2 text-sm font-medium transition hover:opacity-90 lg:inline-flex">Book A Table</a>
        </div>
      </nav>

      {/* Floating Social Buttons */}
      <div className="social-float">
        <a href="https://wa.me/916307559329" target="_blank" rel="noreferrer" className="social-float-btn" aria-label="WhatsApp"><MessageCircle size={18} /></a>
        <a href="tel:6307559329" className="social-float-btn" aria-label="Phone"><Phone size={18} /></a>
        <a href="https://www.instagram.com/tea_square_cafe?utm_source=qr" target="_blank" rel="noreferrer" className="social-float-btn" aria-label="Instagram"><Instagram size={18} /></a>
      </div>

      {/* Hero */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
        <img src={heroCafe} alt="Luxury cafe interior" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.14_0.03_160/0.95),oklch(0.14_0.03_160/0.7),oklch(0.14_0.03_160/0.4))]" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 py-32 md:grid-cols-2 md:items-center">
          <div className="animate-fade-up">
            <p className="mb-4 font-serif text-2xl italic text-gold md:text-3xl">Sip. Relax. Repeat.</p>
            <h1 className="font-serif text-5xl uppercase leading-[1.1] tracking-wide md:text-7xl">
              Experience Every <br />
              <span className="text-gold">Cup Like Never</span> <br />
              Before
            </h1>
            <div className="gold-divider-left my-6" />
            <p className="mt-4 max-w-md text-base text-foreground/80 md:text-lg">
              A perfect blend of premium tea, cozy ambience and unforgettable moments.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#menu" className="rounded-md bg-gold px-7 py-3 text-sm font-medium shadow-[var(--shadow-gold)] transition hover:scale-105">Explore Menu</a>
              <a href="#reservation" className="rounded-md border border-[oklch(0.78_0.12_82/0.5)] px-7 py-3 text-sm font-medium text-gold transition hover:bg-[oklch(0.78_0.12_82/0.1)]">Reserve Table</a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative mx-auto h-[480px] w-[480px] animate-glow rounded-full">
              <img src={heroCup} alt="Golden teacup" className="absolute inset-0 h-full w-full rounded-full object-cover" />
              <span className="animate-steam absolute left-1/2 top-10 h-12 w-2 -translate-x-1/2 rounded-full bg-white/40 blur-md" />
              <span className="animate-steam absolute left-1/2 top-10 h-12 w-2 -translate-x-1/2 rounded-full bg-white/30" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bar */}
      <section className="relative z-20 -mt-20 px-6">
        <div className="mx-auto max-w-6xl glass-card grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex flex-col items-center gap-3 text-center">
              <div className="feature-icon"><f.icon size={24} strokeWidth={1.5} /></div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-foreground">{f.title}</p>
                <p className="text-xs uppercase tracking-wide text-gold">{f.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Decorative tea-leaf background wrapping post-hero content */}
      <div
        className="relative"
        style={{
          backgroundImage: `linear-gradient(oklch(0.18 0.04 160 / 0.92), oklch(0.18 0.04 160 / 0.96)), url(${leafBg})`,
          backgroundSize: "cover, 800px auto",
          backgroundRepeat: "no-repeat, repeat",
          backgroundAttachment: "scroll, fixed",
        }}
      >
        {/* About */}
        <section id="about" className="mx-auto max-w-7xl px-6 pt-32 pb-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-2xl ring-1 ring-[oklch(0.78_0.12_82/0.25)]">
              <img src={aboutCafe} alt="Tea Square Cafe interior" loading="lazy" width={800} height={600} className="h-[500px] w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Our Story</p>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">More Than A Cafe, <br /><span className="text-gold">It's An Experience</span></h2>
              <div className="gold-divider-left my-6" />
              <p className="text-foreground/80 leading-relaxed">
                At Tea Square Cafe, every cup is a celebration of flavor and connection. Whether it's a quiet morning
                or a laughter-filled evening, we are here to make it special. Premium tea meets fresh coffee,
                delicious food and a calming luxurious ambience.
              </p>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                Sip your favourite brew, relax with loved ones, and repeat the joy — that's our promise.
              </p>
              <a href="#menu" className="mt-8 inline-flex rounded-md bg-gold px-6 py-3 text-sm font-medium transition hover:scale-105">Read More About Us</a>
            </div>
          </div>
        </section>

        {/* Menu / Specialties */}
        <section id="menu" className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Specialties</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Handpicked <span className="text-gold">For You</span></h2>
            <div className="gold-divider my-6" />
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MENU_ITEMS.map((item) => (
              <div key={item.name} className="menu-card group">
                <div className="relative h-52 overflow-hidden">
                  <img src={item.image} alt={item.name} loading="lazy" width={400} height={300} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.04_160/0.8)] to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-lg text-foreground">{item.name}</h3>
                      <p className="mt-1 text-sm text-foreground/65">{item.desc}</p>
                    </div>
                    <span className="shrink-0 font-serif text-xl text-gold">{item.price}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-foreground/50">Add to order</span>
                    <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/50 text-gold transition hover:bg-gold hover:text-[var(--primary-foreground)]" aria-label={`Add ${item.name}`}><Plus size={16} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="stat-card flex items-center gap-4 p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold"><s.icon size={26} strokeWidth={1.5} /></div>
                <div>
                  <div className="font-serif text-3xl text-gold">{s.value}</div>
                  <div className="text-sm text-foreground/70">{s.label}</div>
                </div>
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
              {WHY_CHOOSE.map((f) => (
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
        <section id="reservation" className="mx-auto max-w-7xl px-6 py-20">
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
      </div>

      {/* Footer */}
      <footer className="border-t border-[oklch(0.78_0.12_82/0.2)] bg-[oklch(0.14_0.03_160)] py-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
          <div>
            <img src={logoAsset.url} alt="Tea Square Cafe" width={64} height={64} className="h-16 w-16 rounded-lg object-cover ring-1 ring-[oklch(0.78_0.12_82/0.4)]" />
            <p className="mt-4 font-serif text-lg text-gold">Tea Square Cafe</p>
            <p className="mt-2 text-sm text-foreground/70">
              Tea Square Cafe is your cozy retreat, where every sip brings comfort and every moment becomes a memory.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="https://www.facebook.com/teasquarecafe" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-[var(--primary-foreground)]" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="https://www.instagram.com/tea_square_cafe?utm_source=qr" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-[var(--primary-foreground)]" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="https://wa.me/916307559329" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-[var(--primary-foreground)]" aria-label="WhatsApp"><MessageCircle size={16} /></a>
              <a href="https://maps.app.goo.gl/MpuEtytRoV7x1Ady5?g_st=iw" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-[var(--primary-foreground)]" aria-label="Google Maps"><MapPin size={16} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map(n => <li key={n.id}><a href={`#${n.id}`} className="text-foreground/70 hover:text-gold">{n.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gold">Opening Hours</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              <li>Monday - Friday</li>
              <li className="text-foreground">10:00 AM - 11:00 PM</li>
              <li className="mt-2">Saturday - Sunday</li>
              <li className="text-foreground">09:00 AM - 12:00 AM</li>
            </ul>
            <a href="#reservation" className="mt-4 inline-flex rounded-md border border-gold/50 px-4 py-2 text-xs font-medium text-gold transition hover:bg-gold hover:text-[var(--primary-foreground)]">View Full Schedule</a>
          </div>
          <div>
            <h4 className="font-serif text-lg text-gold">Contact Us</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              <li><a href="tel:6307559329" className="hover:text-gold">+91 6307559329</a></li>
              <li><a href="mailto:teasquarecafe04@gmail.com" className="hover:text-gold">teasquarecafe04@gmail.com</a></li>
              <li className="pt-2">Find us on Google Maps</li>
            </ul>
            <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-[oklch(0.78_0.12_82/0.25)]">
              <iframe
                title="Tea Square Cafe Location"
                src="https://maps.google.com/maps?q=Tea%20Square%20Cafe&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-32 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-[oklch(0.78_0.12_82/0.15)] px-6 pt-6 text-center text-xs text-foreground/50">
          © {new Date().getFullYear()} Tea Square Cafe — All Rights Reserved. Designed with ♥ for Tea Lovers
        </div>
      </footer>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-gold text-[var(--primary-foreground)] shadow-[var(--shadow-gold)] transition hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
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
