"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Server, Palette, Database, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Full Stack Development",
    description:
      "End-to-end web application development using the MERN stack with modern best practices and scalable architecture.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Mobile-first, responsive web applications that work seamlessly across all devices and screen sizes.",
  },
  {
    icon: Server,
    title: "API Development",
    description:
      "RESTful API design and development with proper authentication, validation, and documentation.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Efficient database schema design and optimization for MongoDB and other database systems.",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Converting designs into pixel-perfect, interactive user interfaces with smooth animations.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Website speed optimization, code splitting, and performance monitoring for better user experience.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your digital vision
            to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <service.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
