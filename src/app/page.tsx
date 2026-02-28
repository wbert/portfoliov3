"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { Layout } from "@/components/layouts/layout";
import { RotateWords } from "@/components/rotate-words";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { butterScrollTo } from "@/lib/butter-scroll";

const CORE_STACK = [
  { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
  {
    name: "PostgreSQL",
    logo: "https://cdn.simpleicons.org/postgresql/4169E1",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.simpleicons.org/typescript/3178C6",
  },
  { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "AWS", logo: "/aws.svg" },
  {
    name: "Cloudflare",
    logo: "https://cdn.simpleicons.org/cloudflare/F38020",
  },
];

const HIGHLIGHTS = [
  {
    title: "GovTech Systems",
    body: "Built profiling and ordinance tracking modules used for local process automation.",
  },
  {
    title: "HealthCareTech Systems",
    body: "Built health care systems, heath care CRM, and agentic AI for local process automation.",
  },
  {
    title: "Teaching + Mentorship",
    body: "Lectures and mentorship in Java, Python, SQL, and ML-aligned software projects.",
  },
];

const CERTIFICATIONS = [
  {
    title: "IT Specialist - HTML & CSS",
    issuerYear: "Pearson, 2023",
    href: "https://www.credly.com/badges/ade3017d-63bb-4a66-a6fa-854446e2cbf4/public_url",
    icon: "https://images.credly.com/size/680x680/images/e2dc688d-de61-44a5-81af-ee96f117a211/ITS-Badges_HTML-and-CSS_1200px.png",
  },
  {
    title: "IT Specialist - Databases",
    issuerYear: "Pearson, 2023",
    href: "https://www.credly.com/badges/cd4018f7-bc4d-4601-9529-021ad5c6b964/public_url",
    icon: "https://images.credly.com/size/680x680/images/49a492cd-5f72-4c9d-aafa-06649e4853fb/MicrosoftTeams-image__5_.png",
  },
];

const PROJECTS = [
  {
    title: "ConsentMD PulseCRM",
    org: "ConsentMD",
    period: "2026-2026",
    blurb:
      "Streamlined relationship management and CRM for health care providers.",
    stack: [
      "NestJS",
      "NextJS",
      "NeonDB",
      "Google Cloud Platform",
      "Google Cloud Engine",
      "Vercel",
      "NGINX",
      "Docker",
    ],
    links: [{ href: "https://yearbook.vintasystem.com", label: "Site" }],
  },
  {
    title: "Lantaw",
    org: "Personal",
    period: "2025",
    blurb:
      "Movie streaming platform with responsive playback and cloud-first deployment.",
    stack: ["NestJS", "Redis", "Next.js", "Docker", "Cloudflare"],
    links: [{ href: "https://lantaw.wbert.xyz", label: "Site" }],
  },
  {
    title: "Digi-Sign",
    org: "Personal",
    period: "2025",
    blurb:
      "Digital signature workflow that embeds cryptographic metadata into generated PDFs.",
    stack: ["FastAPI", "React", "PWA", "Docker", "Cron", "Nginx"],
    links: [{ href: "https://digi-sign.wbert.xyz", label: "Site" }],
  },
  {
    title: "Vinta System",
    org: "Vinta Yearbook",
    period: "2024",
    blurb:
      "Workflow platform for yearbook collection, schedule orchestration, and logistics.",
    stack: ["Laravel", "React", "PostgreSQL", "Docker"],
    links: [{ href: "https://vinta-sys.wbert.xyz", label: "Site" }],
  },
  {
    title: "Records Archiving + Signing",
    org: "Infosoft Studio",
    period: "2024-2025",
    blurb:
      "Optimized archival generation and signing flow with measurable latency reduction.",
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
      "Automated data cleanups and naming pipelines to cut manual steps and errors.",
    stack: ["Laravel", "React", "Python", "Firebase"],
    links: [{ href: "https://yearbook.vintasystem.com", label: "Site" }],
  },
];

function toSection(hash: string) {
  return (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    butterScrollTo(hash, { offset: 104 });
    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", hash);
    }
  };
}

const fadeInUp = {
  hidden: { opacity: 0, y: 56, filter: "blur(6px)" },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Home() {
  return (
    <Layout>
      <div className="space-y-6 md:space-y-8">
        <section
          id="home"
          className="scroll-mt-28 flex min-h-[calc(100svh-6rem)] items-center"
        >
          <div className="relative isolate w-full overflow-hidden rounded-[2.1rem] border border-border/60 bg-background/55 p-6 md:p-8">
            <motion.div
              className="pointer-events-none absolute inset-0 -z-10"
              animate={{ rotate: [0, 6, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="hero-glow hero-glow-a" />
              <div className="hero-glow hero-glow-b" />
            </motion.div>

            <div className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
              <motion.div initial="hidden" animate="show" variants={fadeInUp}>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Building Useful Systems
                </div>
                <RotateWords
                  text="Wilbert Josh Alfornon"
                  words={["Hello", "Hey", "Wazzup", "Greetings", "Hi"]}
                />
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Software developer and faculty lecturer from Davao City. I
                  design practical products, automate operational work, and
                  build software that teams can actually maintain.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full">
                    <a href="#projects" onClick={toSection("#projects")}>
                      Explore Projects
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full"
                  >
                    <a href="#contact" onClick={toSection("#contact")}>
                      Let&apos;s Collaborate
                    </a>
                  </Button>
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                  >
                    <Link
                      href="https://github.com/wbert"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                  >
                    <Link
                      href="https://linkedin.com/in/wbert"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                  >
                    <Link href="mailto:wilbertjoshalfornon@gmail.com">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
                initial="hidden"
                animate="show"
                variants={fadeInUp}
                custom={0.15}
              >
                <motion.div
                  className="rounded-3xl border border-border/60 bg-gradient-to-br from-background/90 via-background/75 to-background/50 p-6 shadow-xl shadow-black/5"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 6.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Years
                  </p>
                  <p className="mt-2 text-4xl font-semibold">3+</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Shipping web apps and systems.
                  </p>
                </motion.div>

                <motion.div
                  className="rounded-3xl border border-border/60 bg-gradient-to-br from-background/90 via-background/75 to-background/50 p-6 shadow-xl shadow-black/5"
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 7.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Recent Role
                  </p>
                  <p className="mt-2 text-2xl font-semibold">
                    Backend Developer
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    ConsentMD, 2026-Present.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="min-h-[calc(100svh-8rem)] scroll-mt-28 flex flex-col justify-start space-y-8 py-4"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              About
            </h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              I build pragmatic software for real process bottlenecks and teach
              students to move from theory to production-ready code. My work
              spans web platforms, automation, and government-facing information
              systems.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {HIGHLIGHTS.map((item, index) => (
              <motion.article
                key={item.title}
                className="group rounded-3xl border border-border/65 bg-background/60 p-6 backdrop-blur-sm"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={0.08 * index}
                variants={fadeInUp}
                whileHover={{ y: -6, rotate: index % 2 === 0 ? 1 : -1 }}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="rounded-3xl border border-border/65 bg-background/60 p-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.25}
            variants={fadeInUp}
          >
            <h3 className="text-lg font-semibold">Core Stack</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {CORE_STACK.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="group rounded-2xl border border-border/60 bg-background/75 p-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.06]">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-sm font-medium">{skill.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-border/65 bg-background/60 p-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.28}
            variants={fadeInUp}
          >
            <h3 className="text-lg font-semibold">Certifications</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {CERTIFICATIONS.map((cert) => (
                <article
                  key={cert.title}
                  className="rounded-2xl border border-border/60 bg-background/75 p-4"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={cert.icon}
                      alt={`${cert.title} badge`}
                      className="h-14 w-14 rounded-xl border border-border/60 object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-medium">{cert.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {cert.issuerYear}
                      </p>
                      <Link
                        href={cert.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm text-primary underline-offset-4 hover:underline"
                      >
                        Credential
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </section>

        <section
          id="projects"
          className="min-h-[calc(100svh-8rem)] scroll-mt-28 flex flex-col justify-start space-y-8 pt-1 pb-4"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Projects
            </h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Selected work across automation, public sector software, and
              production deployments.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <motion.article
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-border/65 bg-background/70 p-6"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                custom={index * 0.05}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="project-sheen"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />

                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {project.org} · {project.period}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.blurb}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge
                        key={`${project.title}-${tech}`}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {project.links.length > 0 ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.links.map((link) => (
                        <Button
                          key={link.href}
                          asChild
                          size="sm"
                          className="rounded-full"
                        >
                          <Link
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="min-h-[calc(100svh-8rem)] scroll-mt-28 flex items-center py-4"
        >
          <motion.div
            className="relative w-full overflow-hidden rounded-[2rem] border border-border/65 bg-background/65 p-8 md:p-10"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="contact-wave"
              animate={{ rotate: [0, 10, 0], scale: [1, 1.12, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Let&apos;s Build Something Wild
              </h2>
              <p className="mt-4 text-muted-foreground">
                Open to collaborations on full-stack products, automation,
                education technology, and infrastructure-backed deployments.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="mailto:wilbertjoshalfornon@gmail.com">
                    Email Me
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full"
                >
                  <a href="#home" onClick={toSection("#home")}>
                    Back to Top
                    <ArrowRight className="h-4 w-4 rotate-[-90deg]" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}
