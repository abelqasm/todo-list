import { FormEvent, useRef, useState } from "react";
import { TodoList } from "../entities";
import modifyIcon from "../assets/modify.png";
import validateIcon from "../assets/validate.png";

interface Props {
  item: TodoList;
  onDelete: (id: number) => void;
}
const ToDoItem = ({ item, onDelete }: Props) => {
  const [count, setCount] = useState<number>(0);
  const [checked, setChecked] = useState<boolean>(false);
  const [modify, setModify] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);
  const date = item.date;
  return (
    <div className="w-[90%] md:w-4/6 border p-3 flex rounded-md bg-slate-700 text-white md:text-base text-sm shadow-sm shadow-black">
      <div
        className="w-4/6 flex flex-col"
        onClick={() => setCount((count: number) => count + 1)}
      >
        {!modify ? (
          <span className={`${checked ? "line-through" : ""} overflow-auto`}>
            {item.text}
          </span>
        ) : (
          <form
            onSubmit={(event: FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              if (ref.current?.value != "") {
                item.text = ref.current?.value;
              }
              setModify((prevModif) => !prevModif);
            }}
          >
            <input
              ref={ref}
              className="w-1/2 rounded-lg px-2 text-black"
              type="text"
              placeholder="Set your new task here"
            />
          </form>
        )}
        <span className="text-[8px] md:text-xs">
          {`${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`}
          {count > 0 && ` time clicked: ${count}`}
        </span>
      </div>
      <div className="w-2/6 flex gap-2 justify-end items-center">
        <input
          className="h-6 w-6 sm:h-8 sm:w-8 shadow-sm"
          type="checkbox"
          onClick={() => setChecked((prevCheck) => !prevCheck)}
        />
        <button
          className="max-w-fit px-1 py-1 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm shadow-black"
          onClick={() => {
            if (modify) {
              if (ref.current?.value != "") {
                item.text = ref.current?.value;
              }
            }
            setModify((prevModif) => !prevModif);
          }}
        >
          {!modify ? (
            <img
              className="h-6 w-6 sm:h-8 sm:w-8"
              src={modifyIcon}
              alt="modify-icon"
            />
          ) : (
            <img
              className="h-6 w-6 sm:h-8 sm:w-8"
              src={validateIcon}
              alt="modify-icon"
            />
          )}
        </button>
        <button
          className="w-[50%] bg-red-600 rounded-md text-xs py-3 shadow-sm shadow-black"
          onClick={() => onDelete(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
