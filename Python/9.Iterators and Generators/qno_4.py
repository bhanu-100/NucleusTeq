class StringIterator:
    def __init__(self, string):
        self.string = string
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.index >= len(self.string):
            raise StopIteration
        char = self.string[self.index]
        self.index += 1
        return char

s = StringIterator("Hello")
for ch in s:
    print(ch)
