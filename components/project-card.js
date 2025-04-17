import Image from "next/image"
import Link from "next/link"

export default function ProjectCard({ category, title, image }) {
  return (
    <Link
      href={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}
      className="block group relative overflow-hidden rounded-2xl aspect-[4/3] transition-transform duration-300 hover:scale-105"
    >
      <Image
        src={image || "/placeholder.png"}
        alt={title}
        width={800}
        height={600}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className={`absolute inset-0 bg-gradient-to-br from-slate-300 via-slate-400 opacity-60 mix-blend-multiply`} />
      <div className="absolute inset-0 p-6 flex flex-col">
        <span className="text-sm text-black/90 font-bold">{category}</span>
        <div className="flex-1 flex items-center justify-center" />
        <h3 className="text-xl font-semibold text-black/90 group-hover:text-red-700/90">{title}</h3>
      </div>
    </Link>
  )
}

