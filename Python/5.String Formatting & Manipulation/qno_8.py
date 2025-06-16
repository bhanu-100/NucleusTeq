import re

def remove_html_tags(text):
    return re.sub(r'<[^>]*>', '', text)

if __name__ == "__main__":
    html_string = "<p>Hello <b>World</b>!</p>"
    print(remove_html_tags(html_string))
