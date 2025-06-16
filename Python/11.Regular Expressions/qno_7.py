import re

text = "Important dates: 12-05-2023, 31-12-2024, and invalid 99-99-9999."

dates = re.findall(r'\b(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})\b', text)
formatted_dates = ['-'.join(date) for date in dates]

print(formatted_dates)
