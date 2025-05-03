import React from 'react';
import { Link } from 'react-router';

const Logins = () => {
    return (
       
      
          <div className="card bg-base-100 mx-auto mt-20 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
            <h1 className="text-3xl font-bold">Login now!</h1>
              <from className="fieldset">
                {/* email */}
                <label className="label">Email</label>
                <input type="email" required name='email' className="input" placeholder="Email" />
                {/* password */}
                <label className="label">Password</label>
                <input type="password" required name='password' className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
                <p className='text-center mt-5 text-[16px]'>Don't have an account ? Please <Link className='text-blue-500 underline font-bold' to='/auth/register'>Register</Link></p>
              </from>
            </div>
          </div>
    );
};

export default Logins;