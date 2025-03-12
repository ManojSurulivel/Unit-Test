import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Counter App</h1>
      <p className="text-xl mb-4" data-testid="count">Count: {count}</p>
      <div className="space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          data-testid="increment-btn"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
          data-testid="decrement-btn"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600"
          data-testid="reset-btn"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
