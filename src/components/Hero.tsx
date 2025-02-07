import React from "react";
import Navbar from "./Navbar";
<<<<<<< HEAD
import Image from "next/image";
=======
>>>>>>> ef34836686bc5087c62755541f173f2629bf3f50

const Hero = () => {
  return (
    <div id="Hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6">
      <div
        className="relative"
        style={{
          borderRadius: "100%", // Make the image circular
          width: "250px",
          height: "300px",
          overflow: "hidden",
          margin: "5%",
        }}
      >
<<<<<<< HEAD
        <Image
          data-aos="fade-right"
          src="/profile.webp"
          alt="Profile"
          width={250} // Specify width
          height={300} // Specify height
=======
        <img
          data-aos="fade-right"
          src="/profile.webp"
          alt="Profile"
>>>>>>> ef34836686bc5087c62755541f173f2629bf3f50
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-white font-semibold text-4xl md:text-[100px] text-center md:text-left">
<<<<<<< HEAD
        <div data-aos="fade-down" className="mb-2 md:mb-4">I&apos;m</div><br />
=======
        <div data-aos="fade-down" className="mb-2 md:mb-4">I'm</div><br />
>>>>>>> ef34836686bc5087c62755541f173f2629bf3f50
        <div data-aos="fade-down">Alisma</div>
      </div>

      <Navbar />
    </div>
  );
};

export default Hero;
