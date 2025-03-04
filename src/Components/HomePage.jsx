import React, { useEffect, useState } from "react";


function HomePage() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className="flex justify-center flex-col bg-black h-full text-white">
      <div className="text-7xl">Timer: {timer}</div>
      <div className="text-9xl m-3 shadow-2xl">{count}</div>
      <div className="flex flex-col items-center">
      <button
        className="bg-[#e7da3d] m-3 px-6 text-5xl pb-3 rounded-md text-black"
        onClick={() => {
          setTimer(50);
          setCount(0);
        }}
        disabled={timer !== 0}
      >
         Start 
      </button>
      <button
        className="bg-[#3dd1e7] m-3 px-6 text-5xl pb-3 rounded-md text-black"
        onClick={() => setCount(count + 1)}
        disabled={timer === 0}
      >
        Click Me
      </button>
      <button
        className="bg-[#e73d9f] m-3 px-6 text-5xl pb-3 rounded-md text-black"
        onClick={() => {
          setCount(0);
          setTimer(0);
        }}
      >
         Reset 
      </button>
      </div>
    </div>
  );
}

export default HomePage;