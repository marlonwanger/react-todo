import React, { ChangeEvent, FormEvent } from "react";

interface Props {
  setInputText: (value: string) => void;
  todos: Todos[];
  setTodos: (values: Todos[]) => void;
  inputText: string;
}

interface Todos {
  title: string;
  finished: boolean;
  id: number;
}

function Form({ setInputText, todos, setTodos, inputText }: Props) {
  function inputTextHandler(e: ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }

  function submitTodoHandler(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    setTodos([
      ...todos,
      { title: inputText, finished: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  }

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
