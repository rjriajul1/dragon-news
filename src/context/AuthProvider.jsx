import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
import { Navigate } from 'react-router';


const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);
  
    console.log(user);

    // user create with email and password
    const registerUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    // user login with email and password

    const loginUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // user sign out 

    const userSignOut = ()=>{
       setLoading(true)
        return signOut(auth)
        .then(result=>{
            console.log(result);
            setUser(null)
        })
        .catch(error=>{
            console.log(error);
        })
    }


    // this function observe always our auth config

    useEffect(()=>{

       const unSubcribe = onAuthStateChanged(auth, (currentUser)=>{
        if(currentUser){
        //   console.log(currentUser);
          setUser(currentUser)
        }
        setLoading(false)
       })

       return ()=>{
        unSubcribe()
       }

    },[])

    const userInfo = {
        registerUser,
        loginUser,
        user,
        setUser,
        userSignOut,
        loading,
        setLoading

    }
   
    return (
        <AuthContext value={userInfo} >
            {children}
        </AuthContext>
    
    );
};

export default AuthProvider;