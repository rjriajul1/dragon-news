import userImg from "../../assets/user.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { use } from "react";
const Navbar = () => {
  const { user, userSignOut } = use(AuthContext);

  const handleSignOut = () => {
    userSignOut();
  };

  return (
    <div className="flex justify-between items-center">
      <div>{user && <p>{user?.email}</p>}</div>
      <div>
        <ul className="flex gap-5 text-accent">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/career">Career</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-5">
        <img src={userImg} alt="" />
        <div>
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-primary text-accent w-44 text-2xl"
            >
              Sign out
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-primary text-accent w-44 text-2xl"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
