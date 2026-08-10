import Navbar from "../navbar/Navbar";
import {Outlet} from 'react-router';
import '../../App.css';
import {useNavigation} from 'react-router';
const Root = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <div>
            <Navbar></Navbar>
            {
                isNavigating && <p>Loading...</p>
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Root;