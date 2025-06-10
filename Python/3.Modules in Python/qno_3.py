import random

def generate_password(length):
    chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    password = ''
    for _ in range(length):
        password += random.choice(chars)
    return password

if __name__ == "__main__":
    print(generate_password(8))
