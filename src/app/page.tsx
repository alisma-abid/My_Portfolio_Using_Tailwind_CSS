"use client";

<<<<<<< HEAD

=======
import Image from "next/image";
>>>>>>> ef34836686bc5087c62755541f173f2629bf3f50
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Home() {
  useEffect(() => { 
   AOS.init({
    easing: "ease-out-back",
    duration: 1200,
    mirror: true,
    anchorPlacement: "center-bottom",
    offset:160,
   });
   AOS.refresh(); 
  }, []);
  
  return (
    <main>
    <Hero />
    <Projects />
    <Skills />
    <Contact />
    <About />
    </main>
  );
}
