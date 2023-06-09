import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";



export const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

     
    
    const createUser = (email, password ) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email,password)
    }
    const signInWithGoogle = () =>{
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGithub = () =>{
        setLoader(true);
        return signInWithPopup(auth, gitHubProvider)
    }

    const updateUserProfile = (name,photo)=>{
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo
          
        })
        .then(() => setUser((user) => (
          { ...user, displayName: name, photoURL: photo })))
       .catch((error) => { console.log(error) });
      }
      

    const logOut = () =>{
        setLoader(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            // console.log('current user',currentUser)
            if(currentUser){
                axios.post('http://localhost:5000/jwt',{email: currentUser.email})
                .then(data =>{
                  // console.log(data.data.jsonToken);
                  localStorage.setItem('access-token', data.data.jsonToken)
                  setLoader(false);
                })
                // setLoader(false);
              }
              else{
                localStorage.removeItem('access-token')
              }
  
            
        })
        return () =>{
            return unsubscribe();
        }
    },[])
    const authInfo={
        user,
        loader,
        setLoader,
        signInWithGoogle,
        signInWithGithub,
        createUser,
        signInUser,
        logOut, 
        updateUserProfile
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;