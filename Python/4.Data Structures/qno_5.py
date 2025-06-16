def sort_by_second(tuples):
    return sorted(tuples, key=lambda x: x[1])

if __name__ == "__main__":
    data = [(1, 3), (4, 1), (2, 2)]
    print(sort_by_second(data))
