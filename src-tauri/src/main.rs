#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

include!("utils/forge_utils.rs");

fn main() {
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
