const Footer = () => {
<<<<<<< HEAD
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid var(--border)",
        padding: "36px 0",
        marginTop: "40px",
      }}
    >
      {/* Subtle top glow line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
          opacity: 0.5,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              background: "var(--accent)",
              borderRadius: "7px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "13px",
              color: "#080d14",
              boxShadow: "0 0 10px var(--accent-glow)",
            }}
          >
            M
          </div>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: "15px",
              color: "var(--text-primary)",
            }}
          >
            Muhammad Jan
          </span>
        </div>

        {/* Divider dots */}
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: i === 1 ? "var(--accent)" : "var(--text-muted)",
                opacity: i === 1 ? 0.8 : 0.3,
              }}
            />
          ))}
        </div>

        <p
          style={{
            fontSize: "12px",
            color: "var(--text-muted)",
            fontFamily: "var(--font-body)",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Built with Next.js &amp; Tailwind CSS &nbsp;·&nbsp; © 2026 Muhammad Jan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
=======
    return (
      <footer className="bg-gray-100 border-t border-gray-300 md:mt-20 mt-5">
        <div className="container mx-auto py-4">
          <div className="flex justify-center items-center">
            <hr className="md:w-1/4 border-gray-400" />
            <p className="mx-4 text-gray-600">© 2024 Muhammad Jan</p>
            <hr className="md:w-1/4 border-gray-400" />
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
>>>>>>> 0a89b6af442d415880a0923e6bb9ac9fe037607e
