<<<<<<< HEAD
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contactItems = [
  {
    label: "Email",
    value: "mjan23925@gmail.com",
    href: "mailto:mjan23925@gmail.com",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    accentColor: "rgba(34, 211, 238, 0.4)",
    iconBg: "var(--accent-dim)",
    iconBorder: "rgba(34,211,238,0.2)",
    iconColor: "var(--accent)",
  },
  {
    label: "GitHub",
    value: "github.com/muhammadjan428",
    href: "https://github.com/muhammadjan428",
    icon: <FontAwesomeIcon icon={faGithub} style={{ width: 22, height: 22 }} />,
    accentColor: "rgba(34, 211, 238, 0.4)",
    iconBg: "var(--accent-dim)",
    iconBorder: "rgba(34,211,238,0.2)",
    iconColor: "var(--accent)",
  },
  {
    label: "LinkedIn",
    value: "Muhammad Jan",
    href: "https://www.linkedin.com/in/muhammad-jan-b247092a0",
    icon: <FontAwesomeIcon icon={faLinkedin} style={{ width: 22, height: 22 }} />,
    accentColor: "rgba(34, 211, 238, 0.4)",
    iconBg: "var(--accent-dim)",
    iconBorder: "rgba(34,211,238,0.2)",
    iconColor: "var(--accent)",
  },
  {
    label: "WhatsApp",
    value: "+92 348 0967184", // ← replace with your real number
    href: "https://wa.me/923480967184", // ← replace: wa.me/[country code + number, no + or spaces]
    icon: <FontAwesomeIcon icon={faWhatsapp} style={{ width: 22, height: 22 }} />,
    accentColor: "rgba(37, 211, 102, 0.4)",
    iconBg: "rgba(37, 211, 102, 0.08)",
    iconBorder: "rgba(37, 211, 102, 0.2)",
    iconColor: "#25d366",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "80px 0 40px",
        width: "100%",
      }}
    >
      {/* Subtle glow */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-80px",
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          borderRadius: "50%",
        }}
      />

      <div style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.1s forwards" }}>
        <p className="section-label">Get in touch</p>
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
          Let&apos;s Build Together
        </h2>
        <p
          style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            lineHeight: 1.8,
            color: "var(--text-muted)",
            maxWidth: "560px",
            marginBottom: "48px",
          }}
        >
          I&apos;m always open to new projects, collaborations, or just a good conversation
          about tech. Drop me a message and I&apos;ll get back to you.
        </p>
      </div>

      {/* Contact cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          maxWidth: "520px",
          width: "100%",
          opacity: 0,
          animation: "fadeUp 0.7s ease 0.25s forwards",
        }}
      >
        {contactItems.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="card"
            style={{
              padding: "18px 20px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              textDecoration: "none",
              cursor: "pointer",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = item.accentColor;
              e.currentTarget.style.background = "var(--bg-card-hover)";
              e.currentTarget.style.transform = "translateX(6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.background = "var(--bg-card)";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <div
              style={{
                width: "46px",
                height: "46px",
                minWidth: "46px",
                borderRadius: "12px",
                background: item.iconBg,
                border: `1px solid ${item.iconBorder}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: item.iconColor,
                flexShrink: 0,
              }}
            >
              {item.icon}
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-heading)",
                  marginBottom: "3px",
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-heading)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.value}
              </p>
            </div>
            <div style={{ color: "var(--text-muted)", flexShrink: 0 }}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        ))}
=======
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
>>>>>>> 0a89b6af442d415880a0923e6bb9ac9fe037607e
      </div>
    </section>
  );
};

export default ContactSection;