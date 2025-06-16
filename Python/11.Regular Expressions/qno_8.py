import re

pattern = r'\b((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.|$)){4}\b'

text = "Valid IPs: 192.168.1.1, 255.255.255.255, 0.0.0.0. Invalid IPs: 256.100.0.1, 123.456.78.90"

ips = re.findall(pattern, text)
valid_ips = [ip[0] for ip in ips]

print(valid_ips)
