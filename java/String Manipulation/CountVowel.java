import java.util.*;
public class CountVowel {

    public static int countVowels(String input) {
        int count = 0;
        String vowels = "aeiouAEIOU";
        
        for (int i = 0; i < input.length(); i++) {
            if (vowels.indexOf(input.charAt(i)) != -1) {
                count++;
            }
        }
        
        return count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);  
        System.out.println("Enter the string to count vowels: ");
        String input = sc.nextLine();  
        System.out.println("Number of vowels in the string: " + countVowels(input));
        sc.close();
    }
}