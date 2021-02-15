import React, { useContext, useEffect  } from "react";
import { useHistory } from 'react-router-dom';
import Admin from "./admin";
import Login from "./../../containers/login/login";
import { AdminContext } from './../../utils/store';


const AdminAuth = () => {
    const admin = useContext(AdminContext);
    const history = useHistory();

    
    useEffect(() => {
        if (!admin.isLoggedIn.status) {
            return history.push('/login');
        }
    }, [])

    return(
        <div>
            {
             admin.isLoggedIn.status ? <Admin path='/admin'/> : <Login />
            }
        </div>
    )
}

export default AdminAuth;