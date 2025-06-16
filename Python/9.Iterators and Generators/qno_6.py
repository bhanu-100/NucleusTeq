def cartesian_product(list1, list2):
    for a in list1:
        for b in list2:
            yield (a, b)

list1 = [1, 2]
list2 = ['a', 'b']

for pair in cartesian_product(list1, list2):
    print(pair)
