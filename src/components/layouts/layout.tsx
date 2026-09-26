"use client";

import * as React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LenisButterScroll } from "@/components/lenis-butter-scroll";

const SITE_NAME = "Wbert" as const;

const SOCIAL_LINKS = [
  { href: "https://github.com/wbert", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/wbert", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:wilbertjoshalfornon@gmail.com", icon: Mail, label: "Email" },
] as const;

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: PortfolioLayoutProps) {
  return (
    <div className="site-frame">
      <LenisButterScroll />

      <a href="#content" className="skip-link">
        Skip to content
      </a>

      <header className="site-nav">
        <div className="site-nav__inner">
          <a href="#home" className="site-wordmark" aria-label="Back to top">
            {SITE_NAME}
          </a>

          <div className="site-nav__right">
            <span className="site-location">Davao City / Remote</span>
            <ThemeToggle />
            <Link href="mailto:wilbertjoshalfornon@gmail.com" className="nav-cta">
              Email
            </Link>
          </div>
        </div>
      </header>

      <main id="content" className="site-main">
        {children}
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <p className="site-footer__line">
            Build practical systems. Leave the drama out.
          </p>
          <div className="site-footer__meta">
            <span>
              © {new Date().getFullYear()} {SITE_NAME}. Full-stack systems from
              Davao City.
            </span>
            <div className="site-socials">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="social-link"
                  aria-label={social.label}
                >
                  <social.icon aria-hidden="true" className="h-4 w-4" />
                  <span>{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
