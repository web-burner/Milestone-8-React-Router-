import bannerImage from '../../assets/books.jpg';
const Banner = () => {
  return (
    <div className="hero p-10 bg-base-200 w-11/12 rounded-xl mx-auto mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImage}
          className=" rounded-lg w-1/2"
        />
        <div className=' w-1/2'>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <button className="btn bg-green-600 mt-5 text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
