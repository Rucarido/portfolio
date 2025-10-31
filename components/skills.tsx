export default function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["Python", "C", "C++", "Java"],
    },
    {
      name: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "SQL"],
    },
    {
      name: "Core Competencies",
      skills: ["Problem Solving", "Critical Thinking", "Cybersecurity Fundamentals"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-foreground">Skills & Expertise</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">{category.name}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-card rounded-lg border border-primary/20 text-foreground hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
