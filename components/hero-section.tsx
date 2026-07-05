"use client";

import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, Phone, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { emailAddress, githubUrl, linkedinUrl, phoneNumber, resumeUrl, resumeViewUrl } from "@/lib/profile";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Mark component as mounted (hydration-safe)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Mouse-follow gradient (client-only)
  useEffect(() => {
    if (!mounted) return;

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mounted]);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeClick = () => {
    // Trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Susanta_Kumar_Sahoo_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Open view link in new tab (use view URL so it displays in browser)
    window.open(resumeViewUrl, "_blank");
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: mounted
          ? "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), oklch(0.22 0.03 250) 0%, oklch(0.13 0.015 250) 50%)"
          : "radial-gradient(circle at 50% 50%, oklch(0.22 0.03 250) 0%, oklch(0.13 0.015 250) 50%)",
      }}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.3_0.02_250_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.3_0.02_250_/_0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-sm text-muted-foreground">
            Available for opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          <span className="text-foreground">Susanta Kumar</span>
          <br />
          <span className="text-primary">Sahoo</span>
        </h1>

        {/* Role */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
            AI/ML Engineer
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-700 delay-450">
          Building intelligent systems with{" "}
          <span className="text-foreground font-medium">LLMs</span>,{" "}
          <span className="text-foreground font-medium">RAG pipelines</span>, and{" "}
          <span className="text-foreground font-medium">cloud technologies</span>.
          Transforming complex problems into elegant AI-powered solutions.
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-600">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 border-border/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 group bg-transparent"
            asChild
          >
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 border-border/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 group bg-transparent"
            asChild
          >
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 border-border/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 group bg-transparent"
            asChild
          >
            <a href={"mailto:" + emailAddress} aria-label="Email">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 border-border/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 group bg-transparent"
            asChild
          >
            <a href={"tel:" + phoneNumber} aria-label="Phone">
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </Button>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-14 duration-700 delay-700">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-border/50 hover:border-primary hover:bg-primary/5 transition-all duration-300 bg-transparent"
            asChild>
            <a href="#contact">Get in Touch</a>

          </Button>
          <Button
            size="lg"
            className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-primary/40 hover:scale-105"
            onClick={handleResumeClick}
          >
            Resume
            <Download />
          </Button>

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce cursor-pointer"
        aria-label="Scroll to about section"
      >
        <span className="text-sm">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
}
