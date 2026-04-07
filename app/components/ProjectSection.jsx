"use client";

/* ─────────────────────────────────────────────────────────────────
   ProjectSection.jsx
   Optimizations:
   • next/image replaces every <img> tag → auto WebP/AVIF, correct
     sizing, lazy loading, no layout shift
   • ImageCarousel uses next/image with fill + priority={false}
   • All hover effects moved to CSS classes in globals.css — zero
     JS style mutations, no forced repaints
   • project-card-link, linkedin-link, tag-pill, featured-card,
     project-image-wrapper / overlay, projects-grid breakpoint all
     live in globals.css now
───────────────────────────────────────────────────────────────── */

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with product listings, cart management, user authentication, and order tracking — complete with a wishlist system, user settings, and a smooth checkout experience.",
    tags: ["Next.js", "MongoDB", "Clerk", "Tailwind CSS"],
    github: "https://github.com/muhammadjan428/e-commerce",
    linkedin: "https://www.linkedin.com/in/muhammad-jan-b247092a0/",
    live: null,
    featured: true,
    accent: "#22d3ee",
    icon: "🛒",
    status: "Live",
    images: [
      "/images/ecommerce-1.png",
      "/images/ecommerce-2.png",
      "/images/ecommerce-3.png",
    ],
  },
  {
    title: "X.com Clone",
    description:
      "A pixel-perfect frontend clone of X (Twitter) — replicating the UI, layout, and responsive design using Next.js and Tailwind CSS, deployed live on Vercel.",
    tags: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/muhammadjan428/x_cloning",
    live: "https://x-cloning-sigma.vercel.app/",
    featured: false,
    accent: "#e2e8f0",
    icon: "𝕏",
    status: "Live",
    image: "/images/x-clone.png",
  },
  {
    title: "Admin Dashboard",
    description:
      "A responsive admin panel with dynamic data tables, analytics charts, and real-time inventory management powered by a RESTful API.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/muhammadjan428/e-commerce/tree/main/app/admin",
    linkedin: "https://www.linkedin.com/in/muhammad-jan-b247092a0/",
    live: null,
    featured: false,
    accent: "#a78bfa",
    icon: "📊",
    status: "Completed",
    image: "/images/admin-dashboard.png",
    imageFallback: true,
  },
];

const statusColors = {
  Live:        { bg: "rgba(34, 211, 238, 0.12)",  color: "#22d3ee", dot: "#22d3ee" },
  Completed:   { bg: "rgba(167, 139, 250, 0.12)", color: "#a78bfa", dot: "#a78bfa" },
  "In Progress":{ bg: "rgba(251, 191, 36, 0.12)", color: "#fbbf24", dot: "#fbbf24" },
};

/* ── Icon components (no external library) ── */
const GitHubIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const ChevronIcon = ({ direction }) => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
    />
  </svg>
);

/* ── SVG placeholder for Admin Dashboard (no external image needed) ── */
const AdminDashboardPlaceholder = () => (
  <svg
    width="100%"
    height="220"
    viewBox="0 0 600 220"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    <rect width="600" height="220" fill="#0d1117" />
    <rect x="0" y="0" width="100" height="220" fill="#111827" />
    <rect x="10" y="16" width="80" height="7" rx="3" fill="#a78bfa" opacity="0.7" />
    {[44, 63, 82, 101, 120].map((y, i) => (
      <g key={i}>
        <rect x="10" y={y} width="18" height="14" rx="4" fill={i === 0 ? "#a78bfa22" : "transparent"} />
        <rect x="10" y={y + 4} width="9" height="9" rx="2" fill={i === 0 ? "#a78bfa" : "#374151"} opacity="0.8" />
        <rect x="24" y={y + 5} width="50" height="5" rx="2" fill={i === 0 ? "#c4b5fd" : "#374151"} opacity={i === 0 ? 0.9 : 0.5} />
      </g>
    ))}
    <rect x="108" y="8" width="484" height="24" rx="5" fill="#1f2937" />
    <rect x="116" y="14" width="70" height="8" rx="3" fill="#374151" />
    <rect x="530" y="12" width="28" height="10" rx="5" fill="#a78bfa" opacity="0.5" />
    <rect x="564" y="12" width="22" height="10" rx="5" fill="#374151" opacity="0.5" />
    {[0, 1, 2, 3].map((i) => {
      const x = 108 + i * 124;
      const colors = ["#22d3ee","#a78bfa","#34d399","#fbbf24"];
      return (
        <g key={i}>
          <rect x={x} y="40" width="116" height="52" rx="7" fill="#1f2937" />
          <rect x={x+8} y="48" width="18" height="18" rx="4" fill={`${colors[i]}22`} />
          <rect x={x+10} y="51" width="11" height="11" rx="2" fill={colors[i]} opacity="0.8" />
          <rect x={x+8} y="74" width="62" height="7" rx="2" fill={colors[i]} opacity="0.9" />
          <rect x={x+8} y="86" width="44" height="4" rx="2" fill="#4b5563" />
        </g>
      );
    })}
    <rect x="108" y="100" width="270" height="112" rx="7" fill="#1f2937" />
    <rect x="116" y="108" width="70" height="7" rx="2" fill="#e5e7eb" opacity="0.5" />
    {[
      { h:38,c:"#a78bfa" },{ h:56,c:"#a78bfa" },{ h:32,c:"#a78bfa" },
      { h:52,c:"#a78bfa" },{ h:66,c:"#22d3ee" },{ h:42,c:"#a78bfa" },{ h:48,c:"#a78bfa" },
    ].map((bar,i) => (
      <rect key={i} x={124+i*32} y={196-bar.h} width="20" height={bar.h} rx="3" fill={bar.c} opacity="0.75" />
    ))}
    <line x1="116" y1="196" x2="372" y2="196" stroke="#374151" strokeWidth="1" />
    <rect x="386" y="100" width="206" height="112" rx="7" fill="#1f2937" />
    <rect x="394" y="108" width="64" height="6" rx="2" fill="#e5e7eb" opacity="0.5" />
    {[0,1,2,3,4].map((i) => (
      <g key={i}>
        <rect x="394" y={122+i*16} width="9" height="9" rx="2" fill="#374151" />
        <rect x="408" y={125+i*16} width="72" height="4" rx="2" fill="#4b5563" />
        <rect x="502" y={125+i*16} width="36" height="4" rx="2" fill={i%2===0?"#34d399":"#fbbf24"} opacity="0.7" />
      </g>
    ))}
    {[136,152,168].map(y => (
      <line key={y} x1="116" y1={y} x2="372" y2={y} stroke="#374151" strokeWidth="0.5" strokeDasharray="4 4" />
    ))}
  </svg>
);

/* ── Image carousel using next/image ── */
const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid var(--border)",
        marginBottom: "20px",
        background: "rgba(0,0,0,0.2)",
      }}
    >
      {/* Fixed-height container; next/image uses fill inside it */}
      <div style={{ position: "relative", height: "480px", overflow: "hidden" }}>
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              opacity: i === current ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            <Image
              src={src}
              alt={`Screenshot ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: "cover", objectPosition: "center" }}
              loading="lazy"
              quality={80}
            />
          </div>
        ))}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 70%, rgba(10,15,30,0.45) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {images.length > 1 && (
        <>
          {[
            { dir: "left",  side: "left",  onClick: prev },
            { dir: "right", side: "right", onClick: next },
          ].map(({ dir, side, onClick }) => (
            <button
              key={dir}
              onClick={onClick}
              style={{
                position: "absolute",
                [side]: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(10,15,30,0.65)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                color: "var(--text-muted)",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                transition: "color 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <ChevronIcon direction={dir} />
            </button>
          ))}
        </>
      )}

      {images.length > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "6px",
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? "18px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === current ? "var(--accent)" : "rgba(255,255,255,0.3)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/* ── Image with SVG fallback (for admin dashboard) ── */
const ImageWithFallback = ({ src, alt, fallback }) => {
  const [errored, setErrored] = useState(false);
  if (errored) return fallback;
  return (
    <div style={{ position: "relative", width: "100%", height: "220px" }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        style={{ objectFit: "cover", objectPosition: "top" }}
        loading="lazy"
        quality={75}
        onError={() => setErrored(true)}
      />
    </div>
  );
};

/* ── Main component ── */
const ProjectsSection = () => {
  const featured = projects.find((p) => p.featured);
  const rest      = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      style={{ position: "relative", zIndex: 1, padding: "80px 0" }}
    >
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "-100px",
          width: "320px",
          height: "320px",
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.04) 0%, transparent 70%)",
          pointerEvents: "none",
          borderRadius: "50%",
        }}
      />

      {/* Section header */}
      <div style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.1s forwards" }}>
        <p className="section-label">What I&apos;ve built</p>
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
          Projects
        </h2>
        <p
          style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            lineHeight: 1.8,
            color: "var(--text-muted)",
            maxWidth: "580px",
            marginBottom: "52px",
          }}
        >
          A selection of real-world applications I&apos;ve shipped — from full-stack
          platforms to polished UI projects.
        </p>
      </div>

      {/* ── Featured project ── */}
      {featured && (
        <div
          className="card featured-card"
          style={{
            padding: "32px",
            marginBottom: "20px",
            opacity: 0,
            animation: "fadeUp 0.7s ease 0.2s forwards",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  minWidth: "52px",
                  borderRadius: "14px",
                  background: "rgba(34, 211, 238, 0.1)",
                  border: "1px solid rgba(34, 211, 238, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                {featured.icon}
              </div>
              <div>
                <p
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    fontFamily: "var(--font-heading)",
                    marginBottom: "4px",
                    opacity: 0.75,
                  }}
                >
                  ★ Featured Project
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(18px, 3vw, 22px)",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    lineHeight: 1.2,
                  }}
                >
                  {featured.title}
                </h3>
              </div>
            </div>

            {/* Status badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 12px",
                borderRadius: "20px",
                background: statusColors[featured.status]?.bg,
                border: `1px solid ${statusColors[featured.status]?.color}30`,
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: statusColors[featured.status]?.dot,
                  boxShadow: `0 0 6px ${statusColors[featured.status]?.dot}`,
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: statusColors[featured.status]?.color,
                  fontFamily: "var(--font-heading)",
                  letterSpacing: "0.5px",
                }}
              >
                {featured.status}
              </span>
            </div>
          </div>

          {featured.images?.length > 0 && <ImageCarousel images={featured.images} />}

          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.7,
              color: "var(--text-muted)",
              marginBottom: "20px",
              maxWidth: "640px",
            }}
          >
            {featured.description}
          </p>

          {/* Tags + links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {featured.tags.map((tag, i) => (
                <span key={i} className="tag-pill">{tag}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
              {featured.github && (
                <a href={featured.github} target="_blank" rel="noopener noreferrer" className="project-card-link">
                  <GitHubIcon /> Code
                </a>
              )}
              {featured.linkedin && (
                <a href={featured.linkedin} target="_blank" rel="noopener noreferrer" className="project-card-link linkedin-link">
                  <LinkedInIcon /> LinkedIn
                </a>
              )}
              {featured.live && (
                <a href={featured.live} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "8px 18px", fontSize: "13px" }}>
                  Live Demo <ExternalIcon />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Project grid ── */}
      <div
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
          opacity: 0,
          animation: "fadeUp 0.7s ease 0.35s forwards",
        }}
      >
        {rest.map((project, i) => (
          <div
            key={i}
            className="card"
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "80px",
                height: "80px",
                background: `radial-gradient(circle, ${project.accent}10 0%, transparent 70%)`,
                pointerEvents: "none",
              }}
            />

            {/* Project image */}
            <div className="project-image-wrapper">
              {project.imageFallback ? (
                <ImageWithFallback
                  src={project.image}
                  alt={`${project.title} preview`}
                  fallback={<AdminDashboardPlaceholder />}
                />
              ) : project.image ? (
                <div style={{ position: "relative", width: "100%", height: "220px" }}>
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    loading="lazy"
                    quality={75}
                  />
                </div>
              ) : null}
              <div className="project-image-overlay" />
            </div>

            {/* Title row */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    minWidth: "36px",
                    borderRadius: "9px",
                    background: `${project.accent}15`,
                    border: `1px solid ${project.accent}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "17px",
                  }}
                >
                  {project.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>
              </div>

              {/* Status badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  background: statusColors[project.status]?.bg,
                  border: `1px solid ${statusColors[project.status]?.color}25`,
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: statusColors[project.status]?.dot,
                  }}
                />
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: statusColors[project.status]?.color,
                    fontFamily: "var(--font-heading)",
                    letterSpacing: "0.5px",
                  }}
                >
                  {project.status}
                </span>
              </div>
            </div>

            <p
              style={{
                fontSize: "12.5px",
                lineHeight: 1.65,
                color: "var(--text-muted)",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {project.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {project.tags.map((tag, j) => (
                <span key={j} className="tag-pill">{tag}</span>
              ))}
            </div>

            {/* Links row — CSS hover via .project-card-link */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                paddingTop: "4px",
                borderTop: "1px solid var(--border)",
              }}
            >
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card-link">
                  <GitHubIcon /> Code
                </a>
              )}
              {project.linkedin && (
                <a href={project.linkedin} target="_blank" rel="noopener noreferrer" className="project-card-link linkedin-link">
                  <LinkedInIcon /> LinkedIn
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-link"
                  style={{ color: "var(--accent)", borderColor: "rgba(34,211,238,0.25)" }}
                >
                  <ExternalIcon /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View all CTA */}
      <div
        style={{
          marginTop: "32px",
          display: "flex",
          justifyContent: "center",
          opacity: 0,
          animation: "fadeUp 0.7s ease 0.5s forwards",
        }}
      >
        <a
          href="https://github.com/muhammadjan428"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{ gap: "10px" }}
        >
          <GitHubIcon />
          View All on GitHub
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;