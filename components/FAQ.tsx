"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "כמה טיפולים צריך כדי לראות תוצאות?",
    a: "ברוב המקרים רואים שינוי כבר אחרי הטיפול הראשון. בהסרת שיער בלייזר נדרשים בדרך כלל 6-10 טיפולים (+2 בונוס) לתוצאה מיטבית.",
  },
  {
    q: "האם הלייזר מתאים לכל סוגי העור?",
    a: "כן. אנחנו עובדות עם טכנולוגיית FIBERMAX דיודה בעלת שלושה אורכי גל, המתאימה לכל סוגי העור עם ידית קירור לנוחות מקסימלית.",
  },
  {
    q: "איך קובעים תור?",
    a: "הכי פשוט - בווטסאפ או בטלפון 055-9520751. נשמח להתאים לך את הטיפול המתאים בפגישת ייעוץ.",
  },
  {
    q: "מה שעות הפעילות?",
    a: "ימים א'-ה' בין 9:45 ל-19:00.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-[#C9A96A] font-semibold mb-3">שאלות נפוצות</p>
          <h2 className="text-3xl md:text-4xl font-bold">יש לך שאלה? יש לנו תשובה</h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <div
              key={f.q}
              className="bg-white rounded-2xl border border-[#EFE7D9] overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full text-right px-6 py-5 font-semibold text-lg flex justify-between items-center"
              >
                {f.q}
                <span className="text-[#C9A96A] text-2xl">
                  {openIdx === i ? "−" : "+"}
                </span>
              </button>
              {openIdx === i && (
                <p className="px-6 pb-6 text-[#2B2622]/70 leading-relaxed">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
