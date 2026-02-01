"use client";

import { useInView } from "@/hooks/use-in-view";
import { GraduationCap, MapPin, Briefcase, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const highlights = [
  {
    icon: Briefcase,
    label: "Current Role",
    value: "AI/ML Engineer",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bhubaneswar, India",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "MCA, CGPA 8.24",
  },
  {
    icon: Award,
    label: "Experience",
    value: "2+ Years",
  },
];

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -left-64 top-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={cn(
            "flex items-center gap-4 mb-16 transition-all duration-700",
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
            About Me
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Text content */}
          <div
            className={cn(
              "space-y-6 transition-all duration-700 delay-200",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            )}
          >
            <p className="text-3xl md:text-4xl font-light leading-relaxed text-foreground">
              I build{" "}
              <span className="text-primary font-medium">intelligent systems</span>{" "}
              that transform how businesses operate.
            </p>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As an AI/ML Engineer at Ishvara Tech Consulting, I specialize in
                converting traditional systems into AI-driven platforms. My work
                involves building LLM-powered conversational agents, optimizing
                inference pipelines, and implementing end-to-end automation using
                agentic workflows.
              </p>
              <p>
                With a strong foundation in both frontend development and data
                science, I bridge the gap between complex AI models and intuitive
                user experiences. I&apos;m passionate about leveraging technologies
                like LangChain, FastAPI, and cloud platforms to create scalable,
                production-ready solutions.
              </p>
              <p>
                My areas of interest span Data Science, Machine Learning, Cloud AI,
                and Business Intelligence — always seeking new ways to apply AI for
                real-world impact.
              </p>
            </div>
          </div>

          {/* Right - Highlights grid */}
          <div
            className={cn(
              "grid grid-cols-2 gap-4 transition-all duration-700 delay-400",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            )}
          >
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="group relative p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
                style={{
                  transitionDelay: `${index * 100 + 400}ms`,
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-sm text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education timeline */}
        <div
          className={cn(
            "mt-20 transition-all duration-700 delay-600",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h3 className="text-lg font-semibold text-foreground mb-8 flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-primary" />
            Education
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative p-6 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Master of Computer Applications
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Centurion University of Technology And Management
                  </p>
                </div>
                <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                  2023-25
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                CGPA: <span className="text-foreground font-medium">8.24</span>
              </p>
            </div>

            <div className="relative p-6 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Bachelor of Science
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Utkal University, Bhubaneswar
                  </p>
                </div>
                <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                  2019-22
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                CGPA: <span className="text-foreground font-medium">9.09</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
