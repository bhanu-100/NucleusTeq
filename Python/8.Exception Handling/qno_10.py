# Custom exception classes
class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        super().__init__(f"Insufficient funds: Balance is {balance}, tried to withdraw {amount}")

class NegativeDepositError(Exception):
    def __init__(self, amount):
        super().__init__(f"Cannot deposit a negative amount: {amount}")

class InvalidAccountError(Exception):
    def __init__(self, account_id):
        super().__init__(f"Invalid account ID: {account_id}")

# Simulated BankAccount class
class BankAccount:
    def __init__(self, account_id, balance=0):
        if not isinstance(account_id, int):
            raise InvalidAccountError(account_id)
        self.account_id = account_id
        self.balance = balance

    def deposit(self, amount):
        if amount < 0:
            raise NegativeDepositError(amount)
        self.balance += amount
        print(f"Deposited ₹{amount}. New balance: ₹{self.balance}")

    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientFundsError(self.balance, amount)
        self.balance -= amount
        print(f"Withdrew ₹{amount}. New balance: ₹{self.balance}")

try:
    account = BankAccount("abc")  # Will raise InvalidAccountError
except InvalidAccountError as e:
    print("Account error:", e)

try:
    account = BankAccount(123, 1000)
    account.deposit(-500)         # Will raise NegativeDepositError
except NegativeDepositError as e:
    print("Deposit error:", e)

try:
    account.withdraw(2000)        # Will raise InsufficientFundsError
except InsufficientFundsError as e:
    print("Withdrawal error:", e)
