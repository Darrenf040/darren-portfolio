import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FadeLoader } from "react-spinners";

const ContactForm = () => {
  const form = useRef(null);
  const nameRef = useRef(null);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess(false);
    setIsError(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_KEY,
        }
      )
      .then(
        () => {
          setName(nameRef.current.value);
          setSuccess(true);
          form.current.reset();
          setIsLoading(false);
        },
        (error) => {
          setIsError(true);
          setIsLoading(false);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-8 justify-between mt-5 bg-[#252525] p-8 desktop:h-[550px] rounded-lg desktop:text-3xl tablet:text-2xl phone:text-base"
    >
      <div className="flex gap-5">
        <div className="w-[50%]">
          <label>Name</label>
          <br />
          <input
            ref={nameRef}
            type="text"
            name="user_name"
            defaultValue={""}
            required
          />
        </div>
        <div className="w-[50%]">
          <label>Email</label>
          <br />
          <input type="email" name="user_email" defaultValue={""} required />
        </div>
      </div>
      <div>
        <label>Message</label>
        <textarea
          name="message"
          id="description"
          rows="4"
          cols="50"
          placeholder="Enter your description here"
          defaultValue={""}
          required
        />{" "}
      </div>

      <button
        type="submit"
        className="text-primary-color bg-accent-color rounded-3xl hover:bg-primary-color hover:text-accent-color transition-colors duration-300"
      >
        Submit
      </button>
      <div className="flex justify-center">
        <FadeLoader color="#d1ff48" loading={isLoading} />
        {success ? (
          <p className="text-accent-color">{`Thanks ${name}, Message Sent Sucessfully`}</p>
        ) : (
          ""
        )}
        {isError ? (
          <p className="text-accent-color">Error Sending Message</p>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default ContactForm;
