"use client";

import * as React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { LenisButterScroll } from "@/components/lenis-butter-scroll";
import { butterScrollTo } from "@/lib/butter-scroll";

const SITE_NAME = "Wbert" as const;

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

const SOCIAL_LINKS = [
  { href: "https://github.com/wbert", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/wbert", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:wilbertjoshalfornon@gmail.com", icon: Mail, label: "Email" },
] as const;

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

function AnchorNavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={active ? "location" : undefined}
      className={[
        "block rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
        active
          ? "bg-foreground text-background shadow-lg shadow-foreground/20"
          : "text-muted-foreground hover:bg-accent hover:text-foreground",
      ].join(" ")}
    >
      {label}
    </a>
  );
}

export function Layout({ children }: PortfolioLayoutProps) {
  const [activeItem, setActiveItem] = React.useState<string>("#home");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const scrollToSection = React.useCallback(
    (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      setActiveItem(href);
      setMobileOpen(false);
      butterScrollTo(href, { offset: 104 });

      if (typeof window !== "undefined") {
        window.history.replaceState({}, "", href);
      }
    },
    [],
  );

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.href.slice(1)),
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (inView[0]) {
          setActiveItem(`#${inView[0].target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.2, 0.45, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    if (window.location.hash) {
      const hash = window.location.hash;
      setActiveItem(hash);
      window.requestAnimationFrame(() => {
        butterScrollTo(hash, { offset: 104 });
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <LenisButterScroll />

      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
      </div>

      <header className="fixed left-0 right-0 top-3 z-50 px-4">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between rounded-full border border-border/70 bg-background/65 px-3 backdrop-blur-xl md:px-5">
          <a
            href="#home"
            onClick={scrollToSection("#home")}
            className="rounded-full px-3 py-1 text-sm font-semibold tracking-wide"
          >
            {SITE_NAME}
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {NAV_ITEMS.map((item) => (
              <AnchorNavLink
                key={item.href}
                href={item.href}
                label={item.label}
                active={activeItem === item.href}
                onClick={scrollToSection(item.href)}
              />
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <div className="md:hidden">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[86vw] px-3 sm:w-96 sm:px-4">
                  <SheetHeader>
                    <SheetTitle className="text-left">{SITE_NAME}</SheetTitle>
                  </SheetHeader>
                  <nav className="mt-8 grid gap-4 px-1">
                    {NAV_ITEMS.map((item) => (
                      <AnchorNavLink
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        active={activeItem === item.href}
                        onClick={scrollToSection(item.href)}
                      />
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main id="content" className="relative z-10 mx-auto max-w-6xl px-4 pb-14 pt-24 md:px-8">
        {children}
      </main>

      <footer className="relative z-10 border-t border-border/60 bg-background/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={social.label}
                className="inline-flex"
              >
                <Button variant="ghost" size="icon" className="rounded-full">
                  <social.icon className="h-5 w-5 text-muted-foreground" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
