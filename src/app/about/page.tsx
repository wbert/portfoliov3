"use client";

import * as React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layouts/layout";
import { TitleTypingEffect } from "@/components/title-typing-effect";
export default function Page() {
  const skills = [
    "PHP",
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "C#",
    "Bash",
    "Lua",
  ];
  const tools = [
    "Laravel",
    "FastAPI",
    "Node.js",
    "Express",
    "React",
    "Vue",
    "Docker",
    "PostgreSQL",
    "MySQL",
    "GitHub Actions",
    "Cloudflare",
    "AWS",
  ];

  return (
    <Layout>
      <section className="space-y-10">
        <header className="space-y-3">
          <TitleTypingEffect text="About" />
          <p className="text-muted-foreground">
            I'm Wilbert, a software developer and faculty lecturer based in
            Davao City, Philippines. I enjoy building pragmatic systems that
            automate real-world processes and teaching students how to turn
            theory into working code.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h2 className="mb-2 font-semibold">Teaching</h2>
            <p className="text-sm text-muted-foreground">
              Faculty Lecturer at the University of Mindanao (2024–present)
              covering Java, Python, SQL, Scikit‑Learn, Pandas, Git, and
              software engineering foundations. I mentor students through case
              studies and coding projects aimed at industry readiness.
            </p>
          </div>
          <div className="rounded-2xl border p-6">
            <h2 className="mb-2 font-semibold">Software Development</h2>
            <p className="text-sm text-muted-foreground">
              I’ve shipped systems across public and private sectors: records
              archiving with faster PDF signing, barangay profiling and
              legislative tracking, permit‑to‑work checklists, and yearbook
              automation & promotional landing pages.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h2 className="mb-3 font-semibold">Skills</h2>
            <div className="mb-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <Badge key={s} variant="secondary" className="text-xs">
                  {s}
                </Badge>
              ))}
            </div>
            <h3 className="mb-2 text-sm font-medium">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <Badge key={t} variant="outline" className="text-xs">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border p-6">
            <h2 className="mb-3 font-semibold">Education & Certs</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="font-medium">B.S. in Computer Science</div>
                <div className="text-muted-foreground">
                  University of Mindanao (2020–2024), GPA 3.47/4.0
                </div>
              </li>
              <li>
                <div className="font-medium">
                  IT Specialist – HTML & CSS (Pearson, 2023)
                </div>
                <Link
                  className="text-primary underline-offset-4 hover:underline"
                  href="https://www.credly.com/badges/ade3017d-63bb-4a66-a6fa-854446e2cbf4/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Credential
                </Link>
              </li>
              <li>
                <div className="font-medium">
                  IT Specialist – Databases (Pearson, 2023)
                </div>
                <Link
                  className="text-primary underline-offset-4 hover:underline"
                  href="https://www.credly.com/badges/cd4018f7-bc4d-4601-9529-021ad5c6b964/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Credential
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="mb-2 font-semibold">Values</h2>
          <p className="text-sm text-muted-foreground">
            Ship small, learn fast. Prefer boring tech that scales. Automate
            repeatable work. Write it down. Keep the UI clean and the feedback
            loops short.
          </p>
        </div>
      </section>
    </Layout>
  );
}
