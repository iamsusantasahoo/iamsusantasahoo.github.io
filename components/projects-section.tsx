"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import {
  Bot,
  BarChart3,
  Stethoscope,
  ExternalLink,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { githubUrl } from "@/lib/profile";

const projects = [
  {
    title: "End-to-End Medical Chatbot",
    subtitle: "Generative AI",
    description:
      "A RAG-powered medical chatbot using GPT-3.5, Pinecone, and LangChain for accurate semantic retrieval and context-aware responses.",
    highlights: [
      "Built using RAG pipeline with GPT-3.5 and Pinecone for accurate semantic retrieval",
      "Automated data extraction from 5,000+ medical documents",
      "Deployed on AWS ensuring scalability and 24/7 accessibility",
    ],
    technologies: ["Python", "LangChain", "OpenAI", "Pinecone", "AWS"],
    icon: Bot,
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
    featured: true,
  },
  {
    title: "Car Sales Analysis",
    subtitle: "Business Intelligence",
    description:
      "Comprehensive interactive Power BI dashboard analyzing car sales performance with key performance indicators.",
    highlights: [
      "Created KPIs for sales performance, revenue growth, inventory turnover, and customer retention",
      "Identified key trends including top-selling models and seasonal variations",
      "Enabled data-driven decision-making for dealerships",
    ],
    technologies: ["Python", "Power BI", "Excel", "Data Modelling"],
    icon: BarChart3,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    featured: true,
  },
  {
    title: "First Care",
    subtitle: "Medical Stock Management",
    description:
      "React.js-based medical stock management system with Node.js backend and MongoDB database.",
    highlights: [
      "Implemented secure user authentication with email/password verification",
      "Automated email notifications for stock alerts and billing",
      "Improved inventory accuracy by 30%",
    ],
    technologies: ["React", "Node.js", "MongoDB", "HTML", "CSS"],
    icon: Stethoscope,
    gradient: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400",
    link: "#",
    featured: false,
  },
];

export function ProjectsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -right-32 top-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />

      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={cn(
            "flex items-center gap-4 mb-6 transition-all duration-700",
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
            Featured Projects
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
        </div>

        <p
          className={cn(
            "text-center text-muted-foreground mb-16 max-w-2xl mx-auto transition-all duration-700 delay-100",
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          A selection of projects that showcase my expertise in AI/ML, data
          analysis, and full-stack development.
        </p>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "group relative transition-all duration-700",
                project.featured && index === 0 ? "md:col-span-2 lg:col-span-2" : "",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <div className="relative h-full p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                {/* Gradient background */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    project.gradient
                  )}
                />

                {/* Icon */}
                <div
                  className={cn(
                    "relative w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
                    project.iconColor
                  )}
                >
                  <project.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className="relative">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {project.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    {project.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full gap-2 border-border/50 hover:border-primary hover:bg-primary/5 bg-transparent"
                        asChild
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full gap-2 hover:bg-primary/5"
                      asChild
                    >
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
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
