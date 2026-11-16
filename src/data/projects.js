// Say it once. (Session 5, Part E.)
//
// Every project lives here ONCE: its name, its picture, its address.
// The home page grid reads this. The detail pages read this. The routes in
// App.jsx read this.
//
// That matters because Session 6, Part I lists the most common bug as
// "the path in Route and the path in Link are not identical". If the path is
// only typed in one place, that bug cannot happen.
//
// ---------------------------------------------------------------------------
// TO DO: this is placeholder text. Replace the titles, the summaries and the
// three long answers on each detail page with your own words.
// The pictures already have the right names -- see src/assets/images/projects/.
// ---------------------------------------------------------------------------

import project01 from '../assets/images/projects/project-01.png'
import project02 from '../assets/images/projects/project-02.png'
import project03 from '../assets/images/projects/project-03.png'

export const projects = [
  {
    slug: 'project-01',
    title: 'Project One',
    path: '/projects/project-01',
    image: project01,
    // One line, for the card on the home page.
    summary: 'One plain sentence describing what this does and who it is for.',
    // Long answers, for the detail page. Session 6, Part D.
    whatItDoes: 'Write it here. Plain words, not buzzwords.',
    whatIUsed: 'Write it here. The stack, honestly.',
    whatWasHard: 'Write it here. The thing that fought back.',
  },
  {
    slug: 'project-02',
    title: 'Project Two',
    path: '/projects/project-02',
    image: project02,
    summary: 'One plain sentence describing what this does and who it is for.',
    whatItDoes: 'Write it here. Plain words, not buzzwords.',
    whatIUsed: 'Write it here. The stack, honestly.',
    whatWasHard: 'Write it here. The thing that fought back.',
  },
  {
    slug: 'project-03',
    title: 'Project Three',
    path: '/projects/project-03',
    image: project03,
    summary: 'One plain sentence describing what this does and who it is for.',
    whatItDoes: 'Write it here. Plain words, not buzzwords.',
    whatIUsed: 'Write it here. The stack, honestly.',
    whatWasHard: 'Write it here. The thing that fought back.',
  },
]

// Used by the navbar and the footer, so the count is never wrong.
export const projectCount = projects.length
