// Create an array called books in JavaScript. It should contain the title and author
//  of each book, if the book has been sold out or is in stock, plus the price of the book.
//   Add 3 books to the array.

var books = [
    {
        title: "The Design of EveryDay Things",
        author: "Don Norman",
        isInStock: false,
        price: 20,
    },
    {
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        isInStock: true,
        price: 30,
    },
    {
        title: "The Midnight Library",
        author: "Matt Haig",
        isInStock: true,
        price: 15,
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        isInStock: true,
        price: 45,
    },
];
//I sorted it by author
function sortAlph(a, b) {
    if (a.author < b.author) {
        return -1;
    }
    if (a.author > b.author) {
        return 1;
    }
    return 0;
}

console.log(books.sort(sortAlph));
let sortedBooks = books.sort(sortAlph);
console.log(books);
console.log(sortedBooks);

// Show the elements of this array listed alphabetically in the HTML, and add a way
// for the user to add books. Style the HTML using CSS flex.
let parent = document.querySelector("h1");

let list = document.createElement("ol");

parent.appendChild(list);
for (let i = 0; i < books.length; i++) {
    let listItem = document.createElement("li");
    list.appendChild(listItem);
    listItem.innerText = books[i].author;
    let itemInfo = Object.values(books[i]);
    console.log(itemInfo);
    let listInfo = document.createElement("ul");
    listItem.appendChild(listInfo);
    let unlistitem1 = document.createElement("li");
    let unlistitem2 = document.createElement("li");
    let unlistitem3 = document.createElement("li");
    listInfo.appendChild(unlistitem1);
    unlistitem1.innerText = "Title: " + books[i].title;
    listInfo.appendChild(unlistitem2);
    unlistitem2.innerText = "Price: " + books[i].price;
    listInfo.appendChild(unlistitem3);
    unlistitem3.innerText = "Is in stock: " + books[i].isInStock;
}
