import { useNavigate } from 'react-router';
import appError from '../assets/App-Error.png';
const NotFoundApp = () => {
    const navigate = useNavigate()
    return (
        <div className=' p-10 flex flex-col justify-center items-center min-h-162.5'>
            <figure>
                <img src={appError} alt="" />
            </figure>
            <h2 className=' text-3xl font-bold mt-5'>Oops!! APP NOT FOUND</h2>
            <p className=' text-sm text-gray-400'>The App you are requesting is not found on our system.  please try another apps</p>
            <button onClick={()=> navigate(-1)} className=' mt-5 btn bg-violet-600 text-white'>Go Back</button>
        </div>
    );
};

export default NotFoundApp;