import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import BookingForm from "./components/BookingForm";
import GoogleMap from "./components/GoogleMap";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />

      <Services />

      <BeforeAfter />

      <Gallery />

      <Reviews />

      <BookingForm />

      <GoogleMap />

      <Footer />

      <WhatsAppFloat />
    </main>
  );
}