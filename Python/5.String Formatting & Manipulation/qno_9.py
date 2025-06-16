def longest_palindrome(s):
    n = len(s)
    start = 0
    max_len = 1

    for i in range(n):
        for j in range(i + max_len, n + 1):
            substring = s[i:j]
            if substring == substring[::-1]:
                start = i
                max_len = j - i

    return s[start:start + max_len]

if __name__ == "__main__":
    text = "babad"
    print(longest_palindrome(text))
