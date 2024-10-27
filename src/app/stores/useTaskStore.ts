import { create } from "zustand";
import { TaskInterface } from "@/app/components/AddTodo";

interface StoreInterface {
  tasks: TaskInterface[];
  addTask: (task: TaskInterface) => void;
  editTask: (editedTask: TaskInterface) => void;
}
const useTaskStore = create<StoreInterface>((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  editTask: (editedTask) =>
    set((state) => ({ tasks: state.tasks.map((task) => (task.id === editedTask.id ? editedTask : task)) })),
}));

export default useTaskStore;
