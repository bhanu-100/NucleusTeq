def is_palindrome(lst):
    return lst == lst[::-1]

if __name__ == "__main__":
    a = [1, 2, 3, 2, 1]
    b = [1, 2, 3, 4]
    print(is_palindrome(a))
    print(is_palindrome(b))
