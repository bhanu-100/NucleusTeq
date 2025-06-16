class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None

    def __enter__(self):
        try:
            self.file = open(self.filename, self.mode)
            return self.file
        except Exception as e:
            print(f"Error opening file: {e}")
            return None

    def __exit__(self, exc_type, exc_value, traceback):
        if self.file:
            self.file.close()
            print("File closed successfully.")
        if exc_type:
            print(f"Exception occurred: {exc_type.__name__} - {exc_value}")
        # Returning False lets exception propagate if needed
        return True  # Suppresses the exception (set to False to re-raise)

with FileManager("example.txt", "r") as f:
    if f:
        print(f.read())
