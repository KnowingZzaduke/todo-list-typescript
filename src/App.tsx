import "./App.css";
import { Task, idTask } from "../types/types";
import { TaskList } from "./components/TaskList";
import { FormCard } from "./components/FormCard";
import { useEffect, useState } from "react";

function App(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [validate, setValidate] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const [arrayIdTask, setArrayIdTask] = useState<string[]>([]);

  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  function addTask(
    e: React.FormEvent<HTMLFormElement>,
    {
      id,
      title,
      description,
      completed,
    }: Pick<Task, "id" | "title" | "description" | "completed">
  ) {
    e.preventDefault();
    if (title === "" || description === "") {
      setValidate(true);
      return;
    } else {
      setValidate(false);
    }
    const newTasks: Task = {
      id,
      title,
      description,
      completed,
    };
    setTasks([...tasks, newTasks]);
  }

  function isCompleted(name: string) {
    if (name) {
      setArrayIdTask((prevArrayIdTask) => {
        if (!prevArrayIdTask.includes(name)) {
          return [...prevArrayIdTask, name];
        }
        return prevArrayIdTask;
      });
    }
    return setCompleted(!completed);
  }

  function deleteTask(id: idTask) {
    if(id){
      const filterTask = tasks.filter((task) => id !== task.id)
      if(filterTask.length < tasks.length){
        setTasks(filterTask);
        console.log("se borró")
      }
    }
  }
  return (
    <div className="content_all-components">
      <h1>Task List</h1>
      <FormCard addTask={addTask} validate={validate} />
      <TaskList
        tasks={tasks}
        isCompleted={isCompleted}
        completed={completed}
        arrayIdTask={arrayIdTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
