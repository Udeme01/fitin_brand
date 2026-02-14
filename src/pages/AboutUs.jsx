import React from "react";
import aboutimg from "/images/hero/wedding_dress_11.avif";
import aboutimg2 from "/images/hero/wedding_dress_14.avif";
import aboutimg3 from "/images/hero/wedding_dress_17.avif";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="w-[90%] mx-auto">
      <section className="flex items-center justify-center gap-4 my-3">
        <img
          src={aboutimg}
          alt="a young lady wearing a white wedding gown"
          className="w-full h-[60vh] object-cover object-top md:object-center md:h-[90vh] lg:h-[400px] lg:w-fit"
        />
        <img
          src={aboutimg2}
          alt="a young lady wearing a white wedding gown"
          className="w-full h-[60vh] object-cover object-top md:object-center md:h-[90vh] lg:h-[400px] lg:w-fit hidden lg:block"
        />
        <img
          src={aboutimg3}
          alt="a young lady wearing a white wedding gown"
          className="w-full h-[60vh] object-cover object-top md:object-center md:h-[90vh] lg:h-[400px] lg:w-fit hidden lg:block"
        />
      </section>
      <section className="flex items-center justify-center space-x-8 my-8 lg:hidden">
        <div className="cursor-pointer">
          <ChevronLeft size={16} />
        </div>
        <span className="text-xs">1/3</span>
        <div className="cursor-pointer">
          <ChevronRight size={16} />
        </div>
      </section>

      <section className="md:w-[80vh] mx-auto space-y-4 mt-20 lg:mt-24">
        <h1 className="text-4xl lg:text-5xl">About Us</h1>
        <p className="text-sm font-light text-left tracking-wider leading-7 my-10">
          Established in 2017, Knanfe Fashion is a Nigerian-based brand targeted
          at the sophisticated minimalistic goal getter who loves clean lines
          and subtle glam. We believe in the less-is-more approach of garment
          making. Our clothes have sleek, structured overtones with aesthetics
          that speak luxury.
        </p>

        <p className="text-sm font-light text-left tracking-wider leading-7 my-10">
          Born into a family that lived and breathed creativity, Nanfe Jemimah
          Oyeleke quickly discovered her flare for fashion. With a dressmaker
          mother, she began sewing clothes in secondary school. Her even deeper
          closeness to Kefas Bingab, her father, who was a fashion enthusiast,
          fanned the flame of her love for fashion. She eventually transitioned
          into fashion modeling and worked with multiple successful clients over
          the course of her career. In 2017, she decided to return to her roots
          and live out the dreams inspired by her parents.
        </p>
      </section>
      <section className="max-w-[90vh] mx-auto space-y-4 bg-gray-100 px-10 py-8 md:px-24 md:py-12 lg:px-32">
        <p className="text-sm font-light text-center tracking-wider leading-7 bg-red-">
          Every Knanfe piece is a culmination of decades of dreams, carefully
          crafted to make the wearer feel like their most confident self.
        </p>
      </section>
    </section>
  );
};

export default AboutUs;
