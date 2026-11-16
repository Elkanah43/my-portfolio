import ProjectPage from '../components/ProjectPage'
import { projects } from '../data/projects'

// MorningNotes.jsx in the guide. Same two moves, forever: a file, and one line
// in the routes. Rename this file when you have a real project name.
export default function ProjectOne() {
  return <ProjectPage project={projects[0]} />
}
