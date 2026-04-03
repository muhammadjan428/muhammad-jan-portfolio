<<<<<<< HEAD
const skills = [
  {
    name: "Next.js",
    icon: "▲",
    desc: "Full-stack framework",
    color: "#ffffff",
    bg: "rgba(255,255,255,0.05)",
  },
  {
    name: "React.js",
    icon: "⚛",
    desc: "UI component library",
    color: "#61dafb",
    bg: "rgba(97,218,251,0.08)",
  },
  {
    name: "Node.js",
    icon: "⬡",
    desc: "Server-side runtime",
    color: "#6cc24a",
    bg: "rgba(108,194,74,0.08)",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    desc: "NoSQL database",
    color: "#47a248",
    bg: "rgba(71,162,72,0.08)",
  },
  {
    name: "JavaScript",
    icon: "JS",
    desc: "Core language",
    color: "#f7df1e",
    bg: "rgba(247,223,30,0.08)",
  },
  {
    name: "TypeScript",
    icon: "TS",
    desc: "Typed JavaScript",
    color: "#3178c6",
    bg: "rgba(49,120,198,0.08)",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    desc: "Utility-first CSS",
    color: "#38bdf8",
    bg: "rgba(56,189,248,0.08)",
  },
  {
    name: "Clerk",
    icon: "🔐",
    desc: "Authentication",
    color: "#6c47ff",
    bg: "rgba(108,71,255,0.08)",
  },
];

const About = () => {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "80px 0",
      }}
    >
      {/* Subtle background accent */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-100px",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.04) 0%, transparent 70%)",
          pointerEvents: "none",
          borderRadius: "50%",
        }}
      />

      {/* Section header */}
      <div style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.1s forwards" }}>
        <p className="section-label">Who I am</p>
        <div className="divider" />
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(26px, 4vw, 44px)",
            fontWeight: 800,
            color: "var(--text-primary)",
            marginBottom: "16px",
          }}
        >
          About Me
        </h2>
        <p
          style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            lineHeight: 1.8,
            color: "var(--text-muted)",
            maxWidth: "620px",
            marginBottom: "60px",
          }}
        >
          I&apos;m a self-taught full-stack developer based in Pakistan, passionate about
          building real-world products. I went from zero web dev experience to shipping
          production applications — and I&apos;m just getting started.
        </p>
      </div>

      {/* Skills header */}
      <div style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.2s forwards" }}>
        <p className="section-label">What I work with</p>
        <div className="divider" />
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(22px, 3vw, 28px)",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "32px",
          }}
        >
          My Stack
        </h3>
      </div>

      {/* Skills grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "14px",
          opacity: 0,
          animation: "fadeUp 0.7s ease 0.3s forwards",
        }}
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="card skill-card"
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              animationDelay: `${0.1 * i}s`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle top-left color glow per skill */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "60px",
                height: "60px",
                background: `radial-gradient(circle, ${skill.color}12 0%, transparent 70%)`,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: skill.bg,
                border: `1px solid ${skill.color}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: 800,
                color: skill.color,
                fontFamily: "var(--font-heading)",
                flexShrink: 0,
              }}
            >
              {skill.icon}
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "var(--text-primary)",
                  marginBottom: "3px",
                }}
              >
                {skill.name}
              </p>
              <p style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.4 }}>
                {skill.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
=======
import React from 'react';

const About = () => {
  return (
    <div id='about'>
        <h1 className="md:text-4xl text-2xl font-bold md:mt-20 mt-6">About Me</h1>
        <div className="bg-gray-100 text-center py-12 md:mt-12 mt-6">
      <h2 className="text-3xl font-bold mb-4">My Skills</h2>
      <ul className="flex justify-center flex-wrap">
        <li className="m-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Next.js</li>
        <li className="m-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">React.js</li>
        <li className="m-2 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Node.js</li>
        <li className="m-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">MongoDB</li>
        <li className="m-2 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">JavaScript</li>
        <li className="m-2 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">TypeScript</li>
      </ul>
    </div>
    </div>
    
>>>>>>> 0a89b6af442d415880a0923e6bb9ac9fe037607e
  );
};

export default About;