class InvalidAgeError(Exception):
    def __init__(self, age, message="Age must be between 0 and 120."):
        self.age = age
        self.message = message
        super().__init__(f"{self.message} Got: {self.age}")

def validate_age(age):
    if not (0 <= age <= 120):
        raise InvalidAgeError(age)
    print(f"Valid age: {age}")

try:
    age_input = int(input("Enter your age: "))
    validate_age(age_input)
except InvalidAgeError as e:
    print("Custom Exception:", e)
except ValueError:
    print("Error: Please enter a valid integer.")
