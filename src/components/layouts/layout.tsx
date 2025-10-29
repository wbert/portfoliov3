"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

// ---------------------------------
// Config
// ---------------------------------
const SITE_NAME = "Wbert" as const;

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
] as const;

const SOCIAL_LINKS = [
  { href: "https://github.com/your-username", icon: Github, label: "GitHub" },
  {
    href: "https://linkedin.com/in/your-username",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "mailto:your-email@example.com", icon: Mail, label: "Email" },
] as const;

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname?.startsWith(href);
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cx(
        "rounded-full px-3 py-2 text-sm font-medium transition-colors",
        isActive
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:bg-accent hover:text-primary",
      )}
    >
      {label}
    </Link>
  );
}

export function Layout({ children }: PortfolioLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="my-3 sticky top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-base font-semibold tracking-tight">
                {SITE_NAME}
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="m-3 p-3 border rounded-full hidden items-center gap-2 md:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center md:gap-2">
            <ThemeToggle />

            {/* Mobile menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[85vw] sm:w-96">
                  <SheetHeader>
                    <SheetTitle className="text-left">{SITE_NAME}</SheetTitle>
                  </SheetHeader>

                  <nav className="mt-6 grid gap-4 ">
                    {NAV_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-md px-5 py-2 text-lg text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main id="content" className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16 lg:py-20">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>

          <div className="flex items-center gap-1">
            {SOCIAL_LINKS.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={s.label}
                className="inline-flex"
              >
                <Button variant="ghost" size="icon">
                  <s.icon className="h-5 w-5 text-muted-foreground" />
                  <span className="sr-only">{s.label}</span>
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
