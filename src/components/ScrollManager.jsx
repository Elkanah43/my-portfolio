import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Two jobs, both caused by the browser only doing this once per page load --
// and a single-page app never does a page load.
//
// 1. Jumping to #about. A plain <a href="/#about"> makes the browser scroll
//    BEFORE React has drawn the page, so it lands in the wrong place -- it
//    overshoots by a few hundred pixels and you end up past the section you
//    asked for. Doing it here means the page already exists when we scroll.
//
// 2. Going from the home page into a project. Without this you keep the scroll
//    position from the page you left, so a detail page opens half-way down.
//
// Not in the guide, but it is why the guide's navbar fix can feel broken.
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      let target = null
      try {
        target = document.querySelector(hash)
      } catch {
        // Not a usable selector. Fall through and go to the top.
      }
      if (target) {
        // scroll-margin-top on [id] in index.css keeps the sticky navbar clear.
        target.scrollIntoView({ block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
