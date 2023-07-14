type idTask = `${string}-${string}-${string}-${string}`;
export interface Task {
  id: idTask;
  title: string;
  description: string;
  completed: true | false
}
