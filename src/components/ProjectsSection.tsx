"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

// const projects = [
//   {
//     title: "E-Commerce Platform",
//     description:
//       "A full-featured e-commerce platform with user authentication, payment integration, and admin dashboard.",
//     image: "/placeholder.svg?height=300&width=500",
//     technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
//   {
//     title: "Task Management App",
//     description:
//       "A collaborative task management application with real-time updates and team collaboration features.",
//     image: "/placeholder.svg?height=300&width=500",
//     technologies: [
//       "Next.js",
//       "TypeScript",
//       "Socket.io",
//       "MongoDB",
//       "Framer Motion",
//     ],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
//   {
//     title: "Social Media Dashboard",
//     description:
//       "Analytics dashboard for social media management with data visualization and reporting features.",
//     image: "/placeholder.svg?height=300&width=500",
//     technologies: ["React", "Express.js", "Chart.js", "MongoDB", "Material-UI"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
//   {
//     title: "Real Estate Platform",
//     description:
//       "Property listing platform with advanced search, filters, and virtual tour integration.",
//     image: "/placeholder.svg?height=300&width=500",
//     technologies: ["Next.js", "Node.js", "MongoDB", "Mapbox", "Tailwind CSS"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
//   {
//     title: "Learning Management System",
//     description:
//       "Educational platform with course management, video streaming, and progress tracking.",
//     image: "/placeholder.svg?height=300&width=500",
//     technologies: ["React", "Node.js", "MongoDB", "AWS S3", "Redux"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
//   {
//     title: "Weather App",
//     description:
//       "Beautiful weather application with location-based forecasts and interactive maps.",
//     image: "/placeholder.svg?height=300&width=500",
//     technologies: ["React", "OpenWeather API", "Leaflet", "Tailwind CSS"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
// ];

const projects = [
  {
    title: "High Paid Jobs",
    description: "Job portal built with Next.js and TypeScript.",
    image: "/high-paid-job.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://high-paid-jobs-one.vercel.app",
    githubUrl: "https://github.com/rumachoudhury/high-paid-jobs",
  },
  {
    title: "Scale Startup Project",
    description: "Startup-focused landing page using TypeScript.",
    image: "/scale-startup.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://scale-startup-project-txlg.vercel.app/",
    githubUrl: "https://github.com/rumachoudhury/scale-startup-project",
  },
  {
    title: "Digital Tech Hub",
    description:
      "A full-stack e-commerce platform featuring product search, user authentication, cart functionality, and secure checkout with payment integration.",
    image: "/digital-tech-hub.png",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "shadcn/ui",
    ],
    liveUrl: "https://digital-tech-hub.vercel.app/",
    githubUrl: "https://github.com/rumachoudhury/digital-tech-hub",
  },

  {
    title: "Fresh Bucket",
    description: "Online grocery store with shopping cart functionality.",
    image: "/fresh-bucket.png",
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://splendorous-monstera-13bfe5.netlify.app/",
    githubUrl: "https://github.com/rumachoudhury/Fresh-Bucket",
  },
  {
    title: "Bootstrap-Fruit-burst-project",
    description:
      "Responsive Bootstrap project with multiple pages showcasing HTML, CSS, and images.",
    image: "/bootstrap-fruit-burst.png",
    technologies: ["Bootstrap", "HTML", "CSS"],
    liveUrl: "https://loquacious-nougat-c8f43d.netlify.app/",
    githubUrl: "https://github.com/rumachoudhury/Bootstrap-Fruit-burst-project",
  },

  {
    title: " E-Commerce Platform ",
    description:
      "A frontend-focused e-commerce platform showcasing product display and pricing.",
    image: "/ecommerce-project.png",
    technologies: ["React", "sass"],
    liveUrl:
      "https://ecommerce-sass-project-git-main-ruma-choudhurys-projects.vercel.app/",
    githubUrl: "https://github.com/rumachoudhury/ecommerce-sass-project",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I&#39;ve used to
            build them
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    // src={project.image || "/placeholder.svg"}
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
