import mePhoto from '../assets/images/me.jpg'

export default function Hero() {
  return (
    <section className="section">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Learning front-end development</p>

          <h1 className="hero__title">
            Hi, I&apos;m <span>Elkanah</span>.
          </h1>

          <p className="hero__text">
            I&apos;m learning to build front-end interfaces with React and
            JavaScript. Every project here started as an empty file and something
            I did not yet know how to do. I am at the start of this, and I would
            rather show you real work in progress than pretend otherwise.
          </p>

          <div className="hero__actions">
            <a className="button button-primary" href="#contact">
              Get in touch
            </a>
            <a className="text-link" href="#work">
              See my work &rarr;
            </a>
          </div>
        </div>

        {/* Replace src/assets/images/me.jpg with your own photo. */}
        <img className="hero__photo" src={mePhoto} alt="Elkanah" />
      </div>
    </section>
  )
}
