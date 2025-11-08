import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern, responsive online store with real-time inventory management and seamless checkout experience.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "🛒",
  },
  {
    title: "3D Portfolio Gallery",
    description: "Interactive 3D showcase using Three.js with smooth animations and immersive user experience.",
    tech: ["Three.js", "React", "WebGL", "GSAP"],
    image: "🎨",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team collaboration features.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Socket.io"],
    image: "✅",
  },
  {
    title: "AI Content Generator",
    description: "Machine learning powered content creation tool with natural language processing capabilities.",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    image: "🤖",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics platform for tracking social media metrics with beautiful data visualizations.",
    tech: ["React", "D3.js", "Express", "Redis"],
    image: "📊",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather application with location-based forecasts and interactive maps.",
    tech: ["React", "API Integration", "Mapbox", "Chart.js"],
    image: "🌤️",
  },
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
                  <div className="aspect-video bg-gradient-warm flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </div>
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
                      <Button variant="outline" size="sm" className="flex-1 border-2 border-primary hover:bg-primary/10">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1 bg-gradient-warm border-0">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
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
