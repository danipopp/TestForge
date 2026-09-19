import { useState } from "react"

import {
  AppLayout
} from "../components/layout/AppLayout"

import {
  Sidebar
} from "../components/layout/Sidebar"

import {
  Header
} from "../components/layout/Header"

import {
  NewProjectDialog
} from "../features/project/components/NewProjectDialog"

import {
  useProject
} from "../features/project/hooks/useProject"

export default function App() {

  const [showNewProject, setShowNewProject] =
    useState(false)

  const {
    project,
    create,
    save
  } = useProject()

  return (
    <>

      <AppLayout

        sidebar={
          <Sidebar
            onNewProject={() =>
              setShowNewProject(true)
            }
          />
        }

        header={
          <Header
            project={project}
            onSave={save}
          />
        }
      >

        {project ? (

          <div>

            <h2>
              {project.name}
            </h2>

            <p>
              Your engineering test project
              is ready.
            </p>

          </div>

        ) : (

          <div className="empty-state">

            <h2>
              Welcome to TestForge
            </h2>

            <p>
              Create or open a project
              to get started.
            </p>

            <button
              onClick={() =>
                setShowNewProject(true)
              }
            >
              New Project
            </button>

          </div>

        )}

      </AppLayout>

      {showNewProject && (

        <NewProjectDialog

          onCreate={create}

          onClose={() =>
            setShowNewProject(false)
          }

        />

      )}

    </>
  )
}