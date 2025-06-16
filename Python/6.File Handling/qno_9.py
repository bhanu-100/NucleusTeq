from collections import Counter

def count_character_frequency(filename):
    try:
        with open(filename, 'r') as file:
            text = file.read()
            frequency = Counter(text)

        print("Character Frequencies:")
        for char, count in sorted(frequency.items()):
            # Display printable characters clearly
            if char == '\n':
                display_char = '\\n'
            elif char == '\t':
                display_char = '\\t'
            elif char == ' ':
                display_char = "' '"
            else:
                display_char = char
            print(f"{display_char}: {count}")
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

file_name = input("Enter the filename: ")
count_character_frequency(file_name)
