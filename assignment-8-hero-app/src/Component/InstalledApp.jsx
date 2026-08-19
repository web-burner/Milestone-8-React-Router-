import { FaStar } from "react-icons/fa";
import { IoCloudDownload } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

const InstalledApp = ({ app , handleRemove}) => {
  const {id, image, title, downloads, size, ratingAvg } = app;
  
  return (
    <div className=" flex items-center justify-between p-5 bg-base-300 rounded-2xl mb-5">
      <div className=" flex items-center gap-4">
        <figure>
          <img className=" w-15 rounded-xl" src={image} alt="" />
        </figure>
        <div className=" flex gap-5 items-center">
          <h1 className=" text-lg font-semibold">{title}</h1>
          <div className=" flex gap-3 items-center">
            <p className=" flex items-center gap-1">
              <IoCloudDownload className=" text-green-600" /> {downloads}
            </p>
            <p className=" flex items-center gap-1">
              <FaStar className=" text-yellow-400" /> {ratingAvg}
            </p>
            <p>{size}MB</p>
          </div>
        </div>
      </div>
      <button onClick={()=> handleRemove(id,title)} className=" btn bg-red-600 border-0 text-white">
        {" "}
        <MdDeleteForever />
        Uninstall
      </button>
    </div>
  );
};

export default InstalledApp;

// {
//     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbzqESgnUONKrMYOO5a519Jcn9oy9hFl1p9wVBYbBeA&s",
//     "title": "MotionForge",
//     "companyName": "Reeltime Media",
//     "id": 2,
//     "description": "MotionForge is a full-featured video editor built for creators who want cinematic results without a steep learning curve. Cut, trim, and arrange clips on a multi-track timeline, then polish your project with built-in transitions, color grading, and motion titles. Export in 4K and share directly to your favorite platforms.",
//     "size": 239.1,
//     "reviews": "1.7m",
//     "ratingAvg": 3.7,
//     "downloads": "95.2m",
//     "ratings": [
//         {
//             "name": "1 star",
//             "count": 115964
//         },
//         {
//             "name": "2 star",
//             "count": 160323
//         },
//         {
//             "name": "3 star",
//             "count": 360419
//         },
//         {
//             "name": "4 star",
//             "count": 531118
//         },
//         {
//             "name": "5 star",
//             "count": 549210
//         }
//     ],
//     "Downloaded": true
// }
