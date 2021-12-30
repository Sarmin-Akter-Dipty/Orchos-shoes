import { useEffect, useState } from "react";
import initializeFirebase from "../Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";


initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, location, navigate) => {
        setIsLoading(true)
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const destination = location?.state?.from || '/';
                // navigate(destination);
                setAuthError('')
                const newUser = { email, displayName: name, }
                setUser(newUser)

                //save user to the database
                saveUser(email, name, 'POST')

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });

                navigate('/')

            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error.message)




            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('')
            })
            .catch((error) => {

                setAuthError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            });
    }

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')

                setAuthError('')
                const destination = location?.state?.from || '/';
                navigate(destination);

            }).catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            });
    }


    //observer user state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unSubscribe
    }, [])

    useEffect(() => {
        fetch(`https://guarded-hollows-10876.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user?.email])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => {
                setIsLoading(false)
            });
    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://guarded-hollows-10876.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        logOut,
        loginUser,
        signInWithGoogle

    }

}
export default useFirebase;