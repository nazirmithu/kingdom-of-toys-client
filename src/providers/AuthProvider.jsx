import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])


    const getInfo = {
        user,
        loading,
        createUser,
        handleSignIn,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={getInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;