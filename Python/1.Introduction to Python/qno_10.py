import random

secret_number = random.randint(1,100)

attempts = 0

while True:
    guess  = int(input("guess the number between 1 and 100: "))
    attempts += 1
    try:
        if guess < secret_number:
            print("Too low! Try again.")
        elif guess > secret_number:
            print("Too high! Try again.")
        else:
            print(f"Congratulations! You've guessed the number {secret_number} in {attempts} attempts.")
            break
    except ValueError:
        print("Invalid input. Please enter a valid number.")
