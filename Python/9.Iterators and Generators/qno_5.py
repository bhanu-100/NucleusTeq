def line_generator(filename):
    with open(filename, 'r') as file:
        for line in file:
            yield line

for line in line_generator("example.txt"):
    print(line, end='')
