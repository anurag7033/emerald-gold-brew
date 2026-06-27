import { createFileRoute } from "@tanstack/react-router";
import { Index } from "../components/TeaSquareLandingPage";

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
