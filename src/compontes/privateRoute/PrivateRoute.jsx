import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate, useLocation} from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
  
    if(loading){
        return <p>loading...</p>
    }

    if(!user || !user?.email){
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }
    return (
       <div>
            {children}
        </div>
    );
};

export default PrivateRoute;