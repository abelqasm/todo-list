import { useState } from "react";
import TodoForm from './components/TodoForm'
import { TodoList } from './entities';
import ListTodos from './components/ListTodos';
// import VirualizedList from "./components/virtualizedList.tsx/VirualizedList";

// const items: { name: string }[] = [
//   { name: "Drake" },
//   { name: "Halsey" },
//   { name: "Camillo Cabello" },
//   { name: "Travis Scott" },
//   { name: "Bazzi" },
//   { name: "Flume" },
//   { name: "Nicki Minaj" },
//   { name: "Kodak Black" },
//   { name: "Tyga" },
//   { name: "Buno Mars" },
//   { name: "Lil Wayne" },
//   { name: "Drake" },
//   { name: "Halsey" },
//   { name: "Camillo Cabello" },
//   { name: "Travis Scott" },
//   { name: "Bazzi" },
//   { name: "Flume" },
//   { name: "Nicki Minaj" },
//   { name: "Kodak Black" },
//   { name: "Tyga" },
//   { name: "Buno Mars" },
//   { name: "Lil Wayne" },
//   { name: "Drake" },
//   { name: "Halsey" },
//   { name: "Camillo Cabello" },
//   { name: "Travis Scott" },
//   { name: "Bazzi" },
//   { name: "Flume" },
//   { name: "Nicki Minaj" },
//   { name: "Kodak Black" },
//   { name: "Tyga" },
//   { name: "Buno Mars" },
//   { name: "Lil Wayne" },
//   { name: "Drake" },
//   { name: "Halsey" },
//   { name: "Camillo Cabello" },
//   { name: "Travis Scott" },
//   { name: "Bazzi" },
//   { name: "Flume" },
//   { name: "Nicki Minaj" },
//   { name: "Kodak Black" },
//   { name: "Tyga" },
//   { name: "Buno Mars" },
//   { name: "Lil Wayne" },
//   { name: "Drake" },
//   { name: "Halsey" },
//   { name: "Camillo Cabello" },
//   { name: "Travis Scott" },
//   { name: "Bazzi" },
//   { name: "Flume" },
//   { name: "Nicki Minaj" },
//   { name: "Kodak Black" },
//   { name: "Tyga" },
//   { name: "Buno Mars" },
//   { name: "Lil Wayne" },
//   { name: "Drake" },
//   { name: "Halsey" },
//   { name: "Camillo Cabello" },
//   { name: "Travis Scott" },
//   { name: "Bazzi" },
//   { name: "Flume" },
//   { name: "Nicki Minaj" },
//   { name: "Kodak Black" },
//   { name: "Tyga" },
//   { name: "Buno Mars" },
//   { name: "Lil Wayne" },
// ];

// const arr = [[1,2],[3,5],[8,9,6,1]]

function App() {
  const [todo, setTodo] = useState<TodoList[]>(() => []);
  return (
    // <VirualizedList
    //   height={600}
    //   width={600}
    //   itemHeight={50}
    //   items={arr}
    //   callBackRender={(item, index, style) => {
    //     return (
    //       <li key={index} style={style}>
    //         {item}
    //       </li>
    //     );
    //   }}
    // />
    <>
      <header className='flex justify-center items-center w-full p-20'>
        <h1 className="text-blue-700 text-3xl md:text-5xl font-bold">Todo List</h1>
      </header>
      <main className='flex flex-col justify-center items-center gap-10'>
        <TodoForm setTodo={setTodo}/>
        <ListTodos toDoList={todo} setTodo={setTodo}/>
      </main>
    </>
  );
}

export default App;
