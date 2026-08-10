import { useState } from "react";
import { getStoredBooks } from "../../utilities/localStorage/localStorage";
import WishBook from "./WishBook";

const WishList = ({ booksData }) => {
  const storedData = getStoredBooks("wishBooks");
  const storedBooks = storedData.map((id) => {
    const matchedBooks = booksData.find((book) => book.bookId === id);
    // console.log(book)
    return matchedBooks;
  });
  const [sort, setSort] = useState("Sort");
  const [data, setData] = useState(storedBooks);
  const handleSort = (status) => {
    console.log("btn was clicked");
    setSort(status);
    if (status === "Pages") {
      const sortedData = [...storedBooks].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      setData(sortedData);
      return;
    }
    if (status === "Rating") {
      const storedData = [...storedBooks].sort((a, b) => a.rating - b.rating);
      setData(storedData);
    }
  };
  return (
    <div>
      <div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            By {sort}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => handleSort("Pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => handleSort("Rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      {storedBooks.length === 0 ? (
        <div className=" h-100 flex justify-center items-center">
          {" "}
          <p className=" p-20 bg-gray-200 rounded-2xl text-2xl font-bold">
            Not yet add any Books
          </p>{" "}
        </div>
      ) : (
        data.map((book) => <WishBook book={book} key={book.bookId} />)
      )}
    </div>
  );
};

export default WishList;
