import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

// Session 6, Part E: "<Link to='...'>" swaps out only the page part. No flash.
// Nothing reloads. An <a> tag inside a React Router app is dead weight.
export default function Projects() {
  return (
    <section className="section section--tint" id="work">
      <div className="container">
        <p className="eyebrow">Learning in public</p>
        <h2>What I&apos;ve built so far</h2>
        <p className="lede">
          Each one is a real page you can open, not a picture of a page. They are
          coursework, and they are all still getting better.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <img
                className="project-card__image"
                src={project.image}
                alt={project.title}
              />
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <Link className="text-link" to={project.path}>
                  View project &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
