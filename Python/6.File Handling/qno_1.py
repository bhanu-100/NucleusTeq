def print_file_with_line_numbers(filename):
    try:
        with open(filename, 'r') as file:
            for line_number, line in enumerate(file, start=1):
                print(f"{line_number}: {line.rstrip()}")
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

file_name = input("Enter the filename: ")
print_file_with_line_numbers(file_name)
