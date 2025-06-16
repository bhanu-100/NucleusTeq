def replace_words_in_file(filename, replacements, output_file=None):
    try:
        # Read original file content
        with open(filename, 'r') as file:
            content = file.read()

        # Replace each word
        for target, replacement in replacements.items():
            content = content.replace(target, replacement)

        # Write to a new file or overwrite the original
        if output_file:
            with open(output_file, 'w') as file:
                file.write(content)
            print(f"Replaced words saved in '{output_file}'.")
        else:
            with open(filename, 'w') as file:
                file.write(content)
            print(f"Replaced words in original file '{filename}'.")

    except FileNotFoundError:
        print(f"Error: File '{filename}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

file_name = input("Enter the filename: ")
num_words = int(input("How many words do you want to replace? "))

replacements = {}
for _ in range(num_words):
    old_word = input("Enter word to replace: ")
    new_word = input(f"Replace '{old_word}' with: ")
    replacements[old_word] = new_word

output_choice = input("Save to a new file? (yes/no): ").lower()
if output_choice == 'yes':
    output_file = input("Enter the new filename: ")
    replace_words_in_file(file_name, replacements, output_file)
else:
    replace_words_in_file(file_name, replacements)
