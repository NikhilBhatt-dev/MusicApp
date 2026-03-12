import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonial from "@/components/TestimonialCards";
// import { main } from "motion/react-client"
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import UpcominWebinars from "@/components/UpcominWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";




export default function Home () {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <MusicSchoolTestimonial />
        <UpcominWebinars />
        <Instructors />
        <Contact />
        <Footer />

            </main>
        
  );
}


