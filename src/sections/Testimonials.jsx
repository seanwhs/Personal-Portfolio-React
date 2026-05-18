import { ChevronLeft, ChevronRight, Quote, CircleUser } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "As an architect, Sean was always resourceful. During his time in my team, Sean led in crafting target architectures for the projects in China I entrusted him with. Sean soon proved to be a great addition to my team with the knowledge and dedication he brought to the table. He demonstrated to stay on top of the latest developments in both the field as well as in the projects.",
    author: "David Aguilar",
    role: "Technology Architecture Manager, IKEA China Digital Hub",
  },
  {
    quote:
      "Sean is a great person to work with, even during high pressure he always comes through, keeps deadlines, always with a good attitude as a great team player. Sean always makes sure that the team can have a laugh together.",
    author: "Lee",
    role: "Project Manager, IKEA China Digital Hub",
  },
  {
    quote:
      "Sean is highly motivated and qualified with experience in all aspects of technology architecture including cloud computing, cyber security, application and data architecture.",
    author: "Kirill Barinov",
    role: "IKEA China Digital Hub",
  },
  {
    quote:
      "I know Sean as a hardworking and dependable technology consultant, trainer and a natural leader.",
    author: "Kenneth Loh",
    role: "Business Consultant, HP Singapore",
  },
];

const AvatarFallback = () => {
  return (
    <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center ring-2 ring-primary/20 shrink-0">
      <CircleUser className="w-8 h-8 text-muted-foreground" />
    </div>
  );
};

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <AvatarFallback />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                type="button"
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={`dot-${idx}`}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};