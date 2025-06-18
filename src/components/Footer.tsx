"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:rumachoudhury7862@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* <h3 className="text-2xl font-bold text-primary mb-2">Ruma.dev</h3> */}
            <motion.div
              className="text-xl font-bold bg-gradient-to-r from-black via-rose-500 to-black bg-clip-text text-transparent dark:from-rose-300 dark:via-pink-500 dark:to-rose-300"
              whileHover={{
                scale: [1, 1.1, 1.05],
                transition: {
                  duration: 0.4,
                  times: [0, 0.5, 1],
                  ease: "easeInOut",
                },
              }}
            >
              Ruma.dev
            </motion.div>
            <p className="text-muted-foreground">
              Building the future, one line of code at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground"
          >
            <p className="flex items-center justify-center space-x-1">
              <span>© {currentYear} Ruma Choudhury. Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </motion.span>
              <span>and lots of ☕</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
