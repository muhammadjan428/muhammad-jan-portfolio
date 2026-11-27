"use client";

import Image from "next/image";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/923155152772";

const projects = [
  {
    title: "Squeeze",
    subtitle: "Image Compressor & Resizer",
    description:
      "A fast web tool to compress and resize images while keeping quality high, built for faster websites and easier sharing.",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://squeeze-image-compressor-three.vercel.app/",
    icon: "🗜️",
    accent: "#22d3ee",
    status: "Live",
    image: "/images/squeeze.svg",
  },
  {
    title: "Resume Builder",
    subtitle: "Online CV Creator",
    description:
      "An interactive builder that lets users create, edit, and export a clean professional resume in minutes.",
    tags: ["Next.js", "Tailwind CSS"], // edit to match your stack
    liveUrl: "https://resume-builder-dusky-chi.vercel.app/",
    icon: "📄",
    accent: "#a78bfa",
    status: "Live",
    image: "/images/resume.svg",
  },
  {
    title: "Restaurant",
    subtitle: "Restaurant Website",
    description:
      "A responsive restaurant website with a menu, clear layout, and a modern design that works well on mobile.",
    tags: ["Next.js", "Tailwind CSS"], // edit to match your stack
    liveUrl: "https://restaurant-phi-peach.vercel.app/",
    icon: "🍽️",
    accent: "#fbbf24",
    status: "Live",
    image: "/images/restaurant.png",
  },
  {
    title: "Salon Booking",
    subtitle: "Appointment Booking System",
    description:
      "A booking platform where customers choose a service, pick a time slot, and confirm an appointment online.",
    tags: ["Next.js", "Tailwind CSS"], // edit to match your stack
    liveUrl: "https://salon-booking-ten-rust.vercel.app/",
    icon: "💇",
    accent: "#f472b6",
    status: "Live",
    image: "/images/salonbooking.png",
  },
];

const statusColors = {
  Live: { bg: "rgba(34, 211, 238, 0.12)", color: "#22d3ee" },
  Completed: { bg: "rgba(167, 139, 250, 0.12)", color: "#a78bfa" },
  "In Progress": { bg: "rgba(251, 191, 36, 0.12)", color: "#fbbf24" },
};

/* ── Icons ── */
const WhatsAppIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

/* ── Single project image, with a gradient fallback if the file is missing ── */
const ProjectImage = ({ src, title, accent }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        height: "200px",
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid var(--border)",
        background: "rgba(0,0,0,0.2)",
      }}
    >
      {failed || !src ? (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `linear-gradient(135deg, ${accent}22, rgba(10,15,30,0.6))`,
            color: "var(--text-primary)",
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "16px",
          }}
        >
          {title}
        </div>
      ) : (
        <Image
          src={src}
          alt={`${title} preview`}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: "top" }}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
};

/* ── Single project card ── */
const ProjectCard = ({ project }) => {
  const status = statusColors[project.status] || statusColors.Live;

  return (
    <div
      className="card"
      style={{
        padding: "18px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ProjectImage src={project.image} title={project.title} accent={project.accent} />

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
          <div>
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
            <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>
              {project.subtitle}
            </p>
          </div>
        </div>

        <span
          style={{
            padding: "4px 10px",
            borderRadius: "20px",
            background: status.bg,
            color: status.color,
            fontSize: "10px",
            fontWeight: 700,
            fontFamily: "var(--font-heading)",
            letterSpacing: "0.5px",
            flexShrink: 0,
          }}
        >
          {project.status}
        </span>
      </div>

      <p style={{ fontSize: "12.5px", lineHeight: 1.65, color: "var(--text-muted)" }}>
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {project.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          paddingTop: "4px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
          aria-label={`Contact on WhatsApp about ${project.title}`}
        >
          <WhatsAppIcon /> WhatsApp
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
            style={{ color: "var(--accent)", borderColor: "rgba(34,211,238,0.25)" }}
          >
            <ExternalIcon /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

/* ── Main section ── */
const ProjectsSection = () => {
  return (
    <section id="projects" style={{ position: "relative", zIndex: 1, padding: "80px 0" }}>
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
          A selection of real-world applications I&apos;ve shipped, from booking platforms to
          tools people use every day.
        </p>
      </div>

      <div
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
          opacity: 0,
          animation: "fadeUp 0.7s ease 0.2s forwards",
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;