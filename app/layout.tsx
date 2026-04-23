import { Geist } from "next/font/google";
import { getLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const htmlLang = locale === "pt" ? "pt-BR" : "en";
  return (
    <html lang={htmlLang} className="bg-background" suppressHydrationWarning>
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
