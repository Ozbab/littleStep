import Image from "next/image";
import Link from "next/link";

// src/app/about/page.js
export const metadata = {
    title: "About | Little Step",
    description: "Little Step – Hakkımızda, Misyon, Vizyon.",
  };
  
  export default function AboutPage() {
    return (
      <main className="min-h-screen bg-gray-50 text-gray-900">
        <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Image
                src="/img/thumbnail.jpg"
                width={80}
                height={80}
                alt="Little Step"
                className="rounded-md"
                />
                <Link
                href="/"
                className="hover:opacity-90 transition"
                >
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight 
                                bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent cursor-pointer">
                    About Little Step
                </h1>
                </Link>
            </div>
                <p className="mt-3 md:mt-4 max-w-3xl mx-auto text-xs md:text-sm 
                                bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-semibold">
                    Little Steps, Big Happiness
                </p>
        </div>
        </section>

  
        <div className="max-w-6xl mx-auto px-4">
          {/* 3 ÖZELLİK KARTI: Hakkımızda / Misyon / Vizyon */}
          <section className="grid md:grid-cols-2 gap-6 -mt-10 md:-mt-12">
            {[
              {
                title: "Mission",
                text:
                  "To deliver safe, stylish, and high-quality children’s clothing to families through a wide range of collections and international standards of service, ensuring a fast, reliable, and enjoyable shopping experience.",
              },
              {
                title: "Vision",
                text:
                  "To become Turkey’s most reliable and preferred children’s clothing e-commerce brand, offering high-quality products to families while expanding into global markets.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-6 border border-gray-100"
              >
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="mt-2 text-gray-700">{card.text}</p>
              </div>
            ))}
          </section>
  
          {/* İSTATİSTİK ŞERİDİ */}
          <section className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { k: "Product", v: "250+" },
              { k: "Delivery", v: "2-3 days" },
              { k: "Return", v: "14 days" },
              { k: "Satisfaction", v: "%98" },
            ].map((s) => (
              <div
                key={s.k}
                className="bg-white rounded-2xl border border-gray-100 p-5 text-center shadow-sm"
              >
                <div className="text-2xl font-extrabold">{s.v}</div>
                <div className="text-sm text-gray-600 mt-1">{s.k}</div>
              </div>
            ))}
          </section>
  
          {/* METİN BLOĞU */}
          <section className="mt-12 md:mt-16 space-y-6">
            <h2 className="text-2xl font-bold">Why Little Step?</h2>
            <p className="leading-relaxed">
            Founded in 2025 in Istanbul, Little Step Kidswear is a children’s clothing brand dedicated to delivering safe, stylish, and high-quality apparel for every child. Combining creativity, comfort, and durability, we design collections that bring joy and confidence to families around the world. Our product line includes both our own original designs and licensed collections such as Disney and Barbie, crafted with the highest standards of quality and care. With a growing production capacity and a strong e-commerce infrastructure, Little Step aims to make premium children’s fashion accessible to everyone.
            </p>
          </section>
  
          {/* ZAMAN ÇİZGİSİ / SÜREÇ */}
          <section className="mt-10 md:mt-14">
            <h3 className="text-xl font-bold">How we work?</h3>
            <ol className="relative border-s border-gray-200 mt-6 space-y-8">
              {[
                { h: "Choise & Discover", p: "Filter collections by categories, add them to your favorites." },
                { h: "Pay Safely", p: "SSL certified infrastructure and different pay options." },
                { h: "Fast Delivery", p: "Shipping in 2-3 business days, easily return any that don't fit." },
              ].map((step, i) => (
                <li key={step.h} className="ms-6">
                  <span className="absolute -start-3 flex size-6 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs font-bold">
                    {i + 1}
                  </span>
                  <h4 className="font-semibold">{step.h}</h4>
                  <p className="text-gray-700">{step.p}</p>
                </li>
              ))}
            </ol>
          </section>
  
          {/* MÜŞTERİ YORUMU */}
          <section className="mt-12 md:mt-16">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="italic">
                “The fabric quality is great, the delivery was very fast. The sizes were perfect, I would definitely recommend it.”
              </p>
              <div className="mt-3 text-sm text-gray-600">— Beyza, İstanbul</div>
            </div>
          </section>
  
          {/* CTA */}
          <section className="mt-12 md:mt-16 mb-16">
            <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-r from-pink-500 to-orange-400 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h4 className="text-2xl font-extrabold">Any questions?</h4>
                <p className="opacity-90">Our support team is pleased to help you.</p>
              </div>
              <a
                href="mailto:support@littlestep.com"
                className="bg-white text-pink-600 font-semibold px-5 py-3 rounded-xl hover:opacity-90 transition text-center"
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </main>
    );
  }
  