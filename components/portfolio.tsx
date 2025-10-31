"use client"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Open Source Yearbook",
      description:
        "A collaborative, open-source platform where users can add their own profile, yearbook memories, and bio-data. Open for contributions to help it grow.",
      tags: ["Open Source", "Web Development", "React", "HTML/CSS/JS"],
      link: "https://github.com/Rucarido",
    },
    {
      id: 2,
      title: "Image Processing Pipeline",
      description:
        "A project demonstrating various image processing techniques, including grayscale conversion, negative imaging, edge detection, and more.",
      tags: ["Python", "Algorithms", "Image Processing"],
      link: "https://github.com/Rucarido",
    },
    {
      id: 3,
      title: "Basic SQL Injection Vulnerability Tester",
      description: "A foundational tool developed to test for basic SQL injection vulnerabilities.",
      tags: ["Cybersecurity", "SQL", "Python"],
      link: "https://github.com/Rucarido",
    },
  ]

  return (
    <section id="portfolio" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-foreground">My Projects</h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="group">
              <div className="h-full p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
