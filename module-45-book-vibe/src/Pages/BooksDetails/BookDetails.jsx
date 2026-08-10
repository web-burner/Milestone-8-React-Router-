import {
  // useLoaderData,
  useLocation,
  useNavigate,
  // useParams
} from "react-router";
import {
  addToLS,
  getStoredBooks,
} from "../../utilities/localStorage/localStorage";
import { toast } from "react-toastify";

const BookDetails = () => {
  //     const params = Number(useParams().booksId)
  //     const data= useLoaderData().data;
  //     // console.log(data, params)
  // const book = data.find(singleBook => singleBook.bookId === params)

  const bookData = useLocation().state;
  const navigate = useNavigate();
  const handleReadBooks = (id,status) => {
    const storedBooks = getStoredBooks(status);
    if (storedBooks.includes(id)) {
      toast("Vai ei boi ta already exist");
      return;
    }
    addToLS(id,status);

    toast("Book Add to Local Storage Successfully");
  };
  const handleWishBooks = (id,status)=>{
    const storedBooks = getStoredBooks(status);
    if (storedBooks.includes(id)) {
      toast("Vai ei boi ta already exist");
      return;
    }
    addToLS(id,status);

    toast("Book Add to Local Storage Successfully");
  }
  const {
    bookId,
    bookName,
    author,
    image,
    category,
    review,
    tags,
    totalPages,
    rating,
    publisher,
    yearOfPublishing,
  } = bookData;
  return (
    <div className=" w-11/12 mx-auto flex gap-5 py-10 px-5">
      <div className=" w-1/2">
        <img src={image} className=" h-160 mx-auto" alt="Book Image" />
      </div>
      <div className=" w-1/2 space-y-3">
        <div className=" border-b border-gray-300 border-dashed">
          <h1 className=" text-4xl font-bold">{bookName}</h1>
          <h2>By: {author}</h2>
        </div>
        <div className=" border-b border-gray-300 border-dashed">
          <p className=" text-xl">{category}</p>
        </div>
        <div className=" border-b border-gray-300 border-dashed py-3">
          <p className=" mb-4">
            <span className=" font-bold">Review</span>
            {review}
          </p>
          <p>
            <span className=" font-bold">Tags:</span>{" "}
            <span className=" bg-green-100 text-green-600 rounded-full mr-3 p-2">
              {tags[0]}
            </span>
            <span className=" bg-green-100 text-green-600 rounded-full p-2">
              {tags[1]}
            </span>
          </p>
        </div>
        <div>
          <p>
            Number Of Pages: <span className=" font-bold">{totalPages}</span>
          </p>
          <p>
            Publisher: <span className=" font-bold">{publisher}</span>
          </p>
          <p>
            Year of publishing:{" "}
            <span className=" font-bold">{yearOfPublishing}</span>
          </p>
          <p>
            Rating: <span className=" font-bold">{rating}</span>
          </p>
        </div>
        <div>
          <button
            className=" btn mr-3 bg-green-600 text-white"
            onClick={() => handleReadBooks(bookId,'readBooks')}
          >Mark as Read
          </button>
          <button onClick={()=> handleWishBooks(bookId,'wishBooks')} className=" btn mr-3 bg-teal-600 text-white">Add to WishList</button>
          <button
            className=" btn bg-red-500 text-white"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

// {
//     "bookId": 5,
//     "bookName": "Pride and Prejudice",
//     "author": "Jane Austen",
//     "image": "https://i.ibb.co.com/YdQDMpn/81me-ud-V63-L-AC-UF1000-1000-QL80.jpg",
//     "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
//     "totalPages": 279,
//     "rating": 4.7,
//     "category": "Classic",
//     "tags": [
//         "Romance",
//         "Satire"
//     ],
//     "publisher": "T. Egerton, Whitehall",
//     "yearOfPublishing": 1813
// }
