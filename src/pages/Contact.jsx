import React from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
} from "react-icons/fi";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">

      <section className="bg-[#282d9b] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-white/80 text-sm font-medium">
              CONTACT US
            </span>

            <h1 className="text-5xl font-bold text-white mt-4">
              Get In Touch With Our Team
            </h1>

            <p className="text-white/80 mt-6 text-lg leading-8">
              Have questions about products, orders, shipping, or returns?
              Our team is here to help you with anything you need.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="w-14 h-14 rounded-xl bg-[#282d9b]/10 flex items-center justify-center">
              <FiMapPin size={24} className="text-[#282d9b]" />
            </div>

            <h3 className="font-semibold text-lg mt-5">
              Address
            </h3>

            <p className="text-gray-500 mt-2">
              123 Business Street,
              Jaipur, Rajasthan, India
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="w-14 h-14 rounded-xl bg-[#282d9b]/10 flex items-center justify-center">
              <FiPhone size={24} className="text-[#282d9b]" />
            </div>

            <h3 className="font-semibold text-lg mt-5">
              Phone
            </h3>

            <p className="text-gray-500 mt-2">
              +91 98765 43210
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="w-14 h-14 rounded-xl bg-[#282d9b]/10 flex items-center justify-center">
              <FiMail size={24} className="text-[#282d9b]" />
            </div>

            <h3 className="font-semibold text-lg mt-5">
              Email
            </h3>

            <p className="text-gray-500 mt-2">
              support@shopzone.com
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="w-14 h-14 rounded-xl bg-[#282d9b]/10 flex items-center justify-center">
              <FiClock size={24} className="text-[#282d9b]" />
            </div>

            <h3 className="font-semibold text-lg mt-5">
              Working Hours
            </h3>

            <p className="text-gray-500 mt-2">
              Mon - Sat, 9AM - 7PM
            </p>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Let's Start a Conversation
            </h2>

            <p className="text-gray-500 mt-5 leading-8">
              We're always ready to answer your questions and help
              you find the right products. Send us a message and
              we'll get back to you as soon as possible.
            </p>

            <div className="mt-8 bg-white p-6 rounded-2xl border border-gray-100">
              <h3 className="font-semibold text-xl">
                Customer Support
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                Get assistance with orders, payments, shipping,
                returns and product information.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

            <h2 className="text-3xl font-bold text-gray-900">
              Send Message
            </h2>

            <form className="mt-8 space-y-5">

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#282d9b]"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#282d9b]"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#282d9b]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#282d9b]"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:border-[#282d9b]"
              />

              <button
                type="submit"
                className="bg-[#282d9b] text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}