import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
  sendPasswordResetEmail
} from "firebase/auth";
import { useEffect, useState } from "react";
// import initializeFirebase from "../Firebase/Firebase.init";
import initializeFirebase from "../Firebase/Firebase.init";

initializeFirebase()


const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading,setIsLoading] = useState(true) 
  const auth = getAuth();
//////////////////////////////////////////////////////////////////////////////////////////////////// 
  const signInWithGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      
    .finally(()=> setIsLoading(false));
    }
    
////////////////////////////////////////////////////////////////////////////      
    useEffect(() => {
      const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if (user) {
                // setUser(user.uid);
                setUser(user);
              
            } else {
                setUser({})
        }
        setIsLoading(false)
      });
        return ()=>unsubscribed
    }, []);

    
    const resetPass = (email) => {
        sendPasswordResetEmail(auth,email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
    ///////////////////////////////////////
  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => { })
    .finally(()=> setIsLoading(false));
    };
  ////////////////////////////////////////////////
  
  return {
    signInWithGoogle,
    user,
    setUser,
    logOut,
      isLoading,
    resetPass
  };
};
export default useFirebase;