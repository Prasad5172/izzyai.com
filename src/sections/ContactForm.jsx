import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_acrifts",
        "template_o3likps",
        e.target,
        "sd3pFdkz4s40edO13"
      )
      .then(
        (result) => {
          toast.success("Message sent!.");
          setIsSubmitting(false);
          setTimeout(() => {
            e.target.reset();
          }, 5000);
        },
        (error) => {
          console.log(error);

          toast.error("Something went wrong, please try again later!.");
          setIsSubmitting(false);
          setTimeout(() => {
            e.target.reset();
          }, 5000);
        }
      );
  };
  return (
    <div className="mt-10 mx-10 md:mx-32 bg-[#CBD5E1] rounded-lg p-6">
      <form className="space-y-6" onSubmit={sendEmail}>
        <div className="md:flex md:space-x-6">
          <div className="md:w-1/2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-[#0CC8E8]"
            />
          </div>
          <div className="md:w-1/2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-[#0CC8E8]"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            autoComplete="subject"
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-[#0CC8E8]"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-[#0CC8E8]"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#0CC8E8] to-[#2DEEAA] hover:from-teal-600 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};
export default ContactForm;
