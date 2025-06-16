def merge_dicts(dict1, dict2):
    merged = {}
    for key in dict1:
        merged[key] = dict1[key]
    for key in dict2:
        merged[key] = dict2[key]
    return merged

if __name__ == "__main__":
    d1 = {'a': 1, 'b': 2}
    d2 = {'b': 3, 'c': 4}
    print(merge_dicts(d1, d2))
