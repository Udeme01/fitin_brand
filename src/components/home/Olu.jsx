import React from "react";
import oluimg from "/images/products/wedding_dress_22.avif";
import weddingImg01 from "/images/products/wedding_dress_03.avif";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Typography from "../ui/Typography";
import Button from "../ui/Button";

const Olu = () => {
  return (
    <section>
      <section
        className={`bg-[url('/images/products/wedding_dress_25.jpg')] bg-cover bg-no-repeat bg-center w-full h-[600px] md:h-[800px] my-12 relative`}
      >
        <div className="absolute bg-black/20 top-0 right-0 bottom-0 left-0" />
        <section className="absolute bottom-10 right-5 space-y-4 md:top-1/2 md:right-1/2 md:translate-x-1/2 md:translate-y-1/2 md:text-center">
          <Typography color="white" variant="h2">
            discover
          </Typography>
          <Typography variant="h1">olu collection</Typography>

          <Button variant="solidWhite">shop</Button>
        </section>
      </section>

      <section className="w-[80%] mx-auto space-y-6 text-center">
        <Typography color="black" variant="h2">
          fitin olu
        </Typography>
        <Typography variant="h1Bigger">just in</Typography>
        <section>
          <div className="w-[300px] h-[400px] mt-8">
            <img src={weddingImg01} alt="" className="w-full h-full" />
          </div>
          <div className="text-left mt-6 space-y-3">
            <h3 className="uppercase text-sm tracking-widest font-extralight">
              olu
            </h3>
            <h4 className="text-2xl font-regular">Velvet Slip Dress</h4>
            <p className="font-extralight text-sm">
              Short lace mini with long sleeves, perfect for dancing the night
              away
            </p>
            <p className="flex items-center gap-1">
              <span className="w-6 h-6 bg-black rounded-2xl block"></span>
              <span className="w-6 h-6 bg-pink-400 rounded-2xl block"></span>
            </p>
            <p className="text-3xl">$1,000</p>
          </div>
        </section>

        <section className="flex item-center justify-center space-x-8">
          <button>
            <ChevronLeft size={16} />
          </button>
          <span className="text-xs tracking-widest">1/3</span>
          <button>
            <ChevronRight size={16} />
          </button>
        </section>

        <Button variant="solidBlack">view all</Button>
      </section>
    </section>
  );
};

export default Olu;

// this component can be reusable, create it in product card...
