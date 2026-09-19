import { useState } from "react"
import type { Project } from "../project.types"
import { 
  createProject,
  selectProjectFolder,
  saveProject,
} from "../../../lib/tauri"

export function useProject() {
  const [project, setProject] =
    useState<Project | null>(null)

  async function create(name: string) {
    const newProject =
      await createProject(name)

    setProject(newProject)
  }

  async function save() {
    if (!project){
      return
    }
    const folder = await selectProjectFolder()

    if (!folder) {
      return
    }
    await saveProject(project, folder)
  }

  return {
    project,
    create,
    save,
  }
}