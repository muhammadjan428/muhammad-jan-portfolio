"use client";
import About from "./components/About";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container px-4 py-4 mx-auto mt-22 sm:px-12">
        <Hero />
        <About />
        <ProjectsSection />
        <div className="flex flex-col md:flex-row">
        <ContactSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
