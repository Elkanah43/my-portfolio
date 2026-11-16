export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          &copy; {new Date().getFullYear()} Elkanah &middot; Built with React and
          Vite
        </span>
        <a href="https://github.com/Elkanah43" target="_blank" rel="noreferrer">
          github.com/Elkanah43
        </a>
      </div>
    </footer>
  )
}
