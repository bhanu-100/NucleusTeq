class Student:
    def __init__(self, name):
        self.name = name
        self.grades = []

    def add_grade(self, grade):
        if 0 <= grade <= 100:
            self.grades.append(grade)
        else:
            print("Grade must be between 0 and 100.")

    def average(self):
        if self.grades:
            return sum(self.grades) / len(self.grades)
        else:
            return 0

    def display_info(self):
        print(f"Student Name: {self.name}")
        print(f"Grades: {self.grades}")
        print(f"Average Grade: {self.average():.2f}")

student1 = Student("Bhanu")
student1.add_grade(85)
student1.add_grade(90)
student1.add_grade(78)
student1.display_info()
