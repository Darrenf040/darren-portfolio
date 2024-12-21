import ContactForm from "../Components/ContactForm";
import github from "/src/assets/icons/green-github.svg";
import linkedIn from "/src/assets/icons/linkedin.svg";
import mail from "/src/assets/icons/mail.svg";

function Contact() {
  return (
    <section
      id="contact"
      className="py-40 flex flex-col justify-center items-center"
    >
      <div className="flex gap-16 items-center">
        <h1>03 Contact Me</h1>
        <div className="flex gap-12">
          <a href="https://github.com/Darrenf040" target="_blank">
            <div className="w-[75px] h-[75px]">
              <img className="w-full" src={github} alt="Github Link" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/darren-francis-8299ab253/"
            target="_blank"
          >
            <div className="w-[75px] h-[75px]">
              <img className="w-full" src={linkedIn} alt="Linkedin Link" />
            </div>
          </a>
          <a href="mailto:darrenfr83@email.com">
            <div className="w-[75px] h-[75px]">
              <img className="w-full" src={mail} alt="Email Link" />
            </div>
          </a>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}

export default Contact;
