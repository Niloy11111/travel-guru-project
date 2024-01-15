import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

    const googleprovider = new GoogleAuthProvider();

    const [user , setUser ] = useState(null) ;

    const googleSignIn = () => {
        return signInWithPopup(auth, googleprovider)
    }

    const facebookProvider = new FacebookAuthProvider();

    const  facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider)
    }


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect( () => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
              setUser(currentUser)
        })

        return () => {
            unSubscribe() ;
        }
    }, [])

    const AuthInfo = {
        user,
        createUser,
        signInUser,
        logOut ,
        googleSignIn,
        facebookSignIn
    }


    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;     