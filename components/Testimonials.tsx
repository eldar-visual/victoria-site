const REVIEWS = [
  {
    name: "שרה",
    text: "הטיפולים בוויקטוריה שינו לי את העור! הצוות כל כך מקצועי ואדיב, והאווירה מרגיעה מהרגע שנכנסים.",
  },
  {
    name: "ג'ון",
    text: "ניסיתי כמה טיפולי גוף והתוצאות מדהימות. אני מרגישה בטוחה יותר והעור נראה נהדר.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-[#C9A96A] font-semibold mb-3">לקוחות מספרות</p>
          <h2 className="text-3xl md:text-4xl font-bold">המלצות</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {REVIEWS.map((r) => (
            <blockquote
              key={r.name}
              className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#EFE7D9]"
            >
              <div className="text-[#C9A96A] text-2xl mb-4">★★★★★</div>
              <p className="text-lg leading-relaxed mb-6">"{r.text}"</p>
              <footer className="font-semibold">— {r.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
