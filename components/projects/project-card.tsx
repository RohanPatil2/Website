"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
  delay?: number;
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-6 max-w-sm bg-background border border-border rounded-lg transition-all duration-300 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative w-full h-[200px] overflow-hidden rounded-lg">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-full"
        >
          <Image
            className="rounded-lg border border-border object-cover"
            src={project.companyLogoImg}
            alt={project.companyName}
            fill
          />
        </motion.div>
      </div>

      <div className="pt-5 space-y-3 relative z-10">
        <motion.h5
          className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {project.companyName}
        </motion.h5>

        <p className="line-clamp-3 font-normal text-muted-foreground">
          {project.shortDescription}
        </p>

        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>

        <Link href={`/projects/${project.id}`}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant={"default"} className="mt-2 group/btn">
              Read more
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="inline-block"
              >
                <Icons.chevronRight className="w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
              </motion.span>
            </Button>
          </motion.div>
        </Link>
      </div>

      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="absolute bottom-4 right-4 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg"
      >
        {project.type === "Personal" ? (
          <Icons.userFill className="h-4 w-4 text-primary" />
        ) : (
          <Icons.work className="h-4 w-4 text-primary" />
        )}
      </motion.div>
    </motion.div>
  );
}
