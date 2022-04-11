import React from "react";

interface TodoListProp {
  items: { id: string; text: string }[];
}

const TodoList: React.FC<TodoListProp> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
