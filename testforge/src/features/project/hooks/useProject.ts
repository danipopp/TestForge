import { useState } from "react"
import type { Project } from "../project.types"
import { createProject } from "../../../lib/tauri"

export function useProject() {
  const [project, setProject] =
    useState<Project | null>(null)

  async function create(name: string) {
    const newProject =
      await createProject(name)

    setProject(newProject)
  }

  return {
    project,
    create
  }
}