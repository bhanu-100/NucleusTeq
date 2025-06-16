file_path = "example.txt"

try:
    file = open(file_path, "r")
    content = file.read()
    print("File content:")
    print(content)
except FileNotFoundError:
    print(f"Error: File '{file_path}' not found.")
except IOError as e:
    print(f"IO Error: {e}")
finally:
    try:
        file.close()
        print("File closed successfully.")
    except NameError:
        print("File was never opened, nothing to close.")
