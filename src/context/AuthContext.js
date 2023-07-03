import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const SignUpWithEmailPass = async(email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      savedItems: [],
    });
  };

  const LoginWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignInWithGoogle = async() => {
    const Provider = new GoogleAuthProvider();
    await signInWithPopup(auth, Provider);
    setDoc(doc(db, "users", 'email'), {
      savedItems: [],
    });
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        SignInWithGoogle,
        SignUpWithEmailPass,
        LoginWithEmailPass,
        logOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const UseAuthProvider = () => {
  return useContext(AuthContext);
};

export { AuthProvider, UseAuthProvider };
