import re

text = "Replace all whitespaces with hyphens."

result = re.sub(r'\s+', '-', text)
print(result)
