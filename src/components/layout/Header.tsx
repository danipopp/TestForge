import type { Project } from "../../features/project/project.types"

interface HeaderProps {
  project: Project | null
  onSave: () => void
}

export function Header({
  project,
  onSave
}: HeaderProps) {
  return (
    <header className="header">

      <h1>
        {project
          ? project.name
          : "No Project Open"}
      </h1>

      <button onClick={onSave}>
        Save Project
      </button>

    </header>
  )
}