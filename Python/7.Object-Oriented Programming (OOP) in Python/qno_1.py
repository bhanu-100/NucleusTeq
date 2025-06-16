class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"Deposited ₹{amount}. New balance: ₹{self.balance}")
        else:
            print("Deposit amount must be positive.")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient funds.")
        elif amount <= 0:
            print("Withdrawal amount must be positive.")
        else:
            self.balance -= amount
            print(f"Withdrew ₹{amount}. New balance: ₹{self.balance}")

    def display_balance(self):
        print(f"{self.owner}'s account balance: ₹{self.balance}")

account = BankAccount("Bhanu", 1000)
account.display_balance()
account.deposit(500)
account.withdraw(300)
account.withdraw(2000)
