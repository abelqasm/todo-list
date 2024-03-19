import { SetStateAction } from "react";
import { TodoList } from "../entities";
import ToDoItem from "./ToDoItem";

interface Props {
    toDoList: TodoList[];
    setTodo: (todo: SetStateAction<TodoList[]>) => void;
}
const ListTodos = ({toDoList, setTodo}: Props) => {
    const onDelete = (id: number) => {
        setTodo((prev: TodoList[]) => prev.filter(item => item.id !== id))
    }
     return (
        <ul className="w-full flex flex-col gap-2">
            {toDoList.map(todo => 
                <li className="w-full flex justify-center" key={todo.id}>
                  <ToDoItem item={todo} onDelete={onDelete}/>
                </li>
            )}
        </ul>
  )
}

export default ListTodos