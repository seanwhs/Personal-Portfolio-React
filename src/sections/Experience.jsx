import { Button } from "@/components/Button";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const experiences = [
  {
    period: "2021 — Present",
    role: "Principal Architect",
    company: "QuestGlobal",
    description:
      "Designing secure enterprise cloud, application, and data architectures. Orchestrated distributed observability systems on GCP utilizing OpenTelemetry and Splunk, while delivering DevSecOps frameworks for global application footprints in zero-trust, hybrid environments.",
    technologies: ["GCP", "Kubernetes", "DevSecOps", "OpenTelemetry", "Splunk", "Node.js"],
    current: true,
  },
  {
    period: "2019 — 2020",
    role: "General Manager & Technical Lead",
    company: "EcoWorld Development Singapore",
    description:
      "Led strategic technical roadmaps and architectural blueprints. Architected and deployed AWS cloud infrastructure environments, migrated legacy platforms from OpenShift to containerized AWS ECS, and implemented Robotic Process Automation (RPA) workflows.",
    technologies: ["AWS", "ECS", "RDS", "Infrastructure as Code", "OpenShift", "RPA", "Qlik"],
    current: false,
  },
  {
    period: "2018 — 2019",
    role: "Cyber Security Consultant",
    company: "Accenture, Singapore",
    description:
      "Drove enterprise security risk mitigation and infrastructure strategies. Specialized in executing threat assessment frameworks, driving SIEM use-case configurations, and establishing technology capability roadmaps for client ecosystems.",
    technologies: ["Cyber Security", "SIEM", "Risk Management", "Security Architecture"],
    current: false,
  },
  {
    period: "2016 — 2018",
    role: "Technical Director",
    company: "Dynasafe Technologies",
    description:
      "Managed research & development initiatives while designing core application infrastructure. Spearheaded high-availability architectures for core banking environments and successfully drove a legacy database consolidation project spanning 5 active campuses.",
    technologies: ["Database Modernization", "Core Banking Systems", "Infrastructure Design", "R&D"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of architectural strategy, security deployment, and software engineering 
            designed to deliver highly resilient production systems at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content Layout (Alternates Left/Right columns) */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500"
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-muted-foreground/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};