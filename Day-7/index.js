// Activity 1: Object Creation and Access

// Task 1:

let Book = {
  title: "Atomic Habit",
  author: "James Clear",
  year: "October 16, 2018",
};

console.log(Book);

// Task 2:

let Book = {
  title: "Atomic Habit",
  author: "James Clear",
  year: "October 16, 2018",
};

console.log(Book["title"]);
console.log(Book["author"]);

// Activity 2: Object Methods

// Task 3:

let Book = {
  title: "Atomic Habit",
  author: "James Clear",
  year: "October 16, 2018",
  getInfo: function () {
    return this.title + " by " + this.author;
  },
};

console.log(Book.getInfo());

// Task 4:

let Book = {
  title: "Atomic Habit",
  author: "James Clear",
  year: "October 16, 2018",
  yearChanger: function (newYear) {
    this.year = newYear;
    return newYear;
  },
};
console.log(Book.yearChanger("2022"));

// Activity 3: Nested Objects

// Task 5:

let library = {
  name: "CITY LIBRARY",
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedYear: 1925,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: 1960,
    },
    {
      title: "1984",
      author: "George Orwell",
      publishedYear: 1949,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      publishedYear: 2018,
    },
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      publishedYear: 1937,
    },
  ],
};
console.log(library);

// Task 6:

let library = {
  name: "CITY LIBRARY",
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedYear: 1925,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: 1960,
    },
    {
      title: "1984",
      author: "George Orwell",
      publishedYear: 1949,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      publishedYear: 2018,
    },
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      publishedYear: 1937,
    },
  ],
};
library.books.forEach((book) => {
  console.log(book.title);
});

// Activity 4: The this Keyword

// Task 7:

let library = {
  name: "CITY LIBRARY",
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedYear: 1925,
      getInfo: function () {
        return this.title + " in year" + this.publishedYear;
      },
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: 1960,
      getInfo: function () {
        return this.title + " in year" + this.publishedYear;
      },
    },
    {
      title: "1984",
      author: "George Orwell",
      publishedYear: 1949,
      getInfo: function () {
        return this.title + " in year" + this.publishedYear;
      },
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      publishedYear: 2018,
      getInfo: function () {
        return this.title + " in year" + this.publishedYear;
      },
    },
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      publishedYear: 1937,
      getInfo: function () {
        return this.title + " in year" + this.publishedYear;
      },
    },
  ],
};
library.books.forEach((book) => {
  console.log(book.getInfo());
});

// Activity 5: Object Iteration

// Task 8:

let library = {
  name: "CITY LIBRARY",
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedYear: 1925,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: 1960,
    },
    {
      title: "1984",
      author: "George Orwell",
      publishedYear: 1949,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      publishedYear: 2018,
    },
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      publishedYear: 1937,
    },
  ],
};
library.books.forEach((book) => {
  console.log("Book:");
  for (const property in book) {
    console.log(`${property}=${book[property]}`);
  }
});

//Task 9:

let library = {
  name: "CITY LIBRARY",
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedYear: 1925,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: 1960,
    },
    {
      title: "1984",
      author: "George Orwell",
      publishedYear: 1949,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      publishedYear: 2018,
    },
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      publishedYear: 1937,
    },
  ],
};
library.books.forEach((book) => {
  console.log("Book:");

  let keys = Object.keys(book);
  let values = Object.values(book);

  keys.forEach((key, index) => {
    console.log(`${key}=${values[index]}`);
  });
});
