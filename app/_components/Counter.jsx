//----------------------- 👤 CLIENT 👤 -----------------------//
"use client"; // note
import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);
  // console.log(users);

  return (
    <div>
      <p>There are {users.length} users</p>
      <button
        className="p-2 shadow shadow-gray-400 rounded-full"
        onClick={() => setCount((c) => ++c)}
      >
        {count}
      </button>
    </div>
  );
}
//----------------------- 👤 CLIENT 👤 -----------------------//
