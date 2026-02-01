"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Building2, Calendar, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    company: "Ishvara Tech Consulting LLP",
    role: "AI/ML Engineer",
    period: "May 2025 - Present",
    location: "Bhubaneswar, Odisha",
    current: true,
    highlights: [
      "Converted a MERN-based marketing platform into an AI-driven system, delivering full automation for lead extraction, validation, segmentation, and campaign execution.",
      "Built and deployed Ask Leno, an LLM-powered conversational agent with voice interaction to handle tasks users previously did manually.",
      "Developed FastAPI-based AI services and containerized the entire stack using Docker for scalable, production-ready deployment.",
      "Optimized LLM inference pipelines, reducing latency and improving real-time responsiveness.",
      "Implemented agentic workflows using LangChain for end-to-end automation and integrated dashboards to visualize campaign KPIs and system performance.",
    ],
    technologies: [
      "Python",
      "LangChain",
      "FastAPI",
      "Docker",
      "LLMs",
      "RAG",
    ],
  },
  {
    company: "ERP Tech",
    role: "Frontend Developer",
    period: "July 2022 - Jan 2023",
    location: "Bhubaneswar, Odisha",
    current: false,
    highlights: [
      "Developed responsive full-stack web and mobile applications using HTML, CSS, JavaScript, and basic ReactJS.",
      "Handled the overall UX/UI design for various modules, ensuring intuitive and user-friendly interfaces.",
      "Participated in daily team stand-ups, helping maintain focus and track progress effectively.",
      "Monitored task completion and coordinated with team members to resolve development issues.",
      "Supported issue tracking and bug fixing to maintain smooth frontend functionality.",
    ],
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "UX/UI Design"],
  },
];

export function ExperienceSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="experience"
      className="py-32 px-6 relative overflow-hidden bg-card/30"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -right-64 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute -left-64 bottom-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

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
            Experience
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent md:-translate-x-1/2 hidden md:block" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={cn(
                "relative mb-16 last:mb-0 transition-all duration-700",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 200 + 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-background border-2 border-primary md:-translate-x-1/2 -translate-x-1/2 hidden md:block">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              <div
                className={cn(
                  "md:w-1/2",
                  index % 2 === 0 ? "md:pr-16" : "md:pl-16 md:ml-auto"
                )}
              >
                <div className="group relative p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-primary">
                            {exp.company}
                          </span>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span>{exp.location}</span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
