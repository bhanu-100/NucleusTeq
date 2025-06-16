def remove_duplicates(lst):
    unique = []
    for item in lst:
        if item not in unique:
            unique.append(item)
    return unique

if __name__ == "__main__":
    original = [1, 2, 2, 3, 4, 4, 5]
    print(remove_duplicates(original))
