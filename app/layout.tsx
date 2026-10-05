import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ויקטוריה - קליניקה לאסתטיקה | ראשון לציון",
  description:
    "טיפולי פנים, הסרת שיער בלייזר, עיסויים וטיפולי גוף בקליניקה מקצועית בראשון לציון",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={assistant.className}>{children}</body>
    </html>
  );
}
