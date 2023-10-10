import React from "react";
import { GlovalProvider, useGlobalState } from "./Context/GlobalState";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import TransactionForm from "./Components/Transaction/TransactionForm";
import TransactionList from "./Components/Transaction/TransactionList";
import IncomeExpenses from "./Components/Transaction/IncomeExpenses";
import ExpenseChart from "./Components/ExpenseChart";
function App() {
  return (
    <GlovalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
        <div className="contariner mx-auto w-3/6">
          <div className="bg-zinc-800 p-10 rounded-1g flex gap-x-20">
            <div>
              <h1 className="text-4xl font-bold">Registro de movimientos</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col flex-1">
              <Header />
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlovalProvider>
  );
}

export default App;
