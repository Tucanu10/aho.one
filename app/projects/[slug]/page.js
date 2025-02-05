import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects"; // global projects data

export default function ProjectPage({ params }) {
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/#portfolio"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Image */}
          <div className="md:w-1/2">
            <Image
              src={project.image || "/placeholder.png"}
              alt={project.title}
              width={1200}
              height={675}
              className="rounded-lg object-cover w-full"
            />
          </div>
          {/* Right Side - Text Content */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-xl text-zinc-300 mb-2">{project.category}</p>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <div className="prose prose-invert max-w-none">
              <p>{project.description}</p>
              {/* You can add more details here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
