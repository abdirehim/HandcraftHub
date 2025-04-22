import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";

type ProjectFilter = 'all' | string;

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  
  // Extract unique technology categories from all projects
  const technologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );
  
  // Filter projects based on selected filter
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience in full-stack development
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button
            variant={filter === 'all' ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter('all')}
            className="rounded-full"
          >
            All
          </Button>
          {technologies.map((tech) => (
            <Button
              key={tech}
              variant={filter === tech ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tech)}
              className="rounded-full"
            >
              {tech}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 group-hover:opacity-80 transition-opacity z-10"></div>
                  <div className="bg-muted h-full w-full flex items-center justify-center">
                    <svg 
                      className="w-full h-full text-muted-foreground/20"
                      viewBox="0 0 200 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="100%" height="100%" fill="currentColor" />
                      <text
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontSize="20"
                        fill="white"
                      >
                        {project.title}
                      </text>
                    </svg>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{project.title}</span>
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {project.shortDescription}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={`/project/${project.id}`}>
                    <Button variant="ghost" size="sm" className="gap-1">
                      View Details <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
