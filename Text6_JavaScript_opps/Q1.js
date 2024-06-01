class Book {
    constructor(bookNumber, bookName, author, publisher, price, totalCopies) {
        this.bookNumber = bookNumber;
        this.bookName = bookName;
        this.author = author;
        this.publisher = publisher;
        this.price = price;
        this.totalCopies = totalCopies;
        this.copiesIssued = 0;
    }

    issueBook() {
        if (this.copiesIssued < this.totalCopies) {
            this.copiesIssued++;
            console.log("Book issued successfully!");
        } else {
            console.log("Sorry, the book is currently unavailable.");
        }
    }

    returnBook() {
        if (this.copiesIssued > 0) {
            this.copiesIssued--;
            console.log("Book returned successfully!");
        } else {
            console.log("There are no issued copies of this book to return.");
        }
    }

    displayInfo() {
        console.log("Book Number:", this.bookNumber);
        console.log("Book Name:", this.bookName);
        console.log("Author:", this.author);
        console.log("Publisher:", this.publisher);
        console.log("Price:", this.price);
        console.log("Total Copies:", this.totalCopies);
        console.log("Copies Issued:", this.copiesIssued);
    }
}

// Example usage:
let book1 = new Book(4, "World War: Whole World", "Martin", "Facebook", 60, 4,2);
// book1.displayInfo();

// book1.issueBook();
// book1.issueBook();
book1.displayInfo();

book1.returnBook();
// book1.displayInfo();

// book1.issueBook();
// book1.displayInfo();
