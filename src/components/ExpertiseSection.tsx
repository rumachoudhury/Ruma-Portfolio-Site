"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const technologies = [
  { name: "HTML5", icon: "🌐", color: "from-orange-400 to-orange-600" },
  { name: "CSS3", icon: "🎨", color: "from-blue-400 to-blue-600" },
  { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-yellow-600" },
  { name: "TypeScript", icon: "📘", color: "from-blue-500 to-blue-700" },
  { name: "React", icon: "⚛️", color: "from-cyan-400 to-cyan-600" },
  { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
  { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
  { name: "Express.js", icon: "🚀", color: "from-gray-600 to-gray-800" },
  { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-700" },
  { name: "Tailwind CSS", icon: "💨", color: "from-teal-400 to-teal-600" },
  { name: "Git", icon: "📚", color: "from-red-400 to-red-600" },
  { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-600" },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="h-full cursor-pointer group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Always Learning</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            The tech world evolves rapidly, and I&apos;m committed to staying
            current with the latest trends and best practices. I regularly
            explore new frameworks, tools, and methodologies to deliver
            cutting-edge solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
