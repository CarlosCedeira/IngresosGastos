import React from "react";
import { useGlobalState } from "../../Context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expenses = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0) // Mostrar las salidas en positivo: * -1
    .toFixed(2);

  return (
    <>
      <div className="flex justify-between my-2">
        <h1>Ingresos:</h1>
        <h3>{income} €</h3>
      </div>

      <div className="flex justify-between my-2">
        <h1>gastos:</h1>
        <h3>{expenses} €</h3>
      </div>
    </>
  );
}

export default IncomeExpenses;
