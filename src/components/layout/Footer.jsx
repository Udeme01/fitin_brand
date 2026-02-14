import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "../ui/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/Button";
import { footerdata, socialicons } from "../../data/footerdata";
import Input from "../ui/Input";
import { Formik, Form } from "formik";
import { newsletterSchema } from "../../utils/validationSchemas";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log("Subscribed email:", values.email);
      alert(`Thank you for subscribing with ${values.email}!`);
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  //   const handleNewsletterSubmit = async (values, { setSubmitting, resetForm }) => {
  //   try {
  //     const response = await fetch('/api/newsletter', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ email: values.email })
  //     });

  //     if (response.ok) {
  //       alert(`Thank you for subscribing with ${values.email}!`);
  //       resetForm();
  //     } else {
  //       alert('Something went wrong. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Subscription error:', error);
  //     alert('Failed to subscribe. Please try again.');
  //   } finally {
  //     setSubmitting(false); // ✅ Always set to false, even on error
  //   }
  // };

  return (
    <footer className="bg-black text-white mt-12">
      <section className="w-[90%] mx-auto py-12">
        <section className="w-[90%] mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Footer Navigation - takes 2 columns on md */}
            <nav className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {footerdata.map((data) => {
                const { title, link } = data;
                return (
                  <div key={title} className="mb-6">
                    <Typography className="mb-4 text-base font-normal">
                      {title}
                    </Typography>
                    <ul className="space-y-3">
                      {link.map((item) => {
                        const { name, href } = item;
                        return (
                          <li key={name}>
                            <NavLink
                              to={href}
                              className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
                            >
                              {name}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </nav>

            {/* Email Newsletter - takes 1 column on md */}
            <div>
              <Typography className="mb-4 text-base font-normal">
                Subscribe to our emails
              </Typography>
              <Formik
                initialValues={{ email: "" }}
                validationSchema={newsletterSchema}
                onSubmit={handleNewsletterSubmit}
              >
                {(formik) => (
                  <Form className="w-full md:w-fit lg:w-full flex flex-col gap-2">
                    <Input
                      type="email"
                      placeholder="Email address"
                      id="email"
                      name="email"
                      formik={formik}
                    />

                    <Button
                      type="submit"
                      variant="solidWhite"
                      disabled={formik.isSubmitting}
                    >
                      {formik.isSubmitting ? "Subscribing..." : "Subsribe"}
                    </Button>
                  </Form>
                )}
              </Formik>

              {/* Social icons */}
              <div className="flex gap-6 mt-6">
                {socialicons.map((social) => {
                  const { name, icon, href } = social;
                  return (
                    <a
                      key={name}
                      rel="noopenner noreferrer"
                      aria-label={name}
                      target="_blank"
                      href={href}
                      className="hover:opacity-70 transition-opacity"
                    >
                      <FontAwesomeIcon icon={icon} className="text-xl" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* horizontal line */}
        <hr className="opacity-10" />

        {/* rights reserve */}
        <section className="text-center py-8 mt-10">
          <p className="text-xs text-gray-400 uppercase tracking-wider">
            &copy; {currentYear} Fitin. All rights reserved.
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
