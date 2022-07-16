import React from 'react';
import {useNavigate} from 'react-router-dom';

type Props = {
    isAuth: boolean;
    children?: React.ReactNode
}

const ProtectedRoute = ({isAuth, children}: Props) => {
    let navigate = useNavigate();
    if (!isAuth) {
        navigate("/login", {replace: true});
        return;
    } else {
        return children;  
    }
}

export default ProtectedRoute;