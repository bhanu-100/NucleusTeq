import java.util.Scanner;
public class Area{
    public static void main(String []args){
        System.out.println("Select the shape whose area you want to calculate: ");
        System.out.println("1. Circle");
        System.out.println("2. Rectangle");
        System.out.println("3. Triangle");
        Scanner sc = new Scanner(System.in);
        int choice  = sc.nextInt();
        switch(choice){
            case 1:
                System.out.println("Enter the radius of the circle: ");
                double radius = sc.nextDouble();
                double area = 3.14 * radius * radius;
                System.out.println("Area of the circle is: " + area);
                break;
            case 2:
                System.out.println("Enter the length of the rectangle: ");
                double length = sc.nextDouble();
                System.out.println("Enter the breadth of the rectangle: ");
                double breadth = sc.nextDouble();
                area = length * breadth;
                System.out.println("Area of the rectangle is: " + area);
                break;
            case 3:
                System.out.println("Enter the base of the triangle: ");
                double base = sc.nextDouble();
                System.out.println("Enter the height of the triangle: ");
                double height = sc.nextDouble();
                area = 0.5 * base * height;
                System.out.println("Area of the triangle is: " + area);
                break;
            default:
                System.out.println("Invalid choice");
        }
    }
}