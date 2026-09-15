import type { Project } from "../../features/project/project.types"

interface HeaderProps {
  project: Project | null
}

export function Header({
  project
}: HeaderProps) {
  return (
    <header className="header">

      <h1>
        {project
          ? project.name
          : "No Project Open"}
      </h1>

    </header>
  )
}