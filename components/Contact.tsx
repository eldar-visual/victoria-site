import { WHATSAPP_URL, PHONE_DISPLAY, ADDRESS, HOURS, waLink } from "./site";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#2B2622] text-white">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <p className="text-[#C9A96A] font-semibold mb-3">צור קשר</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          מוכנה להתחיל? נשמח לשמוע ממך
        </h2>
        <p className="text-white/70 text-lg mb-10">
          {ADDRESS} • {HOURS}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={waLink("היי, אשמח לקבוע תור לייעוץ")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A96A] text-white font-medium px-10 py-4 rounded-full hover:bg-[#b8965a] transition-colors text-lg"
          >
            קביעת תור בווטסאפ
          </a>
          <a
            href="tel:+972559520751"
            className="border-2 border-white/40 font-medium px-10 py-4 rounded-full hover:bg-white/10 transition-colors text-lg"
            dir="ltr"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
