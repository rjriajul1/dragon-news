import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 

  // user create with email and password
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login with email and password

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user sign out
  const userSignOut = () => {
    setError("");
    setLoading(true);
    return signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //   user profile updata

  const updateUserProfile = (userData) => {
    return updateProfile(auth.currentUser, userData)
    
  };

  // this function observe always our auth config

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
     
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    registerUser,
    loginUser,
    user,
    setUser,
    userSignOut,
    loading,
    setLoading,
    error,
    setError,
    updateUserProfile
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
