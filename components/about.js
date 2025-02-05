export default function About() {
  return (
    <div className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-red-400">Technical Excellence</h3>
            <p className="text-zinc-300">
              Delivering precise architectural drawings and detailed technical documentation for residential and
              commercial projects.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Design Innovation</h3>
            <p className="text-zinc-300">
              Combining traditional drafting expertise with modern design tools to create comprehensive architectural
              solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-400">Client Focus</h3>
            <p className="text-zinc-300">
              Working closely with clients to understand their vision and deliver exceptional results through meticulous
              attention to detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

