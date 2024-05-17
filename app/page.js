"use client";
import About from "./components/About";
import ContactSection from "./components/ContactSection";
import EmailForm from "./components/EmailForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-22 mx-auto sm:px-12 px-4 py-4">
        <Hero />
        <About />
        {/* <ProjectsSection /> */}
        <div className="flex md:flex-row flex-col">
        <ContactSection />
        <EmailForm />
        </div>
      </div>
      <Footer />
    </main>
  );
}
