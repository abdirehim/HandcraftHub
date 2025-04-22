import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Download, Github, Linkedin, Twitter } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary/10 dark:bg-primary/20 px-3 py-1 text-sm font-medium text-primary dark:text-primary-foreground">
                Full-Stack Developer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Building <span className="text-primary">digital products</span>, brands, and experiences
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                I'm a full-stack developer specializing in building and designing exceptional digital experiences. 
                Currently, I'm focused on building accessible, human-centered products.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button onClick={scrollToProjects} className="group">
                  View My Work
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
              <div className="flex space-x-5 pt-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay"></div>
              <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                  fill="url(#grad1)"
                  fillOpacity="0.1"
                />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--primary)" />
                    <stop offset="100%" stopColor="var(--secondary)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="grid grid-cols-12 grid-rows-6 gap-2 p-6 bg-card aspect-square relative z-10">
                {Array.from({ length: 30 }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`rounded-md ${
                      [3, 8, 12, 16, 21, 25, 27].includes(idx)
                        ? "bg-primary/20 col-span-2 row-span-2"
                        : "bg-muted col-span-1 row-span-1"
                    }`}
                  ></div>
                ))}
                <div className="col-span-4 row-span-2 bg-primary/10 rounded-md flex items-center justify-center text-primary font-mono text-sm">
                  &lt;code/&gt;
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
