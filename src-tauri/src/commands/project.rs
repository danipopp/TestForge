// Wir importieren unseren eigenen `Project`-Datentyp.
//
// `crate` bedeutet:
// "Starte beim Root unseres Rust-Projekts."
use crate::{domain::project::Project};

// `#[tauri::command]` ist ein spezielles Tauri-Makro.
//
// Dadurch weiß Tauri:
//
// "Diese Rust-Funktion darf vom React/TypeScript-Frontend
//  aufgerufen werden."
//
// Genau das ist die Brücke zwischen:
//
// React/TypeScript
//        ↓
//      Tauri
//        ↓
//       Rust
//
#[tauri::command]
pub fn create_project(name: String) -> Project {
     // Wir erzeugen hier ein neues Project-Objekt.
    //
    // `Project { ... }` bedeutet:
    // Erzeuge eine Instanz unseres `Project` structs.
    Project {
        id: uuid::Uuid::new_v4().to_string(),
        name,
        created_at: chrono::Utc::now().to_rfc3339(),
    }
}

#[tauri::command]
pub fn save_project(project: Project, parent_path: String) -> Result<(), String> {
    let parent_path = std::path::PathBuf::from(parent_path);
    let project_path = parent_path.join(&project.name);

    std::fs::create_dir_all(&project_path).map_err(|error| error.to_string())?;
    std::fs::create_dir_all(project_path.join("data")).map_err(|error| error.to_string())?;
    std::fs::create_dir_all(project_path.join("results")).map_err(|error| error.to_string())?;
    std::fs::create_dir_all(project_path.join("reports")).map_err(|error| error.to_string())?;

    let json = serde_json::to_string_pretty(&project).map_err(|error| error.to_string())?;
    let project_file = project_path.join("project.json");
    std::fs::write(&project_file,json).map_err(|error| error.to_string())?;
    Ok(())
}

#[tauri::command]
pub fn open_project(folder_path: String) -> Result<Project, String> {
    // Convert the String we received from JavaScript
    // into a PathBuf.
    //
    // PathBuf is Rust's type for working with file paths.
    let folder_path = std::path::PathBuf::from(folder_path);

    // Add "project.json" to the selected project folder.
    let project_file = folder_path.join("project.json");

    // Read the entire project.json file as text.
    let json = std::fs::read_to_string(&project_file)
        .map_err(|error| error.to_string())?;

    // Convert the JSON text into our Rust Project struct.
    let project: Project = serde_json::from_str(&json)
        .map_err(|error|error.to_string())?;

    Ok(project)
}