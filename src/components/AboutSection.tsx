"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  // const handleDownloadResume = () => {
  //   // Replace with actual resume download logic
  //   console.log("Downloading resume...");
  // };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {" "}
            More About Me
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for web
            development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            {/* <Card className="overflow-hidden"> */}
            <CardContent className="p-0">
              <Image
                src="/myImage.jpg"
                alt="Ruma"
                width={500}
                height={500}
                className="object-cover rounded-full border border-amber-400 h-[600px]"
              />
            </CardContent>
            {/* </Card> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="sm:text-lg lg:text-2xl font-semibold   bg-slate-800 text-white inline-block">
              Hello! I&apos;m Ruma Choudhury
            </h3>

            <div className="space-y-4 text-muted-foreground">
              {/* <p>
                I&apos;m a passionate MERN Stack Developer with over 2 years of
                experience in creating dynamic and responsive web applications.
                My journey in web development started with a curiosity about how
                websites work, and it has evolved into a deep passion for
                building scalable and user-friendly applications.
              </p> */}
              <p>
                I&apos;m a passionate MERN Stack Developer with hands-on
                experience in building responsive and dynamic web
                applications.My journey into web development began with a simple
                curiosity about how websites work — and over time, that
                curiosity turned into a deep love for creating clean, scalable,
                and user-friendly digital experiences.
              </p>
              <p>
                I specialize in the MERN stack (MongoDB, Express.js, React,
                Node.js) and have extensive experience with modern development
                tools and practices. I love turning complex problems into
                simple, beautiful, and intuitive solutions.
              </p>
              <p>
                When I&apos;m not coding, I love exploring new technologies,
                learning from the developer community, and sharing my own
                insights through blog posts and open-source contributions.
              </p>

              <p>
                🏡 I enjoy working remotely — it allows me to stay close to my
                family while doing the work I love.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div>
                <h4 className="font-semibold text-primary mr-2">✨ 20+</h4>
                <p
                  // className="text-sm text-muted-foreground"
                  className="text-sm  text-blue-500 "
                >
                  Projects Completed
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">📆 2+</h4>
                <p
                  // className="text-sm text-muted-foreground"
                  className="text-sm  text-blue-500 "
                >
                  Years of Practical Experience
                </p>
              </div>
              {/* <div>
                <h4 className="font-semibold text-primary">25+</h4>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div> */}
              {/* <div>
                <h4 className="font-semibold text-primary">100%</h4>
                <p className="text-sm text-muted-foreground">
                  Client Satisfaction
                </p>
              </div> */}
            </div>
            <Link
              href={
                "https://drive.google.com/file/d/1FFcYuVKVPb7Kq9ESLfkelXcQBXC8fiUN/view?usp=sharing"
              }
              download
              target="_blank"
            >
              <Button
                // onClick={handleDownloadResume}
                className="w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
