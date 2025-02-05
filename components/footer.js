import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-4 mb-4">
          <a
            href="https://www.instagram.com/ahooneusa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Aho One USA. All rights reserved.</p>
      </div>
    </footer>
  )
}

