import React, { useEffect, useState } from "react";

const UseEffectAgain = () => {
  const [Count, setCount] = useState(0);
  useEffect(() => {
    Count >= 2
      ? (document.title = `chats (${Count})`)
      : (document.title = `chats`);
  }, [Count]);

  return (
    <div>
      <p>{Count}</p>
      <button onClick={() => setCount(Count + 1)}>Click me</button>
    </div>
  );
};

export default UseEffectAgain;
