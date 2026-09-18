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

