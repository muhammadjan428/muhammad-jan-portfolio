import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ContactSection = () => {
  return (
    <section className="flex flex-col text-gray-800 md:w-1/2 w-full mt-10" id="contact">
      <div className="flex flex-row md:px-5 md:mt-16">
        <div className="md:mr-16">
          <h2 className="text-xl md:text-2xl font-bold mt-6">Let's Connect</h2>
          <p className="text-lg md:text-xl mt-4 hidden lg:block">
            Eager to tackle new challenges, I'm a{" "}
            <span className="text-blue-500">Next.js</span> enthusiast ready to
            collaborate. Reach out for project discussions or queries—open to
            all connections. My goal is to craft seamless interfaces and
            dependable systems that elevate your projects. Together, we can
            create impactful digital experiences.
          </p>
          <p className="text-lg md:text-xl mt-4 lg:hidden">
            I'm a <span className="text-blue-500">Next.js</span> enthusiast
            eager for new challenges and collaborations. Let's elevate your
            projects with seamless interfaces and dependable systems for
            impactful digital experiences.
          </p>

          <div className="mt-6 flex">
            <a
              href="https://github.com/muhammadjan428"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" className="text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-jan-b247092a0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-0.5"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-black" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;