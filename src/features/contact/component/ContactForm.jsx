import React from "react";
import { Formik, Form } from "formik";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import { contactSchema } from "../../../utils/validationSchemas";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      }}
      validationSchema={contactSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setTimeout(() => {
          alert("This is a test! your message has been sent.");
          setSubmitting(false);
          resetForm();
        }, 1000);
      }}
    >
      {(formik) => (
        <Form className="space-y-4 w-[90%] md:max-w-150 mx-auto">
          <Input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            formik={formik}
          />
          <Input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            formik={formik}
          />
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            formik={formik}
          />
          <Input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            formik={formik}
          />
          <Input
            as="textarea"
            type="text"
            id="message"
            name="message"
            placeholder="Message"
            formik={formik}
          />
          <Button
            type="submit"
            variant="solidBlack"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Sending..." : "Send"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
