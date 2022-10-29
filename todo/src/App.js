import { useState } from 'react';
import AddTodo from './component/AddTodo.js';
import TaskList from './component/TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
      initialTodos
  );

  console.log(todos)

  function handleAddTodo(title) {


    setTodos([...todos, {id: nextId++,title}]);

    // todos.push({
    //   id: nextId++,
    //   title: title,
    //   done: false
    // });
    console.log(todos)
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter(t =>
        t.id !== todoId
    ))
  }

  return (
      <>
        <AddTodo
            onAddTodo={handleAddTodo}
        />
        <TaskList
            todos={todos}
            onChangeTodo={handleChangeTodo}
            onDeleteTodo={handleDeleteTodo}
        />
      </>
  );
}

