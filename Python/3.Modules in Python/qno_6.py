import argparse

parser = argparse.ArgumentParser(description="Simple calculator using argparse")
parser.add_argument("a", type=float, help="First number")
parser.add_argument("b", type=float, help="Second number")
parser.add_argument("operation", choices=["add", "sub", "mul", "div"], help="Arithmetic operation")

args = parser.parse_args()

if args.operation == "add":
    result = args.a + args.b
elif args.operation == "sub":
    result = args.a - args.b
elif args.operation == "mul":
    result = args.a * args.b
elif args.operation == "div":
    result = args.a / args.b if args.b != 0 else "Cannot divide by zero"

print("Result:", result)
