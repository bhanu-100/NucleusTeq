class MyList:
    def __init__(self, items=None):
        self.items = items if items else []

    def __str__(self):
        return str(self.items)

    def __len__(self):
        return len(self.items)

    def __getitem__(self, index):
        return self.items[index]

    def __setitem__(self, index, value):
        self.items[index] = value

    def __delitem__(self, index):
        del self.items[index]

    def __iter__(self):
        return iter(self.items)

    def append(self, value):
        self.items.append(value)

    def __contains__(self, value):
        return value in self.items

# Example usage
mlist = MyList([1, 2, 3])
print("Initial:", mlist)

mlist.append(4)
print("After append:", mlist)

print("Length:", len(mlist))
print("Element at index 1:", mlist[1])

mlist[1] = 20
print("After update:", mlist)

del mlist[0]
print("After deletion:", mlist)

print("Is 20 in list?", 20 in mlist)
