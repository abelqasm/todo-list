import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

interface Props<T> {
  height: number;
  width: number;
  itemHeight: number;
  items: T[];
  callBackRender: (item: T, index: number, style: CSSProperties) => ReactNode;
}

const VirualizedList = <T extends object | [] | string | number | boolean>({
  height,
  width,
  itemHeight,
  items,
  callBackRender,
}: Props<T>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [list, setList] = useState<T[]>(() => []);
  const scrollEvent = () => {
    if (ref.current) {
      const { scrollTop, clientHeight } = ref.current!;
      const startIndex = Math.floor(scrollTop / itemHeight);
      const endIndex = Math.floor((scrollTop + clientHeight) / itemHeight);

      setList(() => items.slice(startIndex, endIndex + 3));
      console.log(list);
    }
  };
  useEffect(() => {
    scrollEvent();
    const virtualList = ref.current;
    virtualList?.addEventListener("scroll", scrollEvent);
    return () => virtualList?.removeEventListener("scroll", scrollEvent);
  }, []);
  return (
    <div
      ref={ref}
      style={{
        height: height,
        width: width,
        overflowY: "auto",
        position: "relative",
      }}
    >
      <ul
        className={`bg-slate-500 relative`}
        style={{ height: items.length * itemHeight + "px" }}
      >
        {list.map((item, index) => {
          const currIndenx = items.indexOf(list[0]) + index;
          return callBackRender(item, currIndenx, {
            top: `${currIndenx * itemHeight}px`,
            position: "absolute",
            height: `${itemHeight}px`,
            width: "100%",
          });
        })}
      </ul>
    </div>
  );
};

export default VirualizedList;
