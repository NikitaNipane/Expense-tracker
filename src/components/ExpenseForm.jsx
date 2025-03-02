import { useState } from "react";

export default function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) {
      alert("Both fields are required!");
      return;
    }

    const newExpense = { title, amount };
    onAdd(newExpense); // Call the function to add expense
    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 my-4">
      <input className="border p-2" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className="border p-2" placeholder="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button type="submit" className="px-4 py-2 bg-green-500 text-white ml-4">Add</button>
    </form>
  );
}
