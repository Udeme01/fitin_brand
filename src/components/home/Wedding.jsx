import React from "react";
import Typography from "../ui/Typography";
import weddingImg01 from "/images/products/wedding_dress_02.avif";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../ui/Button";

const Wedding = () => {
  return (
    <section className="text-center space-y-6 my-12 w-[80%] mx-auto">
      <Typography color='black' variant="h2">discover</Typography>
      <Typography variant="h1Bigger">wedding collection</Typography>

      <section>
        <div className="w-[300px] h-[400px] mt-8">
          <img
            src={weddingImg01}
            alt=""
            className="w-full h-full"
            
          />
        </div>
        <div className="text-left mt-6 space-y-3">
          <h3 className="uppercase text-sm tracking-widest font-extralight">
            wedding
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
          <p className="text-3xl">$850</p>
        </div>
      </section>
      <section className="flex item-center justify-center space-x-8">
        <button>
          <ChevronLeft size={16} />
        </button>
        <span className="text-xs">1/3</span>
        <button>
          <ChevronRight size={16} />
        </button>
      </section>

      <Button variant="solidBlack">view all</Button>
    </section>
  );
};

export default Wedding;
