export default function About() {
  return (
    <section className="section section--tint" id="about">
      <div className="container about__grid">
        <div>
          <p className="eyebrow">About</p>
          <h2>Where I am right now</h2>
          <p className="lede">
            I'm a web development student on ERA AXIS's bootcamp. Every
            week ends with something that has to actually work, so I learn by
            building and breaking things rather than by reading about them. I
            write down what I got wrong each time, because that is the part I
            keep.
          </p>
        </div>

        <div>
          <p className="eyebrow">At a glance</p>
          <ul className="about__facts">
            <li>
              <strong>Studying</strong>
              <span>Web development at ERA AXIS</span>
            </li>
            <li>
              <strong>Focus</strong>
              <span>Front-end interfaces and responsive layout</span>
            </li>
            <li>
              <strong>Stack</strong>
              <span>React, JavaScript, HTML, CSS</span>
            </li>
            <li>
              <strong>Tooling</strong>
              <span>Git, GitHub, Vite, VS Code</span>
            </li>
            <li>
              <strong>Open to</strong>
              <span>Collaboration, feedback and junior opportunities</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
