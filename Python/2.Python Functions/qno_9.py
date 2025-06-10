def flatten_list(nested_list):
    result = []
    for item in nested_list:
        if isinstance(item, list):
            result.extend(flatten_list(item))
        else:
            result.append(item)
    return result

if __name__ == "__main__":
    nested = [1, [2, [3, 4], 5], [6, 7], 8]
    flat = flatten_list(nested)
    print("Flattened list:", flat)
