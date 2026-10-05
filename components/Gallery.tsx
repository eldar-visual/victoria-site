import Image from "next/image";

const IMAGES = [
  { src: "/images/facial.webp", alt: "טיפול הידרופיישל", label: "טיפולי פנים" },
  { src: "/images/laser.webp", alt: "הסרת שיער בלייזר", label: "הסרת שיער בלייזר" },
  { src: "/images/massage.webp", alt: "עיסוי מרגיע", label: "עיסויים" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-[#C9A96A] font-semibold mb-3">האווירה שלנו</p>
          <h2 className="text-3xl md:text-4xl font-bold">גלריה</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {IMAGES.map((img) => (
            <figure
              key={img.src}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#2B2622]/70 to-transparent text-white p-5 font-medium">
                {img.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
