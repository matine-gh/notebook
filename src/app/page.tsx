"use client";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import AddTodo from "@/app/components/AddTodo";

export default function Home() {
  const getResponse = useQuery({
    queryKey: ["getTodos"],
    queryFn: async () => {
      const response= await axios.get("https://dummyjson.com/todos");
      return response.data.todos
    },
  });

  if (getResponse.isPending) return "Loading...";

  if (getResponse.error) return "An error has occurred: " + getResponse.error.message;

  console.log(getResponse.data)
  return (
    <div>
      <AddTodo />
      <ul>
        {getResponse.data.map((item) => {
          return (
            <li key={item.id}>
              <input type="checkbox" checked={item.completed} />
              <span>{item.id} - </span>
              {item.todo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
