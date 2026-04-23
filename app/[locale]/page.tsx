import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
    </main>
  );
}
