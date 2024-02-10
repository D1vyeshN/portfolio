import About from "@/components/About/About";
import Contact from "@/components/Contacts/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
