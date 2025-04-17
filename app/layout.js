import "./globals.css"
import Header from "../components/header"

export const metadata = {
  title: "Aho One | Architectural Design & Drafting",
  description: "Expert architectural drafting and design services",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0A0A0A] text-zinc-100 antialiased">
        <Header />
        {children}
      </body>
    </html>
  )
}

