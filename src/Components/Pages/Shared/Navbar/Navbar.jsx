import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../../firebase/Provider/AuthProvider"
import auth from "../../../../firebase/firebase.config"

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const { photoURL } = user;
    const handleLogOut = () => {
        return logOut(auth)
    }

    const navLinks = <>
        <Link to='/'>
            <li><a>Home</a></li>
        </Link>
        <li><a>Need Volunteer</a></li>
        <li>
            <details>
                <summary>My Profile</summary>
                <ul className="w-64">
                    <Link to='/add-volunteer'>
                        <li><a>Add Volunteer Post</a></li>
                    </Link>
                    <Link to='/manage-my-post'>
                        <li><a>Manage My Post</a></li>
                    </Link>
                    <Link to='/my-request-post'>
                        <li><a>My Volunteer Requested Post</a></li>
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
                        <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">

                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">ImpactConnect</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">



                    {
                        user ? <img className="object-cover w-12 h-12 rounded-full ring ring-gray-300 dark:ring-gray-600" src={photoURL}/> :

                            <Link to='/login'>
                                <button className="btn">Login</button>
                            </Link>

                    }

                        </div>
            </div>
            </div>
            )
}

            export default Navbar
