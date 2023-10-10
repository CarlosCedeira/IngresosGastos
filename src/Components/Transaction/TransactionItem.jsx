import React from "react";
import { useGlobalState } from "../../Context/GlobalState";

function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  return (
    <li
      className="bg-zinc-600 text-white px-3 py-1 rounded-1g
    mb-2 w-full flex justify-between items-center"
    >
      <p className="text-sm">{transaction.description}</p>
      <div className="flex">
        <p>{transaction.amount} €</p>
        <button
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          x
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
