import { useNavigate } from "react-router";

const StoredBook = ({ book }) => {
  // console.log(book);
  const {
    bookId,
    bookName,
    image,
    author,
    tags,
    yearOfPublishing,
    category,
    rating,
    publisher,
    totalPages,
  } = book;
  const navigate = useNavigate();
  return (
    <div className=" border border-gray-200 mb-5 p-4 rounded-xl flex gap-5">
      <div className=" p-5 rounded-xl bg-base-300">
        <img src={image} className=" w-30 h-45 " alt={bookName} />
      </div>
      <div className=" space-y-3">
        <div>
          <h1 className=" text-2xl font-bold">{bookName}</h1>
          <h2>By: {author}</h2>
        </div>
        <div className=" border-b border-gray-300 pb-2 mb-4 space-y-3">
          <div className=" flex gap-5 text-gray-400">
            <p>
              <span className=" font-bold text-black">Tags:</span>{" "}
              <span className=" bg-green-200 text-green-600 rounded-full mr-5 p-2">
                {tags[0]}
              </span>
              <span className=" bg-green-200 text-green-600 rounded-full p-2">
                {tags[1]}
              </span>
            </p>
            <p> Year Of Publishing: {yearOfPublishing}</p>
          </div>
          <div className=" flex gap-5 text-gray-400">
            <p>Publisher: {publisher}</p>
            <p>Pages: {totalPages}</p>
          </div>
        </div>
        <div className=" flex justify-between">
          <p className=" bg-blue-200 text-blue-600 rounded-full p-2">
            Category: {category}
          </p>
          <p className=" bg-amber-200 text-amber-600 rounded-full p-2">
            Rating: {rating}
          </p>
          <button
            onClick={() => navigate(`/books/${bookId}`, { state: book })}
            className=" bg-green-600 text-white rounded-full p-2"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoredBook;
