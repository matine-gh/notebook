import { useState } from "react";
import useTasks from "@/app/queries/useTasks";
import useTaskStore from "@/app/stores/useTaskStore";

export interface TaskInterface {
  checked?: boolean;
  title?: string;
  id?: string;
}

export default function AddTodo() {
  const { addTask } = useTasks();
  const { addTask: addLocalTask } = useTaskStore();
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");

  const addNewTask = () => {
    const newTask: TaskInterface = { id: Date.now().toString(), title: newTaskTitle, checked: false };
    addTask(newTask);
    addLocalTask(newTask);
  };

  return (
    <div>
      <label>task: </label>
      <input
        type={"text"}
        className={"border-2"}
        value={newTaskTitle}
        onChange={(event) => setNewTaskTitle(event.target.value)}
      />
      <button
        className={"bg-blue-500 disabled:bg-gray-500"}
        disabled={newTaskTitle === ""}
        onClick={() => addNewTask()}>
        add
      </button>
    </div>
  );
}
