import React from "react";
import Button from "../ui/Button";
import Typography from "../ui/Typography";

const Hero = () => {
  return (
    <main className="h-[90vh] bg-[url('/images/products/wedding_dress_01.avif')] text-white bg-cover bg-no-repeat bg-center relative">
      <div className="bg-black/20 absolute top-0 right-0 bottom-0 left-0" />
      <section className="absolute bottom-20 right-5 space-y-4 md:top-1/2 md:right-1/2 md:translate-x-1/2 md:translate-y-1/2 md:text-center">
        <Typography variant="h2">discover</Typography>
        <Typography variant="h1">wedding collection</Typography>

        <Button variant="solidWhite">shop</Button>
      </section>
    </main>
  );
};

export default Hero;
