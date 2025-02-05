"use client"
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto text-white [text-wrap:balance]">
          Excellence in Architectural Design & Drafting
        </h1>
        <p className="text-xl md:text-2xl text-zinc-200 mb-8 max-w-2xl mx-auto">
          Bringing architectural visions to life with precision, expertise, and dedication across the United States.
        </p>

        {/* Wrap the Button in Link */}
        <Link href="#portfolio" passHref legacyBehavior>
          <a onClick={() => setTimeout(() => window.history.pushState({}, "", "#portfolio"), 0)}>
            <Button
              size="lg"
              variant="outline"
              className="group bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/30 text-white"
            >
              View Our Portfolio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </Link>
      </div>

      {/* Global CSS for smooth scrolling */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
}
