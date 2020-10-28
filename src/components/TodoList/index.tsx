import React from "react";
import Todo from "../Todo";

interface Props {
  todos: Todos[];
  setTodos: (value: Todos[]) => void
}

interface Todos {
  title: string;
  finished: boolean;
  id: number;
}

function TodoList({ todos, setTodos }: Props) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={todo.id} keyPosition={index} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
