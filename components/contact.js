import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram } from "lucide-react"

export default function Contact() {
  return (
    <div className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-semibold mb-8 text-center text-white">Get in Touch</h2>
        <div className="flex justify-center mb-8">
          <a
            href="https://www.instagram.com/ahooneusa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Instagram className="h-5 w-5" />
            <span>Follow us on Instagram</span>
          </a>
        </div>
        <form className="space-y-6">
          <div>
            <Input
              type="text"
              placeholder="Your Name"
              className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400"
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Project Type (Residential/Commercial)"
              className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400"
            />
          </div>
          <div>
            <Textarea
              placeholder="Tell us about your project requirements"
              rows={5}
              className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Submit Request
          </Button>
        </form>
      </div>
    </div>
  )
}

