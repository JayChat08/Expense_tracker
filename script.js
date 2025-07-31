const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const category = document.getElementById("category");
const toggleBtn = document.getElementById("toggleMode");
const exportBtn = document.getElementById("exportBtn");
const ctx = document.getElementById("expenseChart");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function addTransaction(e) {
  e.preventDefault();
  let textVal = text.value.trim();

  const amountVal = +amount.value;
  if (!textVal) textVal = "Unnamed Transaction";
  if (isNaN(amountVal) || amountVal === 0)
    return alert("Please fill out all fields correctly.");

  const transaction = {
    id: Date.now(),
    text: textVal,
    amount: amountVal,
    category: category.value,
  };

  transactions.push(transaction);
  updateLocalStorage();
  init();
  form.reset();
}

function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";
  const item = document.createElement("li");
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `
    ${transaction.text} <span>${sign}₹${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${
      transaction.id
    })">x</button>
  `;

  list.appendChild(item);
}

function updateValues() {
  const amounts = transactions.map((t) => t.amount);
  const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);
  const income = amounts
    .filter((a) => a > 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);
  const expense = amounts
    .filter((a) => a < 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);

  balance.innerText = `₹${total}`;
  money_plus.innerText = `+₹${income}`;
  money_minus.innerText = `-₹${Math.abs(expense)}`;

  updateChart(income, Math.abs(expense));
}

function removeTransaction(id) {
  transactions = transactions.filter((t) => t.id !== id);
  updateLocalStorage();
  init();
}

function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function init() {
  list.innerHTML = "";
  transactions.forEach(addTransactionDOM);
  updateValues();
}

form.addEventListener("submit", addTransaction);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

exportBtn.addEventListener("click", () => {
  const rows = [["Text", "Amount", "Category"]];
  transactions.forEach((t) => rows.push([t.text, t.amount, t.category]));
  const csv = rows.map((r) => r.join(",")).join("\\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "transactions.csv";
  a.click();
});

let chartInstance = null;
function updateChart(income, expense) {
  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Income", "Expense"],
      datasets: [
        {
          data: [income, expense],
          backgroundColor: ["#2E865F", "#FF7043"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
        },
      },
    },
  });
}

function updateChart(income, expense) {
  const canvas = document.getElementById("expenseChart");
  if (+income === 0 && +expense === 0) {
    canvas.style.display = "none";
    return;
  }
  canvas.style.display = "block";

  if (chartInstance) chartInstance.destroy();
  chartInstance = new Chart(canvas, {
    type: "doughnut",
    data: {
      labels: ["Income", "Expense"],
      datasets: [
        {
          data: [income, expense],
          backgroundColor: ["#2E865F", "#FF7043"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
        },
      },
    },
  });
}

init();
