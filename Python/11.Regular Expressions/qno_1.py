import re

text = "Contact us at info@example.com, support@test.org or admin@domain.co.uk"

emails = re.findall(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', text)
print(emails)
