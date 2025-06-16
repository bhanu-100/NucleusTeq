# Base class
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "Some sound"

    def info(self):
        print(f"I am an animal named {self.name}.")

# Subclass Dog
class Dog(Animal):
    def speak(self):
        return "Woof!"

# Subclass Cat
class Cat(Animal):
    def speak(self):
        return "Meow!"

dog = Dog("Buddy")
cat = Cat("Whiskers")

dog.info()
print(f"{dog.name} says: {dog.speak()}")

cat.info()
print(f"{cat.name} says: {cat.speak()}")
