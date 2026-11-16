import { Link } from 'react-router-dom'

// The navbar sits OUTSIDE <Routes> in App.jsx, so it shows on every page.
// (Session 6, Part C: "That is how one navbar serves your whole site.")
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link className="navbar__brand" to="/">
          {/* One logo file, in public/logo.png. Replace it with yours. */}
          <img className="navbar__logo" src="/logo.png" alt="" />
          Elkanah
        </Link>

        <nav>
          <ul className="navbar__links">
            {/*
              Session 6, Part E -- the navbar fix.

              These used to be href="#about" and href="#contact", which jump to
              a section on the page you are ALREADY on. From a detail page there
              is no About section, so nothing happened.

              The leading slash sends you home first, then jumps.

              These are <Link>, not <a>, for the reason Part E gives itself: an
              <a> tag inside a React Router app reloads the whole site and
              flashes white. <Link> swaps only the page part.
            */}
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#work">Work</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
