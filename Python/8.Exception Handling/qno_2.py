def get_integer_input(prompt):
    while True:
        try:
            value = int(input(prompt))
            print(f"You entered: {value}")
            return value
        except ValueError:
            print("Invalid input! Please enter a valid integer.")

num = get_integer_input("Enter an integer: ")
