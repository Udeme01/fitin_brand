import React from "react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <main className="h-[85vh] bg-[url('/images/products/wedding_dress_01.avif')] text-white bg-cover bg-no-repeat bg-center relative">
      <div className="bg-black/20 absolute top-0 right-0 bottom-0 left-0" />
      <section className="absolute bottom-10 right-5 space-y-4 md:top-1/2 md:right-1/2 md:translate-x-1/2 md:translate-y-1/2 md:text-center">
        <h2 className="uppercase font-extralight tracking-widest">discover</h2>
        <h1 className="tracking-widest uppercase text-xl font-medium md:text-3xl">
          wedding collection
        </h1>
        <Button variant="solid" />
      </section>
    </main>
  );
};

export default Hero;
