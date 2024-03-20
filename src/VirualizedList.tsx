import { useEffect, useRef, useState } from "react";

type test = {
  name: string;
};

const items: test[] = [
  { name: "Drake" },
  { name: "Halsey" },
  { name: "Camillo Cabello" },
  { name: "Travis Scott" },
  { name: "Bazzi" },
  { name: "Flume" },
  { name: "Nicki Minaj" },
  { name: "Kodak Black" },
  { name: "Tyga" },
  { name: "Buno Mars" },
  { name: "Lil Wayne" },
  { name: "Drake" },
  { name: "Halsey" },
  { name: "Camillo Cabello" },
  { name: "Travis Scott" },
  { name: "Bazzi" },
  { name: "Flume" },
  { name: "Nicki Minaj" },
  { name: "Kodak Black" },
  { name: "Tyga" },
  { name: "Buno Mars" },
  { name: "Lil Wayne" },
  { name: "Drake" },
  { name: "Halsey" },
  { name: "Camillo Cabello" },
  { name: "Travis Scott" },
  { name: "Bazzi" },
  { name: "Flume" },
  { name: "Nicki Minaj" },
  { name: "Kodak Black" },
  { name: "Tyga" },
  { name: "Buno Mars" },
  { name: "Lil Wayne" },
  { name: "Drake" },
  { name: "Halsey" },
  { name: "Camillo Cabello" },
  { name: "Travis Scott" },
  { name: "Bazzi" },
  { name: "Flume" },
  { name: "Nicki Minaj" },
  { name: "Kodak Black" },
  { name: "Tyga" },
  { name: "Buno Mars" },
  { name: "Lil Wayne" },
  { name: "Drake" },
  { name: "Halsey" },
  { name: "Camillo Cabello" },
  { name: "Travis Scott" },
  { name: "Bazzi" },
  { name: "Flume" },
  { name: "Nicki Minaj" },
  { name: "Kodak Black" },
  { name: "Tyga" },
  { name: "Buno Mars" },
  { name: "Lil Wayne" },
  { name: "Drake" },
  { name: "Halsey" },
  { name: "Camillo Cabello" },
  { name: "Travis Scott" },
  { name: "Bazzi" },
  { name: "Flume" },
  { name: "Nicki Minaj" },
  { name: "Kodak Black" },
  { name: "Tyga" },
  { name: "Buno Mars" },
  { name: "Lil Wayne" },
];

const VirualizedList = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [list, setList] = useState<test[]>(() => []);
  const itemHeight: number = 50;
  const scrollEvent = () => {
    if (ref.current) {
      const { scrollTop, clientHeight } = ref.current!;
      const startIndex = Math.floor(scrollTop / itemHeight);
      const endIndex = Math.floor((scrollTop + clientHeight) / itemHeight);

      setList(() => items.slice(startIndex, endIndex + 1));
    }
  };
  useEffect(() => {
    scrollEvent();
    const virtualList = ref.current;
    virtualList?.addEventListener("scroll", scrollEvent);
    return () => virtualList?.removeEventListener("scroll", scrollEvent);
  }, []);
  return (
    <div ref={ref} className="h-60 overflow-y-auto">
      <ul
        className={`h-[${items.length * itemHeight}px] bg-slate-500 relative`}
      >
        {list.map((item, index) => (
          <li
            key={index}
            className={`h-[${itemHeight}px] absolute w-full`}
            style={{ top: `${(items.indexOf(list[0]) + index) * itemHeight}px` }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VirualizedList;
