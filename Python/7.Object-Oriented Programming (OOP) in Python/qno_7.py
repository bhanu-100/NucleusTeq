# Base class
class Animal:
    def speak(self):
        print("The animal makes a sound.")

# Subclass that overrides the method
class Dog(Animal):
    def speak(self):
        print("The dog barks.")

generic_animal = Animal()
dog = Dog()

generic_animal.speak() 
dog.speak()            
