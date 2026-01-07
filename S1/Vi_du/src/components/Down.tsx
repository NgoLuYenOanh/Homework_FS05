import type { Dispatch, SetStateAction } from "react";

type DownType = { count: number; setCount: Dispatch<SetStateAction<number>> };

export const Down = ({ count, setCount }: DownType) => {
  return <button onClick={() => setCount(count - 1)}>Giảm</button>;
};
