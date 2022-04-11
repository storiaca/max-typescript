import React from "react";
import TodoList from "./components/TodoList";
const App: React.FC = () => {
  const todos = [
    { id: "t1", text: "Finish the course" },
    { id: "t2", text: "Learn Typescript" },
  ];
  return (
    <div className="App">
      <TodoList items={todos} />
    </div>
  );
};

export default App;
