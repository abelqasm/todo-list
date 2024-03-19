import { useState } from 'react';
import { TodoList } from '../entities'

interface Props {
    item: TodoList;
    onDelete: (id:number) => void
}
const ToDoItem = ({item, onDelete} : Props) => {
    const [count, setCount] = useState<number>(() => 0);
    const [checked, setChecked] = useState<boolean>(() => false);
    const date = item.date;
    return (
    <div className='w-[90%] md:w-4/6 border p-3 flex rounded-md bg-slate-400 text-white md:text-base text-sm shadow-sm shadow-black'>
        <div className='w-4/6 flex flex-col' onClick={() => setCount((count:number) => count + 1)}>
            <span className={`${checked ? 'line-through' : ''} overflow-auto`}>
                {item.item}
            </span>
            <span className='text-[8px] md:text-xs'>
                {`${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
                {count > 0 && ` time clicked: ${count}`}
            </span>
        </div>
        <div className='w-2/6 flex gap-2 justify-end items-center'>
            <input className='sm:h-8 sm:w-8 shadow-sm' type="checkbox" onClick={() => setChecked(!checked)}/>
            <button className='w-4/6 bg-red-600 rounded-md text-xs py-3 shadow-sm shadow-black' onClick={() => onDelete(item.id)}>Delete</button>
        </div>
    </div>
  )
}

export default ToDoItem