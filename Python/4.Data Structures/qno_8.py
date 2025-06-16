def find_intersection(list1, list2):
    return [item for item in list1 if item in list2]

if __name__ == "__main__":
    a = [1, 2, 3, 4]
    b = [3, 4, 5, 6]
    print(find_intersection(a, b))
