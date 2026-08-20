// import logo from '../assets/logo.png';
const Spinner = () => {
    return (
        <div className=' flex justify-center items-center gap-3 col-span-4 min-h-162.5'>
            {/* <img className=' border-b border-4 rounded-full animate-spin h-10 w-10' src={logo} alt="" /> */}
            <div className=' border-y-6 rounded-full animate-spin h-15 w-15 flex justify-center items-center'>
                <div className=' h-7 w-7 bg-black rounded-full '></div>
            </div>
            <h1 className=' text-2xl font-bold'>HERO.IO</h1>
        </div>
    );
};

export default Spinner;