import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar/Navbar'
import Footer from '../Pages/Shared/Footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';

const Root = () => {
    const [loading, SetLoading] = useState(true);

    useEffect(() => {
        SetLoading(true)

        setTimeout(() => {
            SetLoading(false)
        }
            , 1900)
    }, [])

    return (
        <>
            {
                loading ? (
                    <div className='flex justify-center h-[100vh] items-center'><PulseLoader
                        color={'#9067C6'}
                        loading={true}
                        size={30}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    /></div>
                ) : (
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
        </>

    )
}

export default Root
