var accounts = [];

//createAccount(account)
function createAccount (account) {
	accounts.push(account);
	return account;
}

//getAccount (username)
function getAccount (username) {
	var matchedAccount;

	accounts.forEach(function (account) {
		if (account.username === username) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

//deposit(account, amount)
function deposit (account, amount) {
	account.balance += amount;
}

//withdraw (account, amount)
function withdraw (account, amount) {
	account.balance -= amount;
}

//getBalance(account)
function getBalance (account) {
	return account.balance;
}

var kevensAccount = createAccount({
	username: 'Kevin',
	balance: 0
});

deposit(kevensAccount, 100);
console.log(getBalance(kevensAccount));

withdraw(kevensAccount, 24);
console.log(getBalance(kevensAccount));

var existingAccount = getAccount('Kevin');
console.log(getBalance(existingAccount));

var valkosAccount = createAccount({
	username: 'Valko',
	balance: 234
});

console.log(accounts);

var existingValkosAccount = getAccount('Valko');
console.log(existingValkosAccount);