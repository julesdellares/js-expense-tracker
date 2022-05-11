var state = {
   balance: 1000,
   income: 400,
   expense: 100,
   transactions: [
       { name:'Salary', amount: 5000, type: 'income' },
       { name:'Groceries', amount: 50, type: 'expense' },
       { name:'Supplies', amount: 509, type: 'expense' }
   ]
}

var balanceEl = document.querySelector('#balance');
var incomeEl = document.querySelector('#income');
var expenseEl = document.querySelector('#expense');
var transactionsEl = document.querySelector('#transaction');
var incomeBtnEl = document.querySelector('#incomeBtn');
var expenseBtnEl = document.querySelector('#expenseBtn');
var nameInputEl = document.querySelector('#name');
var amountInputEl = document.querySelector('#amount');

function init() {   
    updateState();
    initListeners();
    render();
}

function initListeners() {
    incomeBtnEl.addEventListener('click', onAddIncomeClick);
    expenseBtnEl.addEventListener('click', onAddExpenseClick);
}

function onAddIncomeClick() {
    var transaction = {
        name: nameInputEl.value,
        amount: parseInt(amountInputEl.value), type: 'income'
    };

    state.transactions.push(transaction);
    console.log(state);
    updateState();

}

function onAddExpenseClick() {
    console.log('expense');
}


function updateState() {
    var balance = 0,
        income = 0,
        expense = 0,
        item;
    for (var i = 0; i < state.transactions.length; i++) {
        item = state.transactions[i];

        if (item.type === 'income') {
            income += item.amount;
        } else if (item.type === 'expense') {
            expense += item.amount;
        }
    }

    balance = income - expense;

    state.balance = balance;
    state.income = income;
    state.expense = expense;
}

function render() {
    balanceEl.innerHTML = `$${state.balance}`;
    incomeEl.innerHTML = `$${state.income}`;
    expenseEl.innerHTML = `$${state.expense}`;

    var transactionEl, containerEl, amountEl, item, btnEl;

    for (var i = 0; i < state.transactions.length; i++) {
        item = state.transactions[i];
        transactionEl = document.createElement('li');
        transactionEl.append(item.name);

        transactionEl.appendChild(transactionEl);

        containerEl = document.createElement('div');
        amountEl = document.createElement('span');
        if (item.type === 'income') {
            amountEl.classList.add('income-amt');
        } else if (item.type === 'expense') {
            amountEl.classList.add('expense-amt');
        }
        amountEl.innerHTML = `$${item.amount}`;

        containerEl.appendChild(amountEl);

        btnEl = document.createElement('button');
        btnEl.innerHTML = 'X';

        containerEl.appendChild(btnEl);

        transactionEl.appendChild(containerEl);
    }

}

init();



