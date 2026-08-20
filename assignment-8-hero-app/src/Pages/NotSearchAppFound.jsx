import appError from '../assets/App-Error.png';
const NotSearchAppFound = () => {
    return (
        <div className=' p-5 flex flex-col justify-center items-center min-h-120 col-span-4'>
                    <figure>
                        <img src={appError} alt="" />
                    </figure>
                    <h2 className=' text-3xl font-bold mt-5'>Oops!! APP NOT FOUND</h2>
                    <p className=' text-sm text-gray-400'>The App you are requesting is not found on our system.  please try another apps</p>
                
                </div>
    );
};

export default NotSearchAppFound;