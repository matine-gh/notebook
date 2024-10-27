import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { TaskInterface } from "@/app/components/AddTodo";

const useTasks = () => {
  const queryClient = useQueryClient();

  const taskQuery = useQuery({
    queryKey: ["getTodos"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/tasks");
      return response.data;
    },
  });

  const addTaskMutation = useMutation({
    mutationKey: ["test"],
    mutationFn: async (newTodo: TaskInterface) => {
      return await axios.post("http://localhost:3000/tasks", newTodo, {
        timeout: Number(500),
      });
    },
    onSuccess: async (newTodo: any) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ["getTodos"] });
      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData(["getTodos"]);

      // await queryClient.invalidateQueries({queryKey: ['getTodos']})
      // Optimistically update to the new value

      queryClient.setQueryData(["getTodos"], (old: any) => [...old, newTodo.data]);

      // Return a context object with the snapshotted value
      return { previousTodos };
    },
    onError: async () => {
      await queryClient.invalidateQueries({ queryKey: ["getTodos"] });
    },
  });

  const editTaskMutation = useMutation({
    mutationKey: ["editTaskMutation"],
    mutationFn: async (editedTask: TaskInterface) => {
      return await axios.patch(`http://localhost:3000/tasks/${editedTask.id}`, editedTask);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
  });

  return {
    tasks: taskQuery.data,
    isPending: taskQuery.isPending,
    error: taskQuery.error,
    addTask: addTaskMutation.mutate,
    editTask: editTaskMutation.mutate,
  };
};
export default useTasks;
