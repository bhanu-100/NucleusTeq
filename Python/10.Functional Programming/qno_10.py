def compose(*funcs):
    def composed(arg):
        for f in reversed(funcs):
            arg = f(arg)
        return arg
    return composed

def add1(x):
    return x + 1

def square(x):
    return x * x

f = compose(square, add1)
print(f(4))  # (4 + 1)^2 = 25
