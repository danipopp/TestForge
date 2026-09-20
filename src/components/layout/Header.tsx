import type { Project } from "../../features/project/project.types"

interface HeaderProps {
  project: Project | null
  onSave: () => void
  onOpen: () => void
}

export function Header({
  project,
  onSave,
  onOpen
}: HeaderProps) {
  return (
    <header className="header">

      <h1>
        {project
          ? project.name
          : "No Project Open"}
      </h1>

      <button onClick={onOpen}>
        Open Project
      </button>

      <button onClick={onSave}>
        Save Project
      </button>

    </header>
  )
}