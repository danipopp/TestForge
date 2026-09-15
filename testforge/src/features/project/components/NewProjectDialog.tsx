import { useState } from "react"

interface Props {
  onCreate: (name: string) => void
  onClose: () => void
}

export function NewProjectDialog({
  onCreate,
  onClose
}: Props) {

  const [name, setName] = useState("")

  function handleSubmit() {

    if (!name.trim()) {
      return
    }

    onCreate(name)
    onClose()
  }

  return (
    <div className="dialog-backdrop">

      <div className="dialog">

        <h2>New Project</h2>

        <input
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          placeholder="Project name"
          autoFocus
        />

        <div className="dialog-actions">

          <button onClick={onClose}>
            Cancel
          </button>

          <button onClick={handleSubmit}>
            Create Project
          </button>

        </div>

      </div>

    </div>
  )
}