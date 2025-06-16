import re

text = "Alice and Bob went to New York City last Summer."

capital_words = re.findall(r'\b[A-Z][a-z]*\b', text)
print(capital_words)
