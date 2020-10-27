import React from "react";
import Todo from "../Todo";

interface Props {
  todos: Todos[];
}

interface Todos {
  title: string;
  finished: boolean;
  id: number;
}

function TodoList({ todos }: Props) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
