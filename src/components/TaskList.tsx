import { useState } from "react";
import { Task } from "../../types/types";

type TaskListProps = {
  tasks: Task[];
  completed: boolean
  isCompleted: (id: string) => void
  arrayIdTask: string[]
};

export function TaskList({ tasks, completed, isCompleted, arrayIdTask }: TaskListProps) {
  return (
    <div className="content_tasks">
      <h2>All tasks</h2>
      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task.id} className={`${arrayIdTask.includes(task.id) ? "tasks_c" : ""}`}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <div className="content_gears">
              <button onClick={() => isCompleted(task.id)}>Completado</button>
              <button>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
