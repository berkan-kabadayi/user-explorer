import { Outlet, useLoaderData } from "react-router-dom";
import type { UserTodosTypes } from "../../../types/types";

function UserTodos() {
  const todos = useLoaderData() as UserTodosTypes[];
  return (
    <>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.completed ? "✅" : "❌"} {todo.title}
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}

export default UserTodos;
