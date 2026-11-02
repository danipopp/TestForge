import { invoke } from "@tauri-apps/api/core"
import { open } from "@tauri-apps/plugin-dialog"

import type { Project } from "../features/project/project.types"

export async function createProject(
  name: string
): Promise<Project> {
  return await invoke<Project>(
    "create_project",
    { name }
  )
}

export async function selectProjectFolder(): Promise<string | null> {

  const selected = await open({
    directory: true,
    multiple: false,
  })

  return selected 
}

export async function saveProject(
  project: Project,
  projectPath: string,
): Promise<Project> {

  const savedProject = 
    await invoke<Project> (
      "save_project",
      {
        project,
        projectPath,
      }
    )
  return savedProject
}

export async function openProject(projectPath: string) : Promise<Project | null>{
  // Tell Rust which folder the user selected.
  const project = await invoke<Project>(
    "open_project", 
    {
      folderPath : projectPath,
    }
  )
  return project
}