class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if self.items:
            return self.items.pop()
        return None

    def peek(self):
        if self.items:
            return self.items[-1]
        return None

if __name__ == "__main__":
    s = Stack()
    s.push(10)
    s.push(20)
    print(s.peek())
    print(s.pop())
    print(s.pop())
    print(s.pop())
