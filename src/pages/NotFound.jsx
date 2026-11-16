import { Link } from 'react-router-dom'

// Session 6, Part I: "Page not found -- the path in Route and the path in Link
// are not identical." If that ever happens to a visitor, this is what they see
// instead of a blank screen.
export default function NotFound() {
  return (
    <main className="section">
      <div className="container notfound">
        <p className="eyebrow">404</p>
        <h2>That page is not here</h2>
        <p className="lede">
          The address might have a typo in it, or the page may have moved.
        </p>
        <Link className="button button-primary" to="/">
          &larr; Back to home
        </Link>
      </div>
    </main>
  )
}
