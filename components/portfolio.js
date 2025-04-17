"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "@/components/project-card";
import { useState } from "react";
import { projects } from "@/data/projects"; // global projects data
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [startIndex, setStartIndex] = useState(0);
  const projectsPerPage = 4;

  const handleNext = () => {
    if (startIndex + projectsPerPage < projects.length) {
      setStartIndex(startIndex + projectsPerPage);
    } else {
      // If at the end, wrap around to the beginning.
      setStartIndex(0);
    }
  };

  const handlePrev = () => {
    if (startIndex - projectsPerPage >= 0) {
      setStartIndex(startIndex - projectsPerPage);
    } else {
      // If at the beginning, wrap to the last page.
      const remainder = projects.length % projectsPerPage;
      if (remainder === 0) {
        setStartIndex(projects.length - projectsPerPage);
      } else {
        setStartIndex(projects.length - remainder);
      }
    }
  };

  const gridItems = projects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <div className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-6">
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold text-white">Our Projects</h2>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-300 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-300 hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          {/* Animate the grid changes */}
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex} // re-render with a new key to trigger animation
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {gridItems.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
}
