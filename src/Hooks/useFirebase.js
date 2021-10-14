import React from "react";
import { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import initialLizetionAuthentication from "../Component/Firebase/Firebase.init";
import { useEffect } from "react";
initialLizetionAuthentication();
const GoogleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading);

  const auth = getAuth();
  const googleSignIn = () => {
    setIsLoading(true);
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const registration = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateInformation(name, email, password);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const updateInformation = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).catch((error) => {
      setError(error.message);
    });
  };
  const reset = (email) => {
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        setError("password reset mail sended on your email address");
      })
      .catch((error) => {
        setError("please give us your email address");
      })
      .finally(() => {
        setError("");
      });
  };

  useEffect(() => {
    const unSubsCribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false);
    });

    return () => unSubsCribe;
  }, []);
  return {
    user,
    error,
    isLoading,
    setIsLoading,
    logOut,
    login,
    updateInformation,
    reset,
    registration,
    googleSignIn,
  };
};

export default useFirebase;
