def merge_text_files(file_list, output_file):
    try:
        with open(output_file, 'w') as outfile:
            for file_name in file_list:
                try:
                    with open(file_name, 'r') as infile:
                        contents = infile.read()
                        outfile.write(contents + '\n')  # Add newline between files
                        print(f"Merged: {file_name}")
                except FileNotFoundError:
                    print(f"Warning: '{file_name}' not found and skipped.")
        print(f"All files merged into '{output_file}'.")
    except Exception as e:
        print(f"An error occurred: {e}")

input_files = input("Enter file names to merge (separated by commas): ").split(',')
input_files = [file.strip() for file in input_files]
output_file = input("Enter the name of the output file: ")
merge_text_files(input_files, output_file)
