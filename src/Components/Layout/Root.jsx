import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar/Navbar'
import Footer from '../Pages/Shared/Footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <div className='px-11'>
                <Navbar></Navbar>
                <ToastContainer />
            </div>
            <div className='container mx-auto px-6 lg:px-24'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Root
