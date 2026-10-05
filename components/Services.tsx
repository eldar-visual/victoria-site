import { waLink } from "./site";

type Treatment = { name: string; desc?: string; price: string; time?: string };
type Category = { title: string; note?: string; items: Treatment[] };

const CATEGORIES: Category[] = [
  {
    title: "טיפולי פנים",
    items: [
      { name: "הידרופיישל", desc: "ניקוי, פילינג ולחות לעור זוהר ורענן", price: "שאלי אותנו" },
      { name: "מזותרפיה / אנטי-אייג'ינג / RF", price: "450 ₪", time: "90 דקות" },
      { name: "פנים לעור עדין ושמן", price: "350 ₪", time: "60 דקות" },
      { name: "פנים אנטי-פיגמנטציה (אקנה)", price: "380 ₪", time: "75 דקות" },
      { name: "פנים לנוער", price: "220 ₪", time: "60 דקות" },
      { name: "פנים לגב", price: "150 ₪", time: "45 דקות" },
    ],
  },
  {
    title: "טיפולי גוף - אנדוספרס",
    note: "הפחתת צלוליט, מיצוק העור וחיטוב הגוף",
    items: [
      { name: "רגליים וישבן", price: "400 ₪" },
      { name: "בטן", price: "450 ₪" },
      { name: "מותניים", price: "260 ₪" },
      { name: "זרועות", price: "140 ₪" },
    ],
  },
  {
    title: "עיסויים",
    items: [
      { name: "רפלקסולוגיה", price: "180 ₪", time: "30 דקות" },
      { name: "עיסוי רקמות עמוק", price: "300 ₪", time: "60 דקות" },
      { name: "תאילנדי / שוודי / מתיחות", price: "300 ₪", time: "60 דקות" },
      { name: "כוסות רוח", price: "150 ₪" },
      { name: "ניקוז לימפטי", price: "350 ₪", time: "75 דקות" },
    ],
  },
  {
    title: "הסרת שיער בלייזר",
    note: "טכנולוגיית FIBERMAX דיודה - מתאים לכל סוגי העור. 6-10 טיפולים + 2 בונוס",
    items: [{ name: "ייעוץ והתאמה אישית", desc: "המחיר נקבע לפי אזור וסוג העור", price: "שאלי אותנו" }],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-[#C9A96A] font-semibold mb-3">הטיפולים שלנו</p>
          <h2 className="text-3xl md:text-4xl font-bold">מחירון</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="bg-[#FAF7F2] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-[#EFE7D9]"
            >
              <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
              {cat.note && (
                <p className="text-[#2B2622]/60 mb-6">{cat.note}</p>
              )}
              <ul className="divide-y divide-[#E8DFD3]">
                {cat.items.map((t) => (
                  <li key={t.name} className="py-4 flex items-start justify-between gap-4">
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      {t.desc && (
                        <div className="text-sm text-[#2B2622]/60 mt-1">{t.desc}</div>
                      )}
                      {t.time && (
                        <div className="text-sm text-[#C9A96A] mt-1">{t.time}</div>
                      )}
                    </div>
                    <div className="text-left shrink-0">
                      <div className="font-bold text-lg text-[#C9A96A]">{t.price}</div>
                      <a
                        href={waLink(`היי, אשמח לקבוע תור ל${t.name}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline text-[#2B2622]/60 hover:text-[#C9A96A]"
                      >
                        לקביעת תור
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
