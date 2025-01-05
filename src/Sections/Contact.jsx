import ContactForm from "../Components/ContactForm";
import github from "/src/assets/icons/green-github.svg";
import linkedIn from "/src/assets/icons/linkedin.svg";
import mail from "/src/assets/icons/mail.svg";

function Contact() {
  return (
    <section
      id="contact"
      className="py-40 flex flex-col justify-center items-center phone:max-tablet:px-3"
    >
      <div className="flex desktop:gap-16 phone:gap-4 items-center phone:max-tablet:flex-col">
        <h1>03 Contact Me</h1>
        <div className="flex desktop:gap-12 tablet:gap-4">
          <a href="https://github.com/Darrenf040" target="_blank">
            <div className="w-[75px] h-[75px] desktop:scale-100 tablet:scale-65 phone:scale-50">
              <img
                className="w-full icon transition duration-300 hover:scale-125"
                src={github}
                alt="Github Link"
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/darren-francis-8299ab253/"
            target="_blank"
          >
            <div className="w-[75px] h-[75px] desktop:scale-100 tablet:scale-65 phone:scale-50">
              <img
                className="w-full icon transition duration-300 hover:scale-125"
                src={linkedIn}
                alt="Linkedin Link"
              />
            </div>
          </a>
          <a href="mailto:darrenfr83@email.com">
            <div className="w-[75px] h-[75px] desktop:scale-100 tablet:scale-65 phone:scale-50">
              <img
                className="w-full transition duration-300 hover:scale-125"
                src={mail}
                alt="Email Link"
              />
            </div>
          </a>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}

export default Contact;
