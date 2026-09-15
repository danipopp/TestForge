// Wir importieren unseren eigenen `Project`-Datentyp.
//
// `crate` bedeutet:
// "Starte beim Root unseres Rust-Projekts."
use crate::domain::project::Project;

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