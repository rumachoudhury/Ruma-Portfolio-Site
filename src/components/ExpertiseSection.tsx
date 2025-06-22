"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  // SiDocker,
} from "react-icons/si";
import { Star } from "lucide-react";
import Image from "next/image";

const technologies = [
  {
    name: "HTML5",
    icon: <SiHtml5 className="text-[#E34F26] dark:text-[#FF6F4A]" />,
    bg: "bg-orange-100 dark:bg-orange-900",
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="text-[#1572B6] dark:text-[#1E90FF]" />,
    bg: "bg-blue-100 dark:bg-blue-900",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-[#F7DF1E] dark:text-[#F7DF1E]" />,
    bg: "bg-yellow-100 dark:bg-yellow-800",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6] dark:text-[#60A5FA]" />,
    bg: "bg-blue-100 dark:bg-blue-800",
  },
  {
    name: "React",
    icon: <SiReact className="text-[#61DAFB] dark:text-[#61DAFB]" />,
    bg: "bg-cyan-100 dark:bg-cyan-900",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    bg: "bg-gray-200 dark:bg-gray-800",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-[#339933] dark:text-[#66BB6A]" />,
    bg: "bg-green-100 dark:bg-green-900",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-black dark:text-white" />,
    bg: "bg-gray-100 dark:bg-gray-900",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248] dark:text-[#81C784]" />,
    bg: "bg-green-100 dark:bg-green-900",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#38BDF8] dark:text-[#38BDF8]" />,
    bg: "bg-sky-100 dark:bg-sky-900",
  },
  {
    name: "Git",
    icon: <SiGit className="text-[#F05032] dark:text-[#F87171]" />,
    bg: "bg-red-100 dark:bg-red-900",
  },
  {
    name: "shadcn/ui",
    icon: (
      <Image
        src="/shadcn-logo.jpg"
        width={20}
        height={20}
        alt="shadcn/ui"
        className="w-5 h-5"
      />
    ),
    bg: "bg-black dark:bg-violet-900",
  },
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
                  {/* <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {tech.icon}
                  </motion.div> */}
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 ${tech.bg}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-3xl">{tech.icon}</span>
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
          {/* <h3 className="text-xl font-semibold mb-4">Always Learning</h3> */}

          <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2  text-blue-300">
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-5 h-5 text-yellow-500" />
            </motion.span>
            Always Learning
            <motion.span
              animate={{ rotate: [0, -20, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-5 h-5 text-yellow-500" />
            </motion.span>
          </h3>

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
