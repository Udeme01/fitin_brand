import React from "react";
import contactimg from "/images/hero/wedding_dress_15.avif";
import ContactForm from "../features/contact/component/ContactForm";

const Contact = () => {
  return (
    <section>
      <section className="relative">
        <img
          src={contactimg}
          alt="a woman wearing a white wedding gown"
          className="w-full mx-auto object-cover h-[60vh]"
        />
        <div className="bg-black/20 absolute top-0 right-0 bottom-0 left-0" />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl w-full text-center py-6">
          Contact Us
        </h1>
      </section>

      {/* contact details */}
      <section className="flex flex-col items-center justify-center leading-7 my-8 space-y-4 font-light text-sm">
        <div>
          <p>3 Bello Cresent</p>
          <p>Ilupeju, Lagos 102215</p>
          <p>Lagos, Nigeria</p>
        </div>
        <div>
          <label className="mr-2">Phone:</label>
          <a
            href="tel:+2347046780531"
            className="underline font-light tracking-wider"
          >
            +2347046780531
          </a>
        </div>
      </section>

      {/* contact input fields */}
      <ContactForm />
    </section>
  );
};

export default Contact;
