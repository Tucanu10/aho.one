import { ChevronLeft, ChevronRight } from "lucide-react"
import ProjectCard from "@/components/project-card"

const projects = [
  {
    id: 1,
    category: "AI Strategy",
    title: "Enterprise AI Transformation",
    gradient: "from-blue-500 via-blue-600 to-blue-700",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    category: "Machine Learning",
    title: "Predictive Analytics Platform",
    gradient: "from-purple-500 via-purple-600 to-purple-700",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    category: "Computer Vision",
    title: "Automated Quality Control",
    gradient: "from-amber-500 via-orange-600 to-orange-700",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    category: "NLP",
    title: "Intelligent Document Processing",
    gradient: "from-sky-400 via-sky-500 to-sky-600",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto">
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold text-white">Featured Projects</h2>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-300 hover:text-white">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-300 hover:text-white">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

