import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Logins = () => {

    const {loginUser} = use(AuthContext);
    const navigate = useNavigate();

 const location = useLocation();

 

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        
        const email = form.email.value
        const password = form.password.value;
        console.log(email,password);

        loginUser(email,password)
        .then(result=>{
            console.log(result);
            navigate(location?.state || '/')
            
        })
        .catch(error=>{
            console.log(error.message);
        })

    }
    return (
       
      
          <div className="card bg-base-100 mx-auto mt-20 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
            <h1 className="text-3xl font-bold">Login now!</h1>
              <form onSubmit={handleLogin} className="fieldset">
                {/* email */}
                <label className="label">Email</label>
                <input type="email" required name='email' className="input" placeholder="Email" />
                {/* password */}
                <label className="label">Password</label>
                <input type="password" required name='password' className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
                <p className='text-center mt-5 text-[16px]'>Don't have an account ? Please <Link className='text-blue-500 underline font-bold' to='/auth/register'>Register</Link></p>
              </form>
            </div>
          </div>
    );
};

export default Logins;