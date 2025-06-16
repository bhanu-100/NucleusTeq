def reverse_list(lst):
    reversed_list = []
    for i in range(len(lst) - 1, -1, -1):
        reversed_list.append(lst[i])
    return reversed_list

if __name__ == "__main__":
    original = [1, 2, 3, 4, 5]
    print(reverse_list(original))
