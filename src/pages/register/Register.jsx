
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";


const Register = () => {


  const {registerUser,error,setError,updateUserProfile} = useContext(AuthContext)
  const navigate = useNavigate()
 

    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo= form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
       setError('')
        registerUser(email,password)
        .then(result=>{
          console.log(result);
       

          // user profile update
          const userData = {
            displayName:name,
            photoURL:photo
          }
          setError('')
          updateUserProfile(userData)
          .then(result=>{
            console.log(result);
               navigate('/')
          })
          .catch(error=>{
            setError(error.message)
          })
      })
      .catch(error=>{
          setError(error.message);
      })
    }
  return (
    <div className="card bg-base-100 mx-auto mt-20 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Register now!</h1>
        <form onSubmit={handleRegister} className="fieldset">
          {/* name */}
          <label className="label">Your name</label>
          <input type="text" name="name" className="input" placeholder="Your name" />

          {/* photo */}
          <label className="label">Photo URL</label>
          <input type="text" name="photoURL" className="input" placeholder="Photo URL" />
          
          {/* email */}
          <label className="label">Email</label>
          <input type="email" required name="email" className="input" placeholder="Email" />

          {/* password */}
          <label className="label">Password</label>
          <input type="password" required name="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Register</button>
          <p className="text-center text-red-500">{error}</p>
          <p className="text-center mt-5 text-[16px]">
            Already have an account ? Please{" "}
            <Link
              className="text-blue-500 underline font-bold"
              to="/auth/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
