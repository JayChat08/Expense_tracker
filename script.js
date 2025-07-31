:root {
  --primary-blue: #288cfa;
  --primary-green: #2E865F;
  --income-green: #C6F4D6;
  --expense-red: #FF7043;
  --bg-light: #f5f5f5;
  --bg-soft: #d7ccc8;
  --text-dark: #333333;
}

body {
  background: var(--bg-light);
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
}

.dark-mode {
  background-color: #121212;
  color: #f5f5f5;
}

.container {
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

h2 {
  color: var(--primary-blue);
  text-align: center;
  font-size: 2rem;
}

.balance {
  text-align: center;
  margin: 20px 0;
}

.balance h1 {
  font-size: 2.5rem;
  color: var(--primary-green);
}

.inc-exp-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  background: #f0f1f5;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.inc-exp-container div {
  flex: 1;
  text-align: center;
}

.money.plus {
  color: #2E865F;
  font-weight: bold;
}

.money.minus {
  color: #FF7043;
  font-weight: bold;
}

.list {
  list-style: none;
  max-height: 150px;
  overflow-y: auto;
  margin-bottom: 20px;
  padding-right: 10px;
}

.list li {
  background: #f8f9fb;
  padding: 12px 16px;
  margin-bottom: 10px;
  border-right: 6px solid;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: fadeIn 0.4s ease-in-out;
}

.list li.plus {
  border-color: #2E865F;
}

.list li.minus {
  border-color: #FF7043;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.delete-btn {
  background: transparent;
  border: none;
  color: #c0392b;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
}

input:focus {
  border: 2px solid var(--primary-blue);
  outline: none;
  transition: border 0.2s ease-in-out;
}

.form-control {
  margin-bottom: 15px;
}

input, select {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.btn {
  width: 100%;
  margin-top: 10px;
  padding: 12px;
  font-size: 1rem;
  background: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.1s;
}

.btn:hover {
  background: #1f70cc;
}

.btn:active {
  transform: scale(0.97);
}

.dark-mode .container {
  background: #1e1e1e;
}

.dark-mode input,
.dark-mode select {
  background: #333;
  color: #f5f5f5;
  border-color: #666;
}

.dark-mode .list li {
  background: #2a2a2a;
}

.dark-mode .inc-exp-container h4 {
  color: #18176e; /* or any light shade that contrasts well */
}
