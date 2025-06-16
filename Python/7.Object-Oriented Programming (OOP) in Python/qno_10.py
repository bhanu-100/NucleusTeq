class A:
    def show(self):
        print("Class A")

class B(A):
    def show(self):
        print("Class B")

class C(A):
    def show(self):
        print("Class C")

# Class D inherits from both B and C
class D(B, C):
    pass

# Create an instance of D
d = D()
d.show()  # Which method gets called?

# Print the MRO of class D
print(D.__mro__)
