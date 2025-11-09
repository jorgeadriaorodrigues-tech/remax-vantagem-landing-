
import HeroSection from "@/components/hero-section";
import BenefitsSection from "@/components/benefits-section";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
