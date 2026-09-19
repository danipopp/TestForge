mod commands;
mod domain;

use commands::project::{
    create_project,
    save_project,
};

// Das ist der Einstiegspunkt unserer Tauri-Anwendung.
//
// `cfg_attr` sorgt dafür, dass Tauri bei einem Mobile-Build
// die passende Entry-Point-Konfiguration verwendet.
//
// Für unser Desktop-Projekt musst du dir darum
// zunächst keine Gedanken machen.
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    // `tauri::Builder` erstellt unsere Tauri-Anwendung.
    //
    // `.default()` startet mit den Standard-Einstellungen.
    tauri::Builder::default()

        // Enable the Tauri dialog plugin.
        // This gives our frontend access to native dialogs
        // such as the folder-selection dialog.
        .plugin(tauri_plugin_dialog::init())
        
        // Hier registrieren wir unsere Rust-Funktionen,
        // die von React aufgerufen werden dürfen.
        .invoke_handler(
            tauri::generate_handler![
                create_project,
                save_project
            ]
        )

        // Erstellt den Tauri Application Context
        // aus unserer tauri.conf.json usw.
        .run(
            tauri::generate_context!()
        )

        // Wenn beim Starten ein Fehler passiert,
        // soll die Anwendung mit einer Fehlermeldung
        // beendet werden.
        .expect("error while running TestForge");
}