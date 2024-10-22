import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface TodoInterface {
  completed: boolean;
  todo: string;
  userId: number;
}

// {todo: "", completed: false, userId: 1}

export default function AddTodo() {
  const queryClient = useQueryClient();
  const [newTodoDescribtion, setNewTodoDescribtion] = useState<string>("");

  const postResponse = useMutation({
    mutationKey: ["test"],
    mutationFn: async (newTodo: TodoInterface) => {
      return await axios.post("https://dummyjson.com/todos/add", newTodo, {
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

      queryClient.setQueryData(
        ["getTodos"],
        (old: any) => [...old, newTodo.data],

        // [...old, {id: 255, todo: 'asd', completed: false, userId: 1}]
      );

      // Return a context object with the snapshotted value
      return { previousTodos };
    },
    onError: async () => {
      await queryClient.invalidateQueries({ queryKey: ["getTodos"] });
    },
  });

  return (
    <div>
      <label>todo: </label>
      <input
        type={"text"}
        className={"border-2"}
        value={newTodoDescribtion}
        onChange={(event) => setNewTodoDescribtion(event.target.value)}
      />
      <button
        className={"bg-blue-500 disabled:bg-gray-500"}
        disabled={newTodoDescribtion === ""}
        onClick={() => {
          postResponse.mutate({
            todo: newTodoDescribtion,
            completed: false,
            userId: 1,
          });
        }}>
        add
      </button>
    </div>
  );
}
