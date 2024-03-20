import { useState } from 'react'
import TodoForm from './components/TodoForm'
import { TodoList } from './entities';
import ListTodos from './components/ListTodos';

function App() {
  const [todo, setTodo] = useState<TodoList[]>(() => []);
  return (
    <>
      <header className='flex justify-center items-center w-full p-20'>
        <h1 className="text-blue-700 text-3xl md:text-5xl font-bold">Todo List</h1>
      </header>
      <main className='flex flex-col justify-center items-center gap-10'>
        <TodoForm setTodo={setTodo}/>
        <ListTodos toDoList={todo} setTodo={setTodo}/>
      </main>
    </>
  )
}

export default App
