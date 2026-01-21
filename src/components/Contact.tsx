import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/data/portfolioData";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm actively seeking opportunities as an AI Product Manager. Let's discuss how I can contribute to your team.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="glass-card p-6 text-center hover-lift group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <p className="text-sm text-muted-foreground">{personalInfo.email}</p>
          </motion.a>

          <motion.div
            className="glass-card p-6 text-center hover-lift group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
              <MapPin className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Location</h3>
            <p className="text-sm text-muted-foreground">{personalInfo.location}</p>
          </motion.div>

          <motion.a
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 text-center hover-lift group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">Connect with me</p>
          </motion.a>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-card p-8 md:p-12 glow-effect">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to build something <span className="gradient-text">amazing?</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              I'm passionate about leveraging AI to create impactful products. Let's explore how my skills can help drive your product vision forward.
            </p>
            <a
              href={`mailto:${personalInfo.email}?subject=Opportunity%20for%20AI%20Product%20Manager%20Role`}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
