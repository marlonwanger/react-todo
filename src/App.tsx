import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

interface Todos {
  title: string;
  finished: boolean;
  id: number;
}

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  return (
    <div className="App">
      <header>
        <h1>Marlon Todo List </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
