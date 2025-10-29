"use client";

import * as React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layouts/layout";
import { motion } from "framer-motion";
import { TitleTypingEffect } from "@/components/title-typing-effect";
const PROJECTS = [
  {
    title: "Digi-Sign",
    period: "2025–2025",
    org: "Personal",
    blurb:
      "Automate and digitalized pdf signing embeding cryptographic signature straight to metadata",
    stack: [
      "FastAPI",
      "React",
      "Vite",
      "PWA",
      "Docker",
      "Docker Compose",
      "Cron",
      "Nginx",
      "Cloudflare",
    ],
    links: [{ href: "https://digi-sign.wbert.xyz", label: "Site" }],
  },
  {
    title: "Vinta System",
    period: "2024–2024",
    org: "Vinta Yearbook",
    blurb:
      "Streamlined yearbook information gathering, pictorial scheduling, and solicitation management for yearbook publishing",
    stack: [
      "Laravel",
      "React",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "Nginx",
    ],
    links: [],
  },
  {
    title: "Records Archiving & PDF Signing",
    period: "2024–2025",
    org: "Infosoft Studio",
    blurb:
      "Optimized PDF generation and digital signing pipeline; achieved ~60% faster processing and smoother archival flows.",
    stack: [
      "Laravel",
      "C#",
      "Python",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
    ],
    links: [],
  },
  {
    title: "Barangay Profiling & Legislative Tracking",
    period: "2024",
    org: "Infosoft Studio",
    blurb:
      "Built profiling and ordinance tracking modules to streamline government transactions and reporting.",
    stack: ["Laravel", "PostgreSQL", "Docker"],
    links: [],
  },
  {
    title: "Yearbook Automation & Landing",
    period: "2022–2024",
    org: "Vinta Yearbook",
    blurb:
      "Automated data cleaning & image renaming (−60% processing time). Launched landing page boosting student reach.",
    stack: ["Laravel", "React", "Python", "PostgreSQL", "Firebase"],
    links: [{ href: "https://yearbook.vintasystem.com", label: "Site" }],
  },
  {
    title: "Permit‑to‑Work Checklist System",
    period: "2022–2024",
    org: "Mediaone PH",
    blurb:
      "Digitized a paper‑based process; assisted API and DB design to streamline operations and reduce manual work.",
    stack: ["Laravel", "React", "MySQL"],
    links: [],
  },
];

export default function Page() {
  return (
    <Layout>
      <section className="space-y-8">
        <header className="space-y-3">
          <TitleTypingEffect text="Projects" />
          <p className="text-muted-foreground">
            Selected work spanning public sector systems, automation, and
            education tech.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.3, ease: "easeOut" }}
              whileHover={{ y: -3 }}
            >
              <Card key={p.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex flex-col gap-1">
                    <span>{p.title}</span>
                    <span className="text-sm font-normal text-muted-foreground">
                      {p.org} • {p.period}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{p.blurb}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s: string) => (
                      <Badge key={s} variant="secondary" className="text-xs">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                {p.links?.length ? (
                  <CardFooter className="mt-auto flex flex-wrap gap-3">
                    {p.links.map((l: { href: string; label: string }) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        target={
                          l.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          l.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm text-primary underline-offset-4 hover:underline"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </CardFooter>
                ) : null}
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
