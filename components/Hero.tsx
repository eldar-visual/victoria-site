import Image from "next/image";
import { WHATSAPP_URL } from "./site";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt="קליניקה לאסתטיקה"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#2B2622]/70 via-[#2B2622]/40 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 py-32 w-full">
        <div className="max-w-xl text-white">
          <p className="text-[#C9A96A] font-semibold mb-4 tracking-wide">
            קליניקה לאסתטיקה • ראשון לציון
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            היופי שלך,
            <br />
            בידיים מקצועיות
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-8 font-light">
            טיפולי פנים מתקדמים, הסרת שיער בלייזר ועיסויים מרגיעים -
            מותאמים אישית בדיוק בשבילך
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C9A96A] text-white font-medium px-8 py-3.5 rounded-full hover:bg-[#b8965a] transition-colors text-lg"
            >
              קבעי תור בווטסאפ
            </a>
            <a
              href="#services"
              className="border-2 border-white/70 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-lg"
            >
              למחירון המלא
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
