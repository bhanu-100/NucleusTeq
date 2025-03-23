import java.util.Scanner;
public class pattern {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int num = sc.nextInt();

        System.out.println("Triangle pattern:");
        for(int i=1; i<=num; i++){
            for(int j=1; j<=i; j++){
                System.out.print("* ");
            }
            System.out.println();
        }

        System.out.println("Square pattern:");
        for(int i=1; i<=num; i++){
            for(int j=1; j<=num; j++){
                System.out.print("* ");
            }
            System.out.println();
        }
        sc.close();
    }
}