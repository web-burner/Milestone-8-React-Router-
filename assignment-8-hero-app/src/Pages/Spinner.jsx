import logo from '../assets/logo.png';
const Spinner = () => {
    return (
        <div className=' flex justify-center items-center gap-3 col-span-4 min-h-162.5'>
            <img className=' animate-spin h-10 w-10' src={logo} alt="" />
            <h1 className=' text-2xl font-bold'>HERO.IO</h1>
        </div>
    );
};

export default Spinner;