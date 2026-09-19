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
  parentPath: string,
): Promise<void> {
  await invoke (
    "save_project",
    {
      project,
      parentPath,
    }
  )
}