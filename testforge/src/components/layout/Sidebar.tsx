interface SidebarProps {
  onNewProject: () => void
}

export function Sidebar({
  onNewProject
}: SidebarProps) {
  return (
    <aside className="sidebar">

      <div className="logo">
        TestForge
      </div>

      <button
        className="new-project-button"
        onClick={onNewProject}
      >
        + New Project
      </button>

      <nav>
        <button>Projects</button>
        <button>Data</button>
        <button>Rules</button>
        <button>Results</button>
      </nav>

    </aside>
  )
}