def count_stats(s):
    lines = s.splitlines()
    words = s.split()
    characters = len(s)
    return len(lines), len(words), characters

if __name__ == "__main__":
    text = """Hello world
This is Bhanu
Python is fun"""
    line_count, word_count, char_count = count_stats(text)
    print(line_count)
    print(word_count)
    print(char_count)
