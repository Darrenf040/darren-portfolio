import React from "react";

const ContactForm = () => {
  return (
    <form
      action=""
      className="flex flex-col gap-8 mt-5 bg-[#252525] p-8 rounded-lg"
    >
      <div className="flex gap-5">
        <div className="w-[50%]">
          <label htmlFor="email">Email</label>
          <br />
          <input id="email" type="text" />
        </div>
        <div className="w-[50%]">
          <label htmlFor="phone">Phone Number</label>
          <br />
          <input id="phone" type="text" />
        </div>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          id="description"
          name="description"
          rows="4"
          cols="50"
          placeholder="Enter your description here"
        ></textarea>
      </div>
      <button className="text-black bg-accent-color rounded-3xl">Submit</button>
    </form>
  );
};

export default ContactForm;
