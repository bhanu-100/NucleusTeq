class Book:
    def __init__(self, title, author, book_id):
        self.title = title
        self.author = author
        self.book_id = book_id
        self.available = True

    def __str__(self):
        status = "Available" if self.available else "Checked out"
        return f"{self.book_id} - {self.title} by {self.author} [{status}]"

class Member:
    def __init__(self, name, member_id):
        self.name = name
        self.member_id = member_id
        self.borrowed_books = []

    def borrow_book(self, book):
        if book.available:
            book.available = False
            self.borrowed_books.append(book)
            print(f"{self.name} borrowed '{book.title}'")
        else:
            print(f"'{book.title}' is currently unavailable.")

    def return_book(self, book):
        if book in self.borrowed_books:
            book.available = True
            self.borrowed_books.remove(book)
            print(f"{self.name} returned '{book.title}'")
        else:
            print(f"{self.name} does not have '{book.title}'")

    def list_borrowed_books(self):
        print(f"{self.name} has borrowed:")
        for book in self.borrowed_books:
            print(f" - {book.title}")
class Library:
    def __init__(self):
        self.books = []
        self.members = []

    def add_book(self, title, author):
        book_id = len(self.books) + 1
        book = Book(title, author, book_id)
        self.books.append(book)

    def add_member(self, name):
        member_id = len(self.members) + 1
        member = Member(name, member_id)
        self.members.append(member)

    def display_books(self):
        print("Library Books:")
        for book in self.books:
            print(book)

    def find_book_by_id(self, book_id):
        for book in self.books:
            if book.book_id == book_id:
                return book
        return None

    def find_member_by_id(self, member_id):
        for member in self.members:
            if member.member_id == member_id:
                return member
        return None
# Create library system
lib = Library()
lib.add_book("1984", "George Orwell")
lib.add_book("To Kill a Mockingbird", "Harper Lee")
lib.add_member("Bhanu")
lib.add_member("Pooja")

# Find members and books
bhanu = lib.find_member_by_id(1)
pooja = lib.find_member_by_id(2)
book1 = lib.find_book_by_id(1)
book2 = lib.find_book_by_id(2)

# Operations
bhanu.borrow_book(book1)
pooja.borrow_book(book1) 
bhanu.list_borrowed_books()
bhanu.return_book(book1)
pooja.borrow_book(book1)  

lib.display_books()
