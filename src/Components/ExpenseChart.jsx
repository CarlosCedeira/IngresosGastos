import React from "react";
import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../Context/GlobalState";

function ExpenseChart() {
  const { transactions } = useGlobalState();

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensesPercentage = Math.round(
    (totalExpense / totalIncome) * 100
  );

  const totalIncomePercentage = 100 - totalExpensesPercentage;

  const gastos = isNaN(totalExpensesPercentage) ? 0 : totalExpensesPercentage;
  const ingresos = isNaN(totalIncomePercentage) ? 100 : totalIncomePercentage;

  return (
    <VictoryPie
      colorScale={["#e74c3c", "#23cc71"]}
      data={[
        { x: "gastos", y: gastos },
        { x: "ingresos", y: ingresos },
      ]}
      animate={{
        duration: 2000,
      }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: "white",
          }}
        />
      }
    />
  );
}

export default ExpenseChart;
