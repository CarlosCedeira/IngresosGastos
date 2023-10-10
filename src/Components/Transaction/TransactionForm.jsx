import React, { useState } from "react";
import { useGlobalState } from "../../Context/GlobalState";

function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
    console.log(description, amount);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter a Description"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-1g block mb-2 w-full"
        />
        <input
          type="number"
          step="0.10"
          placeholder="00.00"
          onChange={(e) => setAmount(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-1g block mb-2 w-full"
        />
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-1g block mb-2 w-full">
          Add Trasaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
