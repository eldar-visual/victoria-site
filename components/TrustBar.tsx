const STATS = [
  { value: "15+", label: "סוגי טיפולים מתקדמים" },
  { value: "100%", label: "התאמה אישית לכל לקוחה" },
  { value: "FIBERMAX", label: "טכנולוגיית לייזר דיודה" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#2B2622] text-white py-10">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="text-3xl font-bold text-[#C9A96A] mb-1">
              {s.value}
            </div>
            <div className="text-white/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
