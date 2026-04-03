"use client";
import About from "./components/About";
import ContactSection from "./components/ContactSection";
<<<<<<< HEAD
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
=======
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
>>>>>>> 0a89b6af442d415880a0923e6bb9ac9fe037607e
        </div>
      </div>
      <Footer />
    </main>
  );
}
