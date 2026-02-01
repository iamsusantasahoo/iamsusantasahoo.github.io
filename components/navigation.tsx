"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed left-1/2 top-6 z-50 -translate-x-1/2 transition-all duration-500",
        isScrolled
          ? "bg-card/80 backdrop-blur-xl shadow-lg shadow-primary/5 border border-border/50"
          : "bg-transparent"
      )}
      style={{ borderRadius: "9999px" }}
    >
      <ul className="flex items-center gap-1 px-2 py-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                activeSection === item.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {activeSection === item.href.slice(1) && (
                <span className="absolute inset-0 bg-primary/10 rounded-full animate-in fade-in duration-300" />
              )}
              <span className="relative">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
