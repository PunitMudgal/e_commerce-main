import React from "react";

function Contact() {
  return (
    <div className="h-full bg-slate-50 font-text1 p-8 md:p-2">
      <h2 className="text-center font-text3 text-2xl font-extrabold text-rose-600">
        CONTACT US
      </h2>
      <form
       novalidate action="https://formspree.io/f/mpzgzyej"
        className="flex flex-col items-center mx-auto gap-2 bg-cyan-400 p-2 rounded-lg box-shadow w-[50%] md:w-[90%]"
        method="POST"
      >
        <label className="font-bold" htmlFor="input">
          Name:
          <input
          required
            type="text"
            placeholder="Name"
            className="p-2 rounded-md border-b-2 border-gray-800 w-full"
          />
        </label>
        <label htmlFor="email" className="font-bold">
          Email:
          <input
          required
            type="email"
            placeholder="Email Address"
            className="p-2 rounded-md border-b-2 border-gray-800 w-full"
          />
        </label>
        <textarea
          className="p-2 rounded-md border-b-2 border-gray-800 bg-white w-[60%] md:w-full"
          name="text"
          // cols="18"
          rows="10"
          placeholder="How can i help you?"
        ></textarea>
        <button
          className="text-white bg-rose-500 p-2 outline-none rounded-lg font-semibold"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Contact;
