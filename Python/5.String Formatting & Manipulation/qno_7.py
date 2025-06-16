def caesar_cipher(text, shift):
    result = ""
    for char in text:
        if char.isupper():
            result += chr((ord(char) - 65 + shift) % 26 + 65)
        elif char.islower():
            result += chr((ord(char) - 97 + shift) % 26 + 97)
        else:
            result += char
    return result

if __name__ == "__main__":
    message = "Hello World"
    shift_value = 3
    print(caesar_cipher(message, shift_value))
