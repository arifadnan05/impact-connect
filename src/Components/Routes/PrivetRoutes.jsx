import { useContext } from 'react'
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider';

const PrivetRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if (user) {
        return children;
    }


    return <Navigate state={location.pathname} to='/login'></Navigate>
}

PrivetRoutes.propTypes = {
    children: PropTypes.object
}

export default PrivetRoutes