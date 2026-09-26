"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Layout } from "@/components/layouts/layout";
import { ProjectPreview } from "@/components/project-preview";
import { butterScrollTo } from "@/lib/butter-scroll";

const CAPABILITY_ROWS = [
  {
    label: "Healthcare",
    title: "Healthcare Technologies ",
    body: "Health care systems, EMR, CRM workflows, and agentic AI support for operational teams.",
  },

  {
    label: "Public sector",
    title: "GovTech systems",
    body: "Profiling and ordinance tracking modules for local process automation, reporting, and information workflows.",
  },
  {
    label: "Teaching",
    title: "Faculty + mentorship",
    body: "Lectures and mentorship across Java, Python, SQL, and machine-learning-aligned software projects.",
  },
];

const PROFILE_FACTS = [
  { value: "3+", label: "Years shipping web apps" },
  { value: "2026", label: "Backend developer at ConsentMD" },
  { value: "Davao", label: "Philippines-based, remote-ready" },
];

const STACK_GROUPS = [
  {
    title: "Backend",
    kicker: "APIs / services",
    body: "Laravel, FastAPI, NestJS, Node.js, Python, C#, TypeScript",
  },
  {
    title: "Product UI",
    kicker: "Interfaces",
    body: "React, Next.js, progressive web app workflows, responsive systems",
  },
  {
    title: "Infrastructure",
    kicker: "Ship path",
    body: "PostgreSQL, Redis, Docker, NGINX, Cloudflare, AWS, Google Cloud Platform, Vercel",
  },
];

const CERTIFICATIONS = [
  {
    title: "IT Specialist - HTML & CSS",
    issuerYear: "Pearson, 2023",
    href: "https://www.credly.com/badges/ade3017d-63bb-4a66-a6fa-854446e2cbf4/public_url",
    embedHref:
      "https://www.credly.com/embedded_badge/ade3017d-63bb-4a66-a6fa-854446e2cbf4",
  },
  {
    title: "IT Specialist - Databases",
    issuerYear: "Pearson, 2023",
    href: "https://www.credly.com/badges/cd4018f7-bc4d-4601-9529-021ad5c6b964/public_url",
    embedHref:
      "https://www.credly.com/embedded_badge/cd4018f7-bc4d-4601-9529-021ad5c6b964",
  },
];

const PROJECTS = [
  {
    title: "ConsentMD Plus",
    org: "ConsentMD",
    period: "2026-Present",
    blurb:
      "ConsentMD Plus is a web platform for HHA and to run ICD10, Scribe, Forms and other healthcare systems.",
    stack: [
      "NestJS",
      "Laravel",
      "Vertex",
      "Next.js",
      "NeonDB",
      "Google Cloud Platform",
      "Compute Engine",
      "Vercel",
      "NGINX",
      "Docker",
    ],
    links: [
      {
        href: "https://plus.consentmd.ai",
        label: "Open site",
      },
    ],
  },

  {
    title: "ConsentMD EMR",
    org: "ConsentMD",
    period: "2026-Present",
    blurb:
      "Electronic Medical Records (EMR) platform for health care providers.",
    stack: [
      "NestJS",
      "Next.js",
      "NeonDB",
      "Google Cloud Platform",
      "Compute Engine",
      "Vercel",
      "NGINX",
      "Docker",
    ],
    links: [
      {
        href: "https://consentmd-emr-web.vercel.app/login",
        label: "Open site",
      },
    ],
  },
  {
    title: "ConsentMD PulseCRM",
    org: "ConsentMD",
    period: "2026-Present",
    blurb:
      "Relationship management and CRM platform for health care providers.",
    stack: [
      "NestJS",
      "Next.js",
      "NeonDB",
      "Google Cloud Platform",
      "Compute Engine",
      "Vercel",
      "NGINX",
      "Docker",
    ],
    links: [{ href: "https://pulsecrm.consentmd.ai", label: "Open site" }],
  },
  {
    title: "Lantaw",
    org: "Personal",
    period: "2025",
    blurb:
      "Movie streaming platform with responsive playback and cloud-first deployment.",
    stack: ["NestJS", "Redis", "Next.js", "Docker", "Cloudflare"],
    links: [{ href: "https://lantaw.wbert.xyz", label: "Open site" }],
  },
  {
    title: "Northpoint Signing App and Archiving",
    org: "Northpoint",
    period: "2026-2026",
    blurb:
      "Northpoint Signing App and Archiving is a document management and routing system for Northpoint. Where stremlines document submission, signing, and archiving.",
    stack: [
      "Hono.js",
      "Next.js",
      "Supabase",
      "AWS lambda",
      "AWS EventBridge",
      "AWS SQS",
      "Vercel",
      "Cloudinary",
    ],
    links: [
      {
        href: "https://signing-app-web.vercel.app",
        label: "Open site",
      },
    ],
  },
  {
    title: "Seafarers Accountants",
    org: "Binks Overseas",
    period: "2026-2026",
    blurb:
      "It is a landing page for the Seafarers Accountants, a small business that provides accounting services to the local community.",
    stack: ["HTML", "CSS", "Elementor", "WordPress", "Hostinger"],
    links: [
      {
        href: "https://seafarersaccountants.co.uk",
        label: "Open site",
      },
    ],
  },

  {
    title: "Digi-Sign",
    org: "Personal",
    period: "2025",
    blurb:
      "Digital signature workflow that embeds cryptographic metadata into generated PDFs.",
    stack: ["FastAPI", "React", "PWA", "Docker", "Cron", "NGINX"],
    links: [],
  },
  {
    title: "Vinta System",
    org: "Vinta Yearbook",
    period: "2024",
    blurb:
      "Workflow platform for yearbook collection, schedule orchestration, and logistics.",
    stack: ["Laravel", "React", "PostgreSQL", "Docker"],
    links: [],
  },
  {
    title: "Records Archiving + Signing",
    org: "Infosoft Studio",
    period: "2024-2025",
    blurb:
      "Archival generation and signing flow with measurable latency reduction.",
    stack: ["Laravel", "C#", "Python", "PostgreSQL"],
    links: [],
  },
  {
    title: "Barangay Profiling + Tracking",
    org: "Infosoft Studio",
    period: "2024",
    blurb:
      "Government-facing data modules for faster reporting and ordinance monitoring.",
    stack: ["Laravel", "PostgreSQL", "Docker"],
    links: [],
  },
  {
    title: "Yearbook Automation",
    org: "Vinta Yearbook",
    period: "2022-2024",
    blurb:
      "Data cleanup and naming pipelines that reduced manual steps and errors.",
    stack: ["Laravel", "React", "Python", "Firebase"],
    links: [{ href: "https://yearbook.vintasystem.com", label: "Open site" }],
  },
];

function toSection(hash: string) {
  return (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    butterScrollTo(hash, { offset: 88 });
    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", hash);
    }
  };
}

export default function Home() {
  return (
    <Layout>
      <div className="portfolio-page">
        <section id="home" className="portfolio-hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="mono-label">Full-stack systems / Davao City</p>
              <h1 className="hero-title">Systems that survive handoff.</h1>
              <p className="hero-lede">
                I build practical products, automate operational work, and teach
                software teams how to move from theory to production-ready code.
              </p>

              <div className="hero-actions">
                <a
                  href="#projects"
                  onClick={toSection("#projects")}
                  className="action-link action-link--primary"
                >
                  View work
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <Link
                  href="mailto:wilbertjoshalfornon@gmail.com"
                  className="action-link action-link--secondary"
                >
                  Email Wilbert
                </Link>
              </div>

              <div className="hero-links" aria-label="Profile links">
                <Link
                  href="https://github.com/wbert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-link action-link--ghost"
                >
                  <Github aria-hidden="true" className="h-4 w-4" />
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com/in/wbert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-link action-link--ghost"
                >
                  <Linkedin aria-hidden="true" className="h-4 w-4" />
                  LinkedIn
                </Link>
              </div>
            </div>

            <aside className="hero-console" aria-label="Profile facts">
              <div className="console-grid">
                <div className="console-row">
                  <span className="console-label">Role</span>
                  <strong>Backend Developer / DevOps Engineer</strong>
                </div>
                <div className="console-row">
                  <span className="console-label">Current</span>
                  <strong>ConsentMD / 2026-Present</strong>
                </div>
                <div className="console-row">
                  <span className="console-label">Work mode</span>
                  <strong>Systems, automation, teaching</strong>
                </div>
              </div>
              <pre className="console-pre">
                <span className="accent">$</span>
                {
                  " build --scope operations\ngovtech/profiling\nhealthcare/crm\nyearbook/logistics\nteaching/java-python-sql"
                }
              </pre>
            </aside>
          </div>
        </section>

        <section id="about" className="section-block">
          <div className="section-intro">
            <h2 className="section-title">What I build around</h2>
            <p className="section-copy">
              The through-line is operational software: tools that organize
              records, reduce repeat work, support local teams, and stay
              maintainable after launch.
            </p>
          </div>

          <div className="capability-list">
            {CAPABILITY_ROWS.map((item) => (
              <article key={item.title} className="capability-row">
                <p className="project-meta">{item.label}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <span aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="profile-strip" aria-label="Profile summary">
          {PROFILE_FACTS.map((fact) => (
            <div key={fact.label} className="profile-strip__item">
              <span className="profile-strip__value">{fact.value}</span>
              <span className="profile-strip__label">{fact.label}</span>
            </div>
          ))}
        </section>

        <section id="projects" className="section-block">
          <div className="section-intro">
            <h2 className="section-title">Project ledger</h2>
            <p className="section-copy">
              Selected work across automation, public-sector information
              systems, CRM, media delivery, document signing, and production
              deployment.
            </p>
          </div>

          <div className="project-ledger">
            {PROJECTS.map((project, index) => (
              <article key={project.title} className="ledger-row">
                <span className="ledger-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="project-meta">
                    {project.org} / {project.period}
                  </p>
                  <h3>{project.title}</h3>
                  <p>{project.blurb}</p>
                  <div className="project-stack" aria-label="Project stack">
                    {project.stack.map((tech) => (
                      <span
                        key={`${project.title}-${tech}`}
                        className="tech-pill"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  {project.links.length > 0 ? (
                    project.links.map((link) => (
                      <ProjectPreview
                        key={link.href}
                        href={link.href}
                        title={project.title}
                      />
                    ))
                  ) : (
                    <span className="project-meta">Private build</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="section-intro">
            <h2 className="section-title">Stack, in context</h2>
            <p className="section-copy">
              Tools are selected for the job: API shape first, deployment path
              second, interface last. The point is a system someone else can run
              after handoff.
            </p>
          </div>

          <div className="stack-grid">
            {STACK_GROUPS.map((group) => (
              <article key={group.title} className="stack-group">
                <p className="stack-kicker">{group.kicker}</p>
                <h3>{group.title}</h3>
                <p>{group.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="section-intro">
            <h2 className="section-title">Credentials</h2>
            <p className="section-copy">
              Certification and teaching sit beside the production work: the
              same concepts need to hold up in class, in code review, and in
              deployment.
            </p>
          </div>

          <div className="cert-list">
            {CERTIFICATIONS.map((cert) => (
              <article key={cert.title} className="cert-row">
                <p className="cert-meta">{cert.issuerYear}</p>
                <div>
                  <h3>{cert.title}</h3>
                  <p>Pearson credential.</p>
                </div>
                <ProjectPreview
                  href={cert.href}
                  embedHref={cert.embedHref}
                  title={cert.title}
                  label="Verify credential"
                />
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-band">
          <p className="contact-line">
            Have a system that keeps creating manual work?
          </p>
          <div>
            <p className="contact-copy">
              I am open to collaborations on full-stack products, automation,
              education technology, and infrastructure-backed deployments.
            </p>
            <div className="hero-actions">
              <Link
                href="mailto:wilbertjoshalfornon@gmail.com"
                className="action-link action-link--primary"
              >
                Email me
                <Mail aria-hidden="true" className="h-4 w-4" />
              </Link>
              <a
                href="#home"
                onClick={toSection("#home")}
                className="action-link action-link--secondary"
              >
                Back to top
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 rotate-[-90deg]"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
