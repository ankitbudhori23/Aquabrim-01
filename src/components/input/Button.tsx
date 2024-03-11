import React from "react";
import { useState } from "react";

function Home() {
  const [couter, setCounter] = useState(0);
  return (
    <div className="mx-auto max-w-2xl sm:text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Simple no-tricks pricing
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi
        iusto modi velit ut non voluptas in. Explicabo id ut laborum.
      </p>
    {couter}
    <button onClick={() => setCounter(couter + 1)}>Increment</button>
    </div>
  );
}

export default Home;
