import { useState } from 'react'
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

export default function Hero() {
  const [count, setCount] = useState(0)

  return (
    <section id="center">
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={reactLogo} className="framework" alt="React logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>
      <div>
        <h1 className="my-heading">Hi, I'm Elkanah.</h1>
        <p>
          I'm a beginner front-end developer learning to build clean,
          user-friendly web apps with React. Every project I take on teaches me
          something new, and I love seeing ideas come to life one component at
          a time.
        </p>
      </div>
      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </section>
  )
}