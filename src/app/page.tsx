"use client";
import AddTodo, { TaskInterface } from "@/app/components/AddTodo";
import useTasks from "@/app/queries/useTasks";
import useTaskStore from "@/app/stores/useTaskStore";

export default function Home() {
  const { tasks: serverTasks, isPending, editTask, error } = useTasks();
  const { editTask: editLocalTask } = useTaskStore();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error?.message;

  const handleEditTask = (item: TaskInterface) => {
    const editedTask: TaskInterface = { ...item, checked: true };
    editTask(editedTask);
    editLocalTask(editedTask);
  };
  return (
    <div>
      <AddTodo />
      <ul>
        {serverTasks.map((item: TaskInterface) => {
          return (
            <li key={item.id}>
              <input type="checkbox" checked={item.checked} onChange={() => handleEditTask(item)} />
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
