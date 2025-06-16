file_path = "/Users/bhanu/Documents/NucleusTeq/Python/9.Iterators and Generators/sample.txt"
def read_lines(filename):
    with open(filename, 'r') as f:
        for line in f:
            yield line

def strip_lines(lines):
    for line in lines:
        yield line.strip()

def non_empty(lines):
    for line in lines:
        if line:
            yield line

def to_uppercase(lines):
    for line in lines:
        yield line.upper()

lines = read_lines(file_path)
stripped = strip_lines(lines)
filtered = non_empty(stripped)
uppercased = to_uppercase(filtered)

for line in uppercased:
    print(line)
