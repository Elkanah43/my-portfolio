// Sits between About and Projects. Everything listed here is something the

const skills = [
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Responsive layout',
  'React Router',
  'Component design',
  'Git & GitHub',
  'Vite',
]

export default function Skills() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">What I'm working with</p>
        <h2>What I've learned so far</h2>
        <ul className="skills__list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
