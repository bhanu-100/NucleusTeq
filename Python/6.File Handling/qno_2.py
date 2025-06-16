def count_words_in_file(filename):
    try:
        with open(filename, 'r') as file:
            text = file.read()
            words = text.split()
            return len(words)
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found.")
        return 0
    except Exception as e:
        print(f"An error occurred: {e}")
        return 0

file_name = input("Enter the filename: ")
word_count = count_words_in_file(file_name)
print(f"Total number of words: {word_count}")
