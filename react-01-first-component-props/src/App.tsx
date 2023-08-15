import React, { useState } from 'react';
import NewToDo from './components/NewToDo';
import {Todo} from './todo.model'
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const toDoAddHandler = (text:string) => {
    setTodos(prevTodo =>  [...prevTodo, {id:Math.random().toString(), text:text}])
    console.log(todos)
  }
  const deleteHandler = (todoId:string) => {
    setTodos(prevTodo => {
      return prevTodo.filter(todo => todo.id !== todoId)
    })
  }
  return (
    <div className="App">
      {/* A component that adds todos */}
      <NewToDo onAddToDo={toDoAddHandler}/>
      <TodoList items={todos} onDelete={deleteHandler} />
    </div>
  );
};

export default App;
