def capitalize_words(s):
    return ' '.join(word.capitalize() for word in s.split())

if __name__ == "__main__":
    text = "hello world from bhanu"
    print(capitalize_words(text))
