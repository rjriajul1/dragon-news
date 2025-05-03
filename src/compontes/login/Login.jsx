import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div className='mt-5'>
            <button className='btn w-full font-bold mb-4 hover:bg-secondary hover:text-white'><FcGoogle size={24}/>Login with Google</button>
            <button className='btn w-full hover:bg-primary hover:text-base-200'><FaGithub size={24}/>Login with Github</button>
        </div>
    );
};

export default Login;