import { Terminal, Code2, GraduationCap, Building2 } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Production-Ready Software",
    description:
      "Writing type-safe JavaScript and TypeScript codebases designed for stability, clean logic, and effortless long-term maintenance.",
  },
  {
    icon: Terminal,
    title: "Self-Healing Applications",
    description:
      "Building software with smart retry mechanics and failure handling so background tasks recover automatically when external systems drop out.",
  },
  {
    icon: Building2,
    title: "Enterprise Experience",
    description:
      "Bringing the high-security standards, architectural discipline, and reliability of scale learned at global tech leaders directly to your project.",
  },
  {
    icon: GraduationCap,
    title: "Team Training & Upskilling",
    description:
      "Conducting practical code labs and masterclasses to help internal engineering teams build faster, safer, and with modern tools.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                My Philosophy
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              AI can write code.
              <span className="font-serif italic font-normal text-white">
                {" "}
                I build systems you can trust.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                In a software landscape where AI can generate boilerplate code in seconds, 
                the real challenge is no longer just typing syntax. The bottleneck has moved to 
                knowing how to orchestrate those pieces into a secure, stable application that survives real-world business stress.
              </p>
              <p>
                My approach to software development is backed by a deep corporate foundation. 
                Before operating as an independent consultant, developer, and trainer, I spent years 
                navigating complex technology environments as an Enterprise Architect, Principal Consultant, 
                and General Manager. Having engineered and overseen secure digital infrastructures for technology 
                leaders like <strong>HP</strong> and <strong>Sun Microsystems</strong>, I know exactly how large-scale systems break—and how to write software that prevents it.
              </p>
              <p>
                Today, I bring that enterprise rigor to a highly optimized, lightweight modern development stack: 
                <strong> Next.js, Bun, Appwrite, and Inngest</strong>. I specialize in building event-driven web and local software systems that don't just work on a good day, but are resilient enough to handle ambient data and network issues automatically.
              </p>
              <p>
                Based in Singapore, I partner with companies through a clear three-tiered model: executing hands-on 
                software development for critical operations, consulting on secure system architectures, and running 
                technical masterclasses to upscale internal development teams.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is simple: to eliminate operational fragility and replace it with reliable, high-performance software that scales smoothly without needing constant manual intervention."
              </p>
            </div>
          </div>
          
          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};