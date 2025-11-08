import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import waterApp from "@/assets/waterApp.png";
import questify from "@/assets/questify_ai.jpeg";
import taxnova from "@/assets/tax_nova.png";

const projects = [
  {
    "title": "Questify Ai",
    "description": "An intelligent AI-powered interview preparation platform that helps job seekers practice and master their interview skills through personalized mock interviews and real-time feedback.",
    "tech": [
      "Next.js 15",
      "TypeScript",
      "n8n",
    ],
    "image": questify,
    "github": "https://github.com/AnandMukherjee2004/Questify_Ai",
    "demo": ""
  },

  {
    "title": "EPICS",
    "description": "An intelligent web-based platform for water quality monitoring, potability testing, real-time analytics, and AI-powered guidance. EPICS enables users to analyze water samples, visualize quality metrics via dashboards, and interact with a smart chatbot for water safety advice.",
    "tech": [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "Recharts",
      "Google Gemini API",
    ],
    "image": waterApp,
    "github": "https://github.com/AnandMukherjee2004/EPICS",
    "demo": "https://epics-neon.vercel.app/"
  },

  {
    "title": "TaxNova",
    "description": "A modern tax management platform designed to streamline tax calculations, filings, and compliance. TaxNova provides intuitive tools for individuals and businesses to handle taxes efficiently, featuring automated computation, secure document management, and insightful analytics.",
    "tech": [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],
    "image": taxnova,
    "github": "https://github.com/AnandMukherjee2004/TaxNova",
    "demo": "https://tax-nova.vercel.app/"
  }


  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift bg-card border-border h-full overflow-hidden group">
                <CardContent className="p-0">
                  {typeof project.image === "string" && /\.(png|jpe?g|gif|webp|svg)$/i.test(project.image) ? (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-warm flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
                      {project.image}
                    </div>
                  )}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-muted text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2">
                      {project.github ? (
                        <Button asChild variant="outline" size="sm" className="flex-1 border-2 border-primary hover:bg-primary/10">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={16} className="mr-2" />
                            Code
                          </a>
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="flex-1 border-2 border-primary" disabled>
                          <Github size={16} className="mr-2" />
                          Code
                        </Button>
                      )}

                      {project.demo ? (
                        <Button asChild size="sm" className="flex-1 bg-gradient-warm border-0">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-2" />
                            Demo
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" className="flex-1 bg-gradient-warm border-0" disabled>
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
