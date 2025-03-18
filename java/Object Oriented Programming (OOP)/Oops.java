
public class Oops {
    public static void main(String[] args) {
        Student student = new Student("Bhanu Singh", 101, 85.5);
        GraduateStudent gradStudent = new GraduateStudent("Monu Singh", 102, 90.0, "OOPs");

        System.out.println("Student Name: " + student.getName());
        System.out.println("Graduate Student Name: " + gradStudent.getName());
        System.out.println("Thesis Title: " + gradStudent.getThesisTitle());

        gradStudent.setMarks(95.0, "A");
    }
}
// Student class is the example of Encapsulation
class Student {
    private String name;
    private int rollNumber;
    private double marks;

    public Student(String name, int rollNumber, double marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRollNumber() {
        return rollNumber;
    }

    public void setRollNumber(int rollNumber) {
        this.rollNumber = rollNumber;
    }

    public double getMarks() {
        return marks;
    }

    public void setMarks(double marks) {
        this.marks = marks;
    }
}
class GraduateStudent extends Student {
    private String thesisTitle;

    public GraduateStudent(String name, int rollNumber, double marks, String thesisTitle) {
        super(name, rollNumber, marks);
        this.thesisTitle = thesisTitle;
    }

    public String getThesisTitle() {
        return thesisTitle;
    }

    public void setThesisTitle(String thesisTitle) {
        this.thesisTitle = thesisTitle;
    }

    // Polymorphism - Overloading the setMarks method
    public void setMarks(double marks, String grade) {
        super.setMarks(marks);
        System.out.println("Grade: " + grade);
    }
}
