def is_palindrome(s):
    return s == s[::-1]
val1 = input("Enter the string to check palindrome : ")
print(f"Is {val1} a palindrome? {is_palindrome(val1)}")