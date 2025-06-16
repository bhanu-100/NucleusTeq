import logging

# Configure logging to write to a file
logging.basicConfig(
    filename='error.log',
    level=logging.ERROR,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def divide(a, b):
    try:
        return a / b
    except ZeroDivisionError as e:
        logging.error("Division by zero error", exc_info=True)
        print("Error: Cannot divide by zero.")
    except Exception as e:
        logging.error("Unexpected error", exc_info=True)
        print("An unexpected error occurred.")

try:
    num1 = int(input("Enter numerator: "))
    num2 = int(input("Enter denominator: "))
    result = divide(num1, num2)
    if result is not None:
        print(f"Result: {result}")
except ValueError as e:
    logging.error("Invalid input (non-integer)", exc_info=True)
    print("Please enter valid integers.")
