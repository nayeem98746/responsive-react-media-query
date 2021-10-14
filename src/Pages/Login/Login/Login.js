import React from 'react';
import useAuth from '../../../Hooks/UseAuth';

const Login = () => {
    const {singInUseingGoogle} = useAuth()
    return (
        <div>
            <h2>please log in</h2>
            <button onClick={singInUseingGoogle} className="btn btn-warning">
                Google Sing In
            </button>
        </div>
    );
};

export default Login;