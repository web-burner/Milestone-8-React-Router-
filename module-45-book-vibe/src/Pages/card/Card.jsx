import { Star } from 'lucide-react';
import { useNavigate } from 'react-router';
const Card = ({ singleData }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    // totalPages,
    rating,
    category,
    tags,
    // publisher,
  } = singleData;
  const navigate = useNavigate()
  const handleRoute = ()=>{
    navigate(`books/${bookId}`,{state:singleData})
  }
  return (
    <div onClick={handleRoute} className="card bg-base-100 shadow-xl border rounded-xl border-gray-200 ">
      <div className=" p-5">
        <figure className=" bg-base-200 py-5 rounded-2xl">
        <img src={image} className=" w-35 h-55" alt="Books" />
      </figure>
      </div>
      <div className="card-body">
        <div className=" flex justify-between">
          <span className=" bg-green-100 text-green-600 rounded-full p-2">
            {tags[0]}
          </span>
          <span className=" bg-green-100 text-green-600 rounded-full p-2">
            {tags[1]}
          </span>
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <div className="card-actions justify-between border-t border-dashed pt-1 ">
          <span>{category}</span>
          <span className=' flex items-center gap-3'>{rating}  <Star /></span>
        </div>
      </div>
    </div>
  );
};

export default Card;

// {
//     "bookId": 7,
//     "bookName": "Harry Potter and the Sorcerer's Stone",
//     "author": "J.K. Rowling",
//     "image": "https://i.ibb.co.com/989qMRW/42844155.jpg",
//     "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
//     "totalPages": 309,
//     "rating": 4.8,
//     "category": "Fantasy",
//     "tags": [
//         "Magic",
//         "Young Adult"
//     ],
//     "publisher": "Bloomsbury",
//     "yearOfPublishing": 1997
// }
