import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through education and professional experiences in the tech industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold mb-4">My Story</h3>
              <p className="text-muted-foreground mb-4">
                I'm a passionate full-stack developer with a focus on creating meaningful and user-friendly web applications. 
                With a strong foundation in both front-end and back-end technologies, I strive to deliver cohesive and intuitive 
                experiences across the entire application stack.
              </p>
              <p className="text-muted-foreground mb-4">
                My journey in technology began with a curiosity about how digital products work, which led me to 
                pursue formal education in computer science. Since then, I've been constantly learning and adapting 
                to the ever-evolving tech landscape.
              </p>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative border-l border-primary/30 pl-6 ml-6">
              {experience.map((item, index) => (
                <div key={index} className="mb-12 relative">
                  <div className="absolute -left-10 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="absolute -left-10 w-4 h-4 rounded-full bg-primary/30 animate-ping"></div>
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <h3 className="text-xl font-bold">{item.role}</h3>
                        <Badge variant="outline" className="font-mono">
                          {item.period}
                        </Badge>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-lg font-semibold">{item.company}</h4>
                          <span className="text-muted-foreground"> — {item.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CalendarDays className="h-4 w-4" />
                          <span>{item.duration}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="font-mono text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
