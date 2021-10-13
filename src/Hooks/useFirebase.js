import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";



const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth()

    const singInUseingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        });
    }
    //  observe user state change
    useEffect(()=> {
      const unsubscribed =  onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        })
        return () => unsubscribed;
    } ,[])





    const logOut = () => {
        signOut(auth)
        .then(() => { })
    }







    return{
        user,
        singInUseingGoogle,
        logOut
    }

}

