import Header from "./components/Header";
import Hero from "./components/Hero";
import RoleSection from "./components/RoleSection";
import ProfileSection from "./components/ProfileSection";
import CompetenciesSection from "./components/CompetenciesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <RoleSection />
      <ProfileSection />
      <CompetenciesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
