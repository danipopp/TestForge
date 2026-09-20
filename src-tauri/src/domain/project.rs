// We import two things from the `serde` crate:
//
// `Serialize`   -> allows Rust to convert our struct into JSON/data
// `Deserialize` -> allows Rust to create our struct from JSON/data
//
// We will need this later when we save and load project.json.
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Project {
    pub id: String,
    pub name: String,
    pub created_at: String,

    pub path: String, // Location of the project on the computer
}