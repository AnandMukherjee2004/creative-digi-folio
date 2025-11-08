import { Hero3D } from "./Hero3D";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 z-10"
        >
          <div className="space-y-2">
            <p className="text-primary font-semibold text-lg">Hello, I'm Anand</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Creative
              <br />
              <span className="text-gradient">Web Developer</span>
            </h1>
          </div>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed">
            Crafting immersive digital experiences with cutting-edge technologies. 
            Specialized in React, Three.js, and modern web development.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-gradient-warm border-0 group">
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/10">
              Download CV
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/AnandMukherjee2004/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/anand-mukherjee-b9a46a1bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:anandmukherjee2004@gmail.com"
              className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* 3D Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[500px] relative"
        >
          <Hero3D />
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl -z-10"></div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-secondary/20 blur-2xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
    </section>
  );
};
