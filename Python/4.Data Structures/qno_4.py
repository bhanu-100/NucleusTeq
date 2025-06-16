def word_frequency(words):
    freq = {}
    for word in words:
        if word in freq:
            freq[word] += 1
        else:
            freq[word] = 1
    return freq

if __name__ == "__main__":
    word_list = ["apple", "banana", "apple", "orange", "banana", "apple"]
    print(word_frequency(word_list))
