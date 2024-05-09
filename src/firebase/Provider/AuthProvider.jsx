import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth/cordova"
import { createContext, useEffect, useState } from "react"
import auth from "../firebase.config"

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // google sign in
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    // register email and password 

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // when register email and password set name and photo url
    const updateNameAndPhoto = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    // logout 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }







    const AuthInfo = {
        user,
        loading,
        googleSignIn,
        createUser,
        updateNameAndPhoto,
        logOut

    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])



    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider