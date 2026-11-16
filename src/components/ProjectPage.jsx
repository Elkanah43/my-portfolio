import { Link } from 'react-router-dom'

// One shape, used by every project page.
//
// Session 6, Part D says "Copy the first one and change five things. This is
// not laziness -- the shape is already right." This component IS that shape.
// Each page file in src/pages just hands it a different project.
//
// It also means the "Back to home" link can never be forgotten. Session 6
// opens by warning about a finished page with no way out of it.
export default function ProjectPage({ project }) {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Project</p>
        <h2>{project.title}</h2>
        <p className="lede">{project.summary}</p>

        {/*
          Session 6, Part F: the card class crops on purpose for the grid.
          On a detail page you want the whole picture, so this is a different
          job and gets its own class. No inline style needed.
        */}
        <img
          className="detail__image"
          src={project.image}
          alt={`${project.title} running`}
        />

        <div className="detail__block">
          <h3>What it does</h3>
          <p>{project.whatItDoes}</p>
        </div>

        <div className="detail__block">
          <h3>What I used</h3>
          <p>{project.whatIUsed}</p>
        </div>

        {/* The one nobody writes, and the one that sounds like a real builder. */}
        <div className="detail__block">
          <h3>What was hard</h3>
          <p>{project.whatWasHard}</p>
        </div>

        <Link className="button button-secondary detail__back" to="/">
          &larr; Back to home
        </Link>
      </div>
    </main>
  )
}
