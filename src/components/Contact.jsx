export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact__card">
          <p className="eyebrow">Contact</p>
          <h2>Get in touch</h2>
          <p className="lede">
            I'm learning front-end development and I'm open to collaboration,
            honest feedback, and junior opportunities. Tell me what you're
            working on and I'll tell you honestly whether I can help.
          </p>

          <div className="contact__links">
            <a
              className="button button-primary"
              href="mailto:elkanah.oak@gmail.com"
            >
              Email me
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/Elkanah43"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="button button-secondary"
              href="https://linkedin.com/in/oware-kofi-appianing"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
