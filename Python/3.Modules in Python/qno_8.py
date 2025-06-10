import os
import sys

def list_files():
    files = os.listdir()
    print("Files in current directory:")
    for file in files:
        print(file)

def show_args():
    print("Command-line arguments:")
    for arg in sys.argv:
        print(arg)

if __name__ == "__main__":
    list_files()
    show_args()
