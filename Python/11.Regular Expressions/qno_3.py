import re

text = "Loving the #sunshine and #blue_skies today! #happy #nature"

hashtags = re.findall(r'#\w+', text)
print(hashtags)
