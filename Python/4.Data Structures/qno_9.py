def add_contact(phonebook, name, number):
    phonebook[name] = number

def get_contact(phonebook, name):
    return phonebook.get(name)

if __name__ == "__main__":
    phonebook = {}
    add_contact(phonebook, "Alice", "1234567890")
    add_contact(phonebook, "Bob", "9876543210")
    print(get_contact(phonebook, "Alice"))
    print(get_contact(phonebook, "Charlie"))
