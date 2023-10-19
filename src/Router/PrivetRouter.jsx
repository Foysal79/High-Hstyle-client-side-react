import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading)
    {
        return <h2 className="text-8xl font-medium mt-24 ml-20"><span className="loading loading-ring loading-lg "></span></h2>
    }
    if(user)
    {
        return children;
    }
    return <Navigate state={location.pathname} to='/login' ></Navigate>
};

export default PrivetRouter;