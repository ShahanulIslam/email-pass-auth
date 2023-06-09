import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from  "firebase/auth"
import app from '../../Firebase/firebase.conig';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth , email ,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const signInWithGoogle = () =>{
        return signInWithPopup(auth , googleAuthProvider)
    }


    useEffect( () =>{
      const unsubscribe = onAuthStateChanged(auth, currentUSer =>{
            console.log("Current user" , currentUSer)
            setUser(currentUSer)
            setLoading(false)
        }) 
        return () =>{
            unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
);
};

export default AuthProvider;