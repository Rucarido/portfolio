export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground">About Me</h2>

        <div className="space-y-12">
          {/* Bio */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary">Bio</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Heya! I am Aakash, pursuing electronics and computer engineering at VIT Chennai and currently at my
              sophomore year! I have a burning passion towards coding and I love to explore difficult problem statements
              from it and mess with my mind and push it towards its limit. With a basic knowledge in cybersecurity and
              well versed knowledge in core coding languages, I have a keen interest on understanding frontend and
              backend development that would help me in deploying software that might resolve people's issues by aiding
              them.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Alongside this I have my passive interests in cricket, geopolitics, playing games and watching movies that
              will keep me energetic and motivated too without burning myself out!
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary">Education</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6">
                <h4 className="text-lg font-semibold text-foreground">B.Tech Electronics and Computer Engineering</h4>
                <p className="text-primary font-medium">VIT Chennai</p>
                <p className="text-muted-foreground">Expected Graduation: 2028</p>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <h4 className="text-lg font-semibold text-foreground">
                  Higher Secondary (PCMC)
                </h4>
                <p className="text-muted-foreground">Graduated: 2024 (97% Score)</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary">Experience</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-accent pl-6">
                <h4 className="text-lg font-semibold text-foreground">Program Representative</h4>
                <p className="text-muted-foreground">VIT Chennai</p>
                <p className="text-muted-foreground mt-2">
                  Aided in facilitating smooth communications between students and faculties, ensuring their needs were
                  adhered to.
                </p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <h4 className="text-lg font-semibold text-foreground">Cybersecurity Internship</h4>
                <p className="text-muted-foreground">Online</p>
                <p className="text-muted-foreground mt-2">Learned and understood the basics of cybersecurity.</p>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="p-6 bg-secondary/20 rounded-lg border border-primary/20">
            <p className="text-lg text-foreground italic">
              "A group player with a keen motive of making everyone participate to bring out a good and useful product."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
