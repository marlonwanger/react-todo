import React from "react";
import ts from "typescript";

interface Props {
  todo: ITodo;
  todos: ITodo[],
  setTodos: (values: ITodo[]) => void;
  keyPosition: number;
}

interface ITodo {
  title: string;
  finished: boolean;
  id: number;
}


function Todo({ todo, todos, setTodos, keyPosition }: Props) {
  
  function handlerDelete(): void {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }

  function handlerFinished (): void {

    setTodos(
      todos.map(item => {
        if(item.id === todo.id) {
          return {
            ...item, finished: !item.finished
          }
        }
        return item;
      })
    )
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.finished ? "completed" : ""}`}>{todo.title}</li>
      <button className="complete-btn" onClick={handlerFinished}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={handlerDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
