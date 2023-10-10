import React from "react";

import { useGlobalState } from "../Context/GlobalState";

function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <div className="flex justify-between">
        <h1>Balance:</h1>
        <h2>{JSON.stringify(total, null, 0)} €</h2>
      </div>
    </>
  );
}

export default Balance;
