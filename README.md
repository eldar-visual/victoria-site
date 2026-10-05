# Victoria Aesthetic Clinic — Demo Landing Page

דמו לדף נחיתה בעברית (RTL) לקליניקה לאסתטיקה, בנוי ב-Next.js App Router + Tailwind.

## מבנה
```
app/
  layout.tsx      # RTL + פונט Assistant מ-next/font
  page.tsx        # הרכבת כל הסקשנים
  globals.css     # Tailwind + smooth scroll
components/
  site.ts         # מספרי טלפון, כתובת, לינק ווטסאפ
  Navbar.tsx      # ניווט דביק + תפריט מובייל
  Hero.tsx        # מסך פתיחה עם תמונה
  TrustBar.tsx    # פס נתונים
  About.tsx
  Services.tsx    # מחירון מלא
  Gallery.tsx
  Testimonials.tsx
  FAQ.tsx         # אקורדיון
  Contact.tsx
  Footer.tsx
  WhatsAppFloat.tsx  # כפתור ווטסאפ צף
public/images/    # 4 תמונות webp
```

## הרצה
```bash
npx create-next-app@latest victoria-demo --typescript --tailwind --app
# העתק את app/, components/, public/ לתוך הפרויקט
npm run dev
```

## התאמה ללקוח אמיתי
כל הפרטים העסקיים (טלפון, כתובת, שעות) מרוכזים ב-`components/site.ts` -
מחליפים שם פעם אחת והכל מתעדכן.
