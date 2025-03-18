import java.util.Scanner;

public class temperature {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Choose an option:");
        System.out.println("1. Convert Celsius to Fahrenheit");
        System.out.println("2. Convert Fahrenheit to Celsius");
        int choice = scanner.nextInt();

        switch (choice) {
            case 1:
                System.out.print("Enter temperature in Celsius: ");
                double celsius = scanner.nextDouble();
                double celsiusToFahrenheit = convertCelsiusToFahrenheit(celsius);
                System.out.println(celsius + " Celsius is equal to " + celsiusToFahrenheit + " Fahrenheit");
                break;
            case 2:
                System.out.print("Enter temperature in Fahrenheit: ");
                double fahrenheit = scanner.nextDouble();
                double fahrenheitToCelsius = convertFahrenheitToCelsius(fahrenheit);
                System.out.println(fahrenheit + " Fahrenheit is equal to " + fahrenheitToCelsius + " Celsius");
                break;
            default:
                System.out.println("Invalid choice");
                break;
        }

        scanner.close();
    }

    public static double convertCelsiusToFahrenheit(double celsius) {
        return (celsius * 9/5) + 32;
    }

    public static double convertFahrenheitToCelsius(double fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }
}
