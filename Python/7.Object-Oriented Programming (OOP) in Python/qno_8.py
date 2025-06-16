class Person:
    def __init__(self, name, age):
        self.name = name
        self.__age = age  # private attribute

    # Getter method for age
    def get_age(self):
        return self.__age

    # Setter method for age with validation
    def set_age(self, new_age):
        if 0 <= new_age <= 120:
            self.__age = new_age
        else:
            print("Invalid age. Must be between 0 and 120.")

    def display(self):
        print(f"Name: {self.name}, Age: {self.__age}")

p = Person("Bhanu", 22)
p.display()

# Accessing private attribute via getter
print("Current age:", p.get_age())

# Updating private attribute via setter
p.set_age(25)
print("Updated age:", p.get_age())

# Attempting to set invalid age
p.set_age(150)
