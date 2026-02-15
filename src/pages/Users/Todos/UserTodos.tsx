import { useLoaderData } from "react-router-dom";
import { ListGroup, Badge } from "react-bootstrap";
import type { UserTodosTypes } from "../../../types/types";

function UserTodos() {
  const todos = useLoaderData() as UserTodosTypes[];

  const completedCount = todos.filter((todo) => todo.completed).length;
  const pendingCount = todos.length - completedCount;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Todos</h2>
        <div>
          <Badge bg="success" className="me-2">
            {completedCount} Completed
          </Badge>
          <Badge bg="warning">{pendingCount} Pending</Badge>
        </div>
      </div>

      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item key={todo.id} className="d-flex align-items-center">
            <span className="me-3" style={{ fontSize: "1.5rem" }}>
              {todo.completed ? "✅" : "⬜"}
            </span>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#6c757d" : "inherit",
              }}
            >
              {todo.title}
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default UserTodos;
