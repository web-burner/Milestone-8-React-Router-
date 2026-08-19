
const Apps = ({ app }) => {
  const { image, title, ratingAvg, reviews } = app;
  return (
    <div className=" bg-white rounded-2xl p-5 ">
      <img src={image} alt="App Image" />
      <h1>{title}</h1>
      <div className=' flex'>
        <p>{reviews}</p>
        <p>{ratingAvg}</p>
      </div>
    </div>
  );
};

export default Apps;

// {
//     "image": "https://picsum.photos/seed/pixelcraft-studio/512/512",
//     "title": "PixelCraft Studio",
//     "companyName": "Lumen Labs",
//     "id": 1,
//     "description": "PixelCraft Studio brings professional-grade photo editing to your pocket, with layered compositing, precision masking, and a full suite of adjustment tools. Retouch portraits, remove unwanted objects, and fine-tune color with AI-powered smart tools that used to require a desktop. Export in RAW or high-resolution formats and sync your edits seamlessly across devices.",
//     "size": 147,
//     "reviews": 4639,
//     "ratingAvg": 4.5,
//     "downloads": 213181,
//     "ratings": [
//         {
//             "name": "1 star",
//             "count": 54
//         },
//         {
//             "name": "2 star",
//             "count": 171
//         },
//         {
//             "name": "3 star",
//             "count": 302
//         },
//         {
//             "name": "4 star",
//             "count": 1210
//         },
//         {
//             "name": "5 star",
//             "count": 2902
//         }
//     ]
// }
