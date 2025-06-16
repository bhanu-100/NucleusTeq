import re

query = "name=JohnDoe&age=25&city=NewYork&empty=&flag"

pattern = r'([^&=]+)=([^&]*)'

pairs = re.findall(pattern, query)
print(pairs)
