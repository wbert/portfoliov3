"use client";

import Link from "next/link";
import { Layout } from "@/components/layouts/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { RotateWords } from "@/components/rotate-words";

export default function Home() {
  const skills = [
    "Laravel",
    "FastAPI",
    "Node.js",
    "React",
    "Docker",
    "PostgreSQL",
    "GitHub Actions",
    "Python",
    "Java",
    "AWS",
    "Cloudflare",
  ];

  const highlights = [
    {
      title: "PDF Signing & Archiving",
      body: "Improved PDF generation and signing performance by 60% in a records archiving platform.",
    },
    {
      title: "GovTech Automation",
      body: "Built barangay profiling & legislative tracking systems; streamlined transactions and reports.",
    },
    {
      title: "Teaching & Mentorship",
      body: "Deliver lectures in Java, Python, ML; mentor students on projects aligned to industry use-cases.",
    },
  ];

  return (
    <Layout>
      <section className="space-y-12 ">
        {/* Hero */}
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="space-y-5">
            <RotateWords
              text="Wilbert Josh Alfornon"
              words={["Hi", "Wazzup", "Hey", "Greetings", "Hello"]}
            />
            <p className="text-muted-foreground">
              Software Developer & Faculty Lecturer from Davao City. I build
              pragmatic web apps, automate workflows, and teach Java, Python,
              and ML.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="flex gap-3 text-center justify-between">
                <Link href="/projects">
                  <Button size="lg" className="rounded-full">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="mailto:wilbertjoshalfornon@gmail.com">
                  <Button size="lg" variant="outline" className="rounded-full">
                    <Mail className="mr-2 h-4 w-4" /> Contact
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://github.com/wbert"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="GitHub"
                    className="rounded-full"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href="https://linkedin.com/in/wbert"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="LinkedIn"
                    className="rounded-full"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Stats / Core Stack */}
          <div className="rounded-2xl border p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-semibold">3+</div>
                <div className="text-xs text-muted-foreground">
                  Years Building
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold">2</div>
                <div className="text-xs text-muted-foreground">
                  Certifications
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold">Lecturer</div>
                <div className="text-xs text-muted-foreground">
                  UM, 2024–Now
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-sm font-medium">Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.3, ease: "easeOut" }}
              whileHover={{ y: -3 }}
              className="rounded-2xl border p-6"
            >
              <h3 className="mb-2 font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
