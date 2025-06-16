def format_currency(n):
    return "{:,}".format(n)

if __name__ == "__main__":
    number = 1000000
    print(format_currency(number))
