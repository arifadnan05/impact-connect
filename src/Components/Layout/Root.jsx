import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar/Navbar'
import Footer from '../Pages/Shared/Footer/Footer'

const Root = () => {
    return (
        <div>
            <div className='px-11'>
                <Navbar></Navbar>
            </div>
            <div className='px-24'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Root
