import { motion } from "framer-motion";
import { Code2, Palette, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code following best practices.",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Combining aesthetics with functionality to create stunning user experiences.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing every aspect for lightning-fast load times and smooth interactions.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating innovative web solutions that make a difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-foreground text-lg leading-relaxed">
              I'm a creative web developer with a passion for building beautiful, functional, 
              and user-friendly digital experiences. With expertise in modern technologies like 
              React, Three.js, and cutting-edge frameworks, I bring ideas to life through code.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My approach combines technical excellence with creative problem-solving, 
              ensuring every project not only meets but exceeds expectations. I believe 
              in continuous learning and staying ahead of industry trends.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-4xl font-bold text-gradient">5+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gradient">50+</p>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gradient">30+</p>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-warm p-1">
              <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                <p className="text-6xl">👨‍💻</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-secondary/30 blur-3xl -z-10"></div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift bg-card border-border h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-warm flex items-center justify-center">
                    <highlight.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-bold">{highlight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
