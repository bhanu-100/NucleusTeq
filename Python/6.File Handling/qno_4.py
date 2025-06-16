def append_to_file(filename):
    try:
        with open(filename, 'a') as file:
            while True:
                user_input = input("Enter text to append (type 'exit' to stop): ")
                if user_input.lower() == 'exit':
                    break
                file.write(user_input + '\n')
        print(f"Your input has been appended to '{filename}'.")
    except Exception as e:
        print(f"An error occurred: {e}")

file_name = input("Enter the filename to append to: ")
append_to_file(file_name)
