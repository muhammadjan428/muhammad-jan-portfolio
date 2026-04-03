<<<<<<< HEAD
=======
import Image from "next/image";
>>>>>>> 0a89b6af442d415880a0923e6bb9ac9fe037607e
import Link from "next/link";

const Hero = () => {
  return (
<<<<<<< HEAD
    <section
      id="/"
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
        padding: "60px 0 40px",
      }}
    >
      {/* Glow accent */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          borderRadius: "50%",
        }}
      />

      <div style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.1s forwards" }}>
        <p className="section-label" style={{ marginBottom: "20px" }}>
          👋 Available for freelance work
        </p>
      </div>

      <div style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.2s forwards" }}>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(42px, 7vw, 88px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: "8px",
            color: "var(--text-primary)",
          }}
        >
          Full Stack
        </h1>
        <h1
          className="shimmer-text"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(42px, 7vw, 88px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: "32px",
          }}
        >
          Developer.
        </h1>
      </div>

      <div style={{ opacity: 0, animation: "fadeUp 0.8s ease 0.35s forwards", maxWidth: "580px" }}>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.75,
            color: "var(--text-muted)",
            marginBottom: "40px",
            fontFamily: "var(--font-body)",
          }}
        >
          I craft seamless digital experiences with{" "}
          <span style={{ color: "var(--accent)", fontWeight: 600 }}>Next.js</span>{" "}
          and{" "}
          <span style={{ color: "var(--accent)", fontWeight: 600 }}>MongoDB</span>.
          From responsive interfaces to robust APIs — I turn ideas into polished,
          production-ready products.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a href="#contact" className="btn-primary">
            Let's Work Together
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#projects" className="btn-outline">
            View Projects
          </a>
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          marginTop: "64px",
          flexWrap: "wrap",
          opacity: 0,
          animation: "fadeUp 0.8s ease 0.5s forwards",
        }}
      >
        {[
          { value: "5+", label: "Projects Built" },
          { value: "6+", label: "Months Building" },
          { value: "100%", label: "Self-Taught" },
        ].map((stat, i) => (
          <div key={i}>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "32px",
                fontWeight: 800,
                color: "var(--accent)",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </p>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "4px" }}>
              {stat.label}
            </p>
          </div>
        ))}
=======
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
>>>>>>> 0a89b6af442d415880a0923e6bb9ac9fe037607e
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Hero;
=======
export default Hero;
>>>>>>> 0a89b6af442d415880a0923e6bb9ac9fe037607e
