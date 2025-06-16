import re

def tokenize(text):
    pattern = r'\w+|[^\w\s]'
    return re.findall(pattern, text)

text = "Hello, world! How's everything? Great, isn't it?"

tokens = tokenize(text)
print(tokens)

