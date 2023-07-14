import { useState } from "react";
import { Task} from "../../types/types";
interface Props {
  validate: boolean;
  addTask: (
    e: React.FormEvent<HTMLFormElement>,
    taskData: Pick<Task, "id" | "title" | "description" | "completed">
  ) => void;
}
export function FormCard({ addTask, validate }: Props) {
  const [titleT, setTitle] = useState("");
  const [descriptionT, setDescription] = useState("");
  return (
    <>
      <form
        className="form_add-task"
        onSubmit={(e) => {
          addTask(e, {
            id: crypto.randomUUID(),
            title: titleT,
            description: descriptionT,
            completed: false
          });
        }}
      >
        <div className="content_inputs">
          <label>Tareas</label>
          <input
            id="name_taks"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titulo de la tarea"
          />
          <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Descripción de la tarea"/>
        </div>
        <div className="content_send-button">
          <button>Agregar tarea</button>
        </div>
        <p className={`validate_n ${validate ? "validate_v" : ""}`}>
          Ninguno de los campos puede quedar vacío
        </p>
      </form>
    </>
  );
}
