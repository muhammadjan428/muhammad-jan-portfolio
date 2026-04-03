import Link from "next/link";

const Hero = () => {
  return (
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
      </div>
    </section>
  );
};

export default Hero;