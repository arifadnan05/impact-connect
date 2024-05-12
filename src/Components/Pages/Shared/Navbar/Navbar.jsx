import { useContext } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../../firebase/Provider/AuthProvider"
import auth from "../../../../firebase/firebase.config"
import { toast } from "react-toastify"

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut(auth)
        navigate(location?.state ? location.state : '/login')
        toast.success('Logout successful')

    }

    const navLinks = <>
        <Link to='/'>
            <li><a>Home</a></li>
        </Link>
        <Link to='/need-volunteer'>
            <li><a>Need Volunteer</a></li>
        </Link>
        <li>
            <details>
                <summary>My Profile</summary>
                <ul className="w-64">
                    <Link to='/add-volunteer'>
                        <li><a>Add Volunteer Post</a></li>
                    </Link>
                    <Link to={`/manage-my-post/${user?.email}`}>
                        <li><a>Manage My Post</a></li>
                    </Link>
                    <Link to={`/my-volunteer-request/${user?.email}`}>
                        <li><a>My Volunteer Requested</a></li>
                    </Link>
                </ul>
            </details>
        </li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-64">

                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">ImpactConnect</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 z-50">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        !user && <Link to='/login'><button className="btn">Login</button></Link>
                    }

                    {
                        user && <div className='dropdown dropdown-end z-50'>
                            <div
                                tabIndex={0}
                                role='button'
                                className='btn btn-ghost btn-circle avatar'
                            >
                                <div className='w-10 rounded-full' title={user?.displayName}>
                                    <img
                                        referrerPolicy='no-referrer'
                                        alt='User Profile Photo'
                                        src={user?.photoURL}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>


                                <p className="ml-4 mb-4">{user?.displayName}</p>

                                <li className='mt-2'>
                                    <button onClick={handleLogOut} className='bg-gray-200 block text-center'>Logout</button>
                                </li>
                            </ul>
                        </div>
                    }




                </div>
            </div>
        </div>
    )
}

export default Navbar
