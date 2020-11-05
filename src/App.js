import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";

const App = () => {
  const [todoItem, setTodoItem] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodoItem(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, [todoItem]);

  return (
    <div className="App">
      <h1>TODO App</h1>
      <form>
        <FormControl>
          <InputLabel>Todo :</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (input !== "") setTodoItem([...todoItem, input]);
            setInput("");
          }}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todoItem.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
