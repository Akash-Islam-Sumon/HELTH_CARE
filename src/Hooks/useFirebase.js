import firebaseAuthintication from "../Firebase/firebase.init";
import { GoogleAuthProvider,GithubAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword,signOut,onAuthStateChanged,createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from "react";
firebaseAuthintication();

const GoogleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();
const auth = getAuth();



const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

// register with email and password
    
    const registerWithEmailPss = (e) => {
        console.log(email,password);
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
            alert("Are you sure ?")
            })
            .catch(error => {
            setError(error.massege)
        })
        
    }

    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    const signInWithEmail = (e) => {
        console.log(email,password);
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)  
            .then(result => {
            console.log(result.user)
            })
            .catch(error => {
                setError(error.massege)               
        })
    }


    // sign up with google
    const GoogleSignUp = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                setUser(result.user);
                console.log(user);
            }).catch(error => {
                setError(error.massege)
        
            })
    }
    // sign in with github here
    const GitHubSignUp = () => {
        signInWithPopup(auth, GitHubProvider)
            .then(result => {
                 setUser(result.user);
        })
    }
    // Log Out function here.
    const logOut = () => {
        signOut(auth)
        .then(()=>{})
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribe;
    
    }, [])
    return {
        user,
        GoogleSignUp,
        GitHubSignUp,
        signInWithEmail,
        getEmail,
        getPassword,
        registerWithEmailPss,
        logOut,
        error
    }
}
export default useFirebase;