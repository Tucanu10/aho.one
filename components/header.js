"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;
    
    const links = document.querySelectorAll("a[href^='#']");
    
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const yOffset = -80; // Adjust this value based on your header height
        const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
        
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      
      setIsOpen(false); // Close the menu after clicking a link
    };

    links.forEach(link => link.addEventListener("click", smoothScroll));
    
    return () => links.forEach(link => link.removeEventListener("click", smoothScroll));
  }, [isHomePage]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/ahoone.png"
            alt="Aho One"
            width={50}
            height={50}
            className="rounded-mg"
          />
          <span className="text-xl font-semibold text-white"></span>
        </Link>
        <button className="md:hidden text-white p-2  rounded-full " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
        <nav className={`${isOpen ? "block" : "hidden"} absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent md:flex md:items-center md:space-x-8 p-4 md:p-0` }>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center">
            <li>
              <Link href={isHomePage ? "#home" : "/#home"} className="text-sm text-zinc-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href={isHomePage ? "#portfolio" : "/#portfolio"} className="text-sm text-zinc-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href={isHomePage ? "#about" : "/#about"} className="text-sm text-zinc-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href={isHomePage ? "#contact" : "/#contact"} className="text-sm text-zinc-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
