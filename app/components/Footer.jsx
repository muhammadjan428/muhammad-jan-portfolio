import Link from "next/link";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[1] mt-10 border-t border-[var(--border)] py-9">
      {/* Accent glow line */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-px w-[200px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50"
      />

      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            aria-hidden
            className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-[var(--accent)] font-[family-name:var(--font-heading)] text-[13px] font-extrabold text-[#080d14] shadow-[0_0_10px_var(--accent-glow)]"
          >
            M
          </span>
          <span className="font-[family-name:var(--font-heading)] text-[15px] font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
            Muhammad Jan
          </span>
        </Link>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div aria-hidden className="h-[3px] w-[3px] rounded-full bg-[var(--accent)] opacity-80" />

        <p className="text-center font-[family-name:var(--font-body)] text-xs leading-relaxed text-[var(--text-muted)]">
          Built with Next.js &amp; Tailwind CSS
          <span aria-hidden className="mx-2 opacity-50">·</span>
          © {year} Muhammad Jan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;