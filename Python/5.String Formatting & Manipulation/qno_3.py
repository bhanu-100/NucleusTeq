def replace_vowels(s):
    vowels = "aeiouAEIOU"
    return ''.join('*' if char in vowels else char for char in s)

if __name__ == "__main__":
    text = "Hello World"
    print(replace_vowels(text))
