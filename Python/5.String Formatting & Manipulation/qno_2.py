def find_substrings(s):
    substrings = []
    for i in range(len(s)):
        for j in range(i + 1, len(s) + 1):
            substrings.append(s[i:j])
    return substrings

if __name__ == "__main__":
    text = "abc"
    print(find_substrings(text))
