const getStoredBooks = (status) => {
  const books = localStorage.getItem(status);
  if (books) {
    return JSON.parse(books);
  }
  return [];
};

const addToLS = (id, status) => {
  const books = getStoredBooks(status);
  if (books.includes(id)) {
    alert("Vai ei id already exist");
  } else {
    books.push(id);
  }
  setToLS(books, status);
};
const setToLS = (data, status) => {
  const booksJson = JSON.stringify(data);
  localStorage.setItem(status, booksJson);
};

export { addToLS, getStoredBooks };
