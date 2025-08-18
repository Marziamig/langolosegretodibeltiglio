import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesPreview from "@/components/features-preview";
import RoomShowcase from "@/components/room-showcase";
import ServicesAmenities from "@/components/services-amenities";
import TerritoryAttractions from "@/components/territory-attractions";
import TargetAudience from "@/components/target-audience";
import BookingForm from "@/components/booking-form";
import ContactInfo from "@/components/contact-info";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <Navigation />
      <HeroSection />
      <FeaturesPreview />
      <RoomShowcase />
      <ServicesAmenities />
      <TerritoryAttractions />
      <TargetAudience />
      <BookingForm />
      <ContactInfo />
      <Footer />
    </div>
  );
}
