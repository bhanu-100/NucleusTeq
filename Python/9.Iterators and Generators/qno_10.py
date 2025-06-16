from contextlib import contextmanager

@contextmanager
def open_file(path, mode):
    file = open(path, mode)
    try:
        yield file
    finally:
        file.close()

with open_file('example.txt', 'w') as f:
    f.write('Hello from context manager!\n')

with open_file('example.txt', 'r') as f:
    print(f.read())
