"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import {
  Code2,
  Brain,
  Database,
  BarChart,
  Layers,
  Cloud,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "R", "Java", "C", "JavaScript", "TypeScript"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      "LangChain",
      "LangGraph",
      "NLP",
      "Computer Vision",
      "Supervised Learning",
      "Unsupervised Learning",
      "Predictive Modeling",
      "RAG Pipelines",
    ],
  },
  {
    title: "Data & Visualization",
    icon: BarChart,
    skills: [
      "Power BI",
      "Tableau",
      "Excel",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Grafana",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: [
      "React.js",
      "FastAPI",
      "Streamlit",
      "Gradio",
      "PySpark",
      "Pinecone",
      "FAISS",
      "Weaviate",
    ],
  },
  {
    title: "Databases & Vector Stores",
    icon: Database,
    skills: [
      "MongoDB",
      "SQL",
      "Pinecone",
      "FAISS",
      "Amazon OpenSearch",
      "Weaviate",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "Azure ML",
      "GCP Vertex AI",
      "Docker",
      "CI/CD",
      "Git",
      "GitLab CI",
      "Azure DevOps",
    ],
  },
];

const certifications = [
  "AWS Academy Graduate - AWS Academy Cloud Foundations",
  "SAP Certified Associate - Back-End Developer - ABAP Cloud",
  "Designing and Implementing a Microsoft Azure AI Solution",
  "Microsoft Azure AI Fundamentals",
  "Microsoft Power BI Data Analyst",
  "Postman API Fundamentals Student Expert",
];

export function SkillsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="skills"
      className="py-32 px-6 relative overflow-hidden bg-card/30"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -left-32 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
      <div className="absolute -right-32 bottom-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />

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
            Skills & Certifications
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
          A comprehensive toolkit spanning AI/ML, data science, full-stack
          development, and cloud technologies.
        </p>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={cn(
                "group relative p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon and title */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div
          className={cn(
            "transition-all duration-700 delay-700",
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <h3 className="text-lg font-semibold text-foreground mb-8 text-center">
            Professional Certifications
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={cert}
                className="group relative p-4 rounded-xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-300"
                style={{ transitionDelay: `${index * 50 + 800}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                    {cert}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
