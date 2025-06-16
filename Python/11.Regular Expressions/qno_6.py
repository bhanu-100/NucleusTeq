import re

def validate_password(pwd):
    pattern = r'^(?=.*\d)(?=.*[^\w\s]).{8,}$'
    return bool(re.match(pattern, pwd))

# Test examples
print(validate_password("Passw0rd!"))   # True
print(validate_password("password"))    # False (no digit, no symbol)
print(validate_password("Passw0rd"))    # False (no symbol)
print(validate_password("P@ss"))        # False (too short)
