def get_integer_input():
    try:
        value = input("Enter a number: ")
        return int(value)
    except ValueError as e:
        # Raising a new exception, chaining it from the original one
        raise RuntimeError("Failed to convert input to integer") from e

try:
    number = get_integer_input()
    print(f"You entered: {number}")
except RuntimeError as e:
    print("Caught an error:", e)
    print("Original exception:", e.__cause__)
