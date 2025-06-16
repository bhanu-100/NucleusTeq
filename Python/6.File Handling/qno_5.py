def remove_empty_lines(input_file, output_file=None):
    try:
        with open(input_file, 'r') as file:
            lines = file.readlines()

        non_empty_lines = [line for line in lines if line.strip() != ""]

        if output_file:
            with open(output_file, 'w') as file:
                file.writelines(non_empty_lines)
            print(f"Empty lines removed. Clean content written to '{output_file}'.")
        else:
            # Overwrite original file
            with open(input_file, 'w') as file:
                file.writelines(non_empty_lines)
            print(f"Empty lines removed from '{input_file}'.")

    except FileNotFoundError:
        print(f"Error: File '{input_file}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

source_file = input("Enter the filename: ")
choice = input("Do you want to save to a new file? (yes/no): ").lower()
if choice == 'yes':
    dest_file = input("Enter the new filename: ")
    remove_empty_lines(source_file, dest_file)
else:
    remove_empty_lines(source_file)
