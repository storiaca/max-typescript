interface Todo {
  id: number;
  text: string;
}

let TODOS: Todo[] = [];

export function addTodo(text: string) {
  const newTodo = { id: Math.random(), text };
  TODOS.push(newTodo);
  return newTodo;
}

export function getTodo(id: number) {
  const todo = TODOS.find((item) => item.id === id);
  if (!todo) {
    throw new Error("Todo not found!");
  }
  return todo;
}

export function getTodos() {
  return TODOS;
}

export function removeTodo(id: number) {
  TODOS = TODOS.filter((item) => item.id !== id);
}

export function updateTodo(id: number, text: string) {
  const todo = getTodo(id);
  if (todo) {
    todo.text = text;
  }
  return todo;
}
