import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col text-gray-800" id="/">
      <h1 className="text-3xl md:text-6xl font-bold text-center mt-6">
        Welcome to my <span className="text-blue-500">website</span>!
      </h1>
      <div className="flex flex-col lg:flex-row md:px-10 md:mt-10 mt-0 ">
        <div className="w-full lg:w-1/2 mr-16">
          <p className="text-lg md:text-xl mt-4 hidden sm:block">
            As a passionate full-stack developer specializing in{" "}
            <span className="font-bold text-blue-500">Next.js</span> and{" "}
            <span className="font-bold text-blue-500">MongoDB</span>, I thrive
            on creating seamless user experiences. Whether it's crafting
            responsive interfaces or designing robust APIs, I love turning ideas
            into functional, elegant solutions.
          </p>
          <p className="text-lg md:text-xl mt-4 hidden sm:block">
            On this platform, you'll find a showcase of my projects, insights
            into my development journey, and a touch of creativity. Explore,
            connect, and let's build something{" "}
            <span className="font-bold text-blue-500">amazing</span> together!
          </p>
          <p className="text-lg md:text-xl mt-4 sm:hidden">
            I'm a full-stack developer with a focus on{" "}
            <span className="font-bold text-blue-500">Next.js</span> and <span className="font-bold text-blue-500"> MongoDB</span>, dedicated
            to building seamless experiences. Dive into my portfolio to see my projects and creative insights. Let's connect and craft something{" "}
            <span className="font-bold text-blue-500">amazing</span>!
          </p>
          <Link href="/#contact" className="sm:mt-9 mt-3 flex bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 w-full md:w-32 items-center sm:w-auto md:mr-4 justify-center">
              <div>Contact Me</div>
          </Link>
        </div>
        <div className="lg:w-[490px] lg:h-[49px] w-full mt-5 ">
          <Image
            src="/images/computer.jpg"
            alt="Hero Image"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
