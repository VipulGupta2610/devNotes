import { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const faqData = [
  {
    question: "How to download notes?",
    answer: "Go to your desired subject → Select chapter → Click 'Download'.",
  },
  {
    question: "How to view notes online?",
    answer: "Click on the 'View' button next to the chapter you want to read.",
  },
  {
    question: "How can I upload or contribute notes?",
    answer: "You must be an approved contributor or admin. Contact us to join.",
  },
//   {
//     question: "I forgot my password. What should I do?",
//     answer: "Click 'Forgot Password' on the login page and follow the steps.",
//   },
//   {
//     question: "How to change my account details?",
//     answer: "Go to Profile → Settings → Edit your info and click Save.",
//   },
];

export default function SupportPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [openIndex, setOpenIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Support request submitted successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    
    <div className="bg-white min-h-screen py-10 px-4  dark:bg-slate-900 dark:text-black">
        <Toaster/>
      <div className="max-w-4xl mx-auto mt-20">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-3">
          How can we help you?
        </h1>
        <p className="text-center text-gray-600 mb-8 dark:text-gray-300">
          Find answers to your questions, report issues, or get in touch with us.
        </p>

        {/* Search
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search help topics..."
            className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div> */}

        {/* FAQ */}
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3 mb-10">
          {faqData.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleAccordion(index)}
              className="bg-white border-l-4 border-indigo-500 rounded-lg p-4 shadow-sm cursor-pointer hover:bg-indigo-50 transition"
            >
              <p className="font-semibold text-gray-800">{item.question}</p>
              {openIndex === index && (
                <p className="text-gray-600 mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
          Contact Support
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Describe your issue..."
            required
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md transition"
          >
            Submit
          </button>
        </form>

        {/* Email Info */}
        <div className="mt-10 text-center text-sm text-gray-600">
          Or email us at{" "}
          <a
            href="mailto:support@yoursite.com"
            className="text-indigo-600 underline"
          >
            developerxofficial@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}