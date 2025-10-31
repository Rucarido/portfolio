export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-foreground text-center">Let's Connect</h2>

        <div className="space-y-8 text-center">
          <p className="text-xl text-muted-foreground">
            Whether you have a question, a project idea, or just want to talk about tech (or cricket), feel free to
            reach out.
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Email</p>
              <a
                href="mailto:aakashhariram22@gmail.com"
                className="text-primary font-semibold text-lg hover:text-primary/80 transition-colors break-all"
              >
                aakashhariram22@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">GitHub</p>
              <a
                href="https://github.com/Rucarido"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold text-lg hover:text-primary/80 transition-colors inline-flex items-center gap-2"
              >
                github.com/Rucarido
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h3.586L9.293 9.293a1 1 0 001.414 1.414L16 6.414V10a1 1 0 102 0V4a1 1 0 00-1-1h-6z" />
                  <path d="M5 5a2 2 0 012-2h6a1 1 0 000-2H7a4 4 0 000 8h6a1 1 0 000-2H7a2 2 0 01-2-2V5z" />
                </svg>
              </a>
            </div>
          </div>

          <a
            href="mailto:aakashhariram22@gmail.com"
            className="inline-block mt-8 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  )
}
