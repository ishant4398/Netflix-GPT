import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/Slices/userSlice";
import { auth } from "../firebase";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Firebase Authentication Methods:-
  // Below code is commented as updated user is not adding to redux store
  // Because updateProfile method for updating displayName and photoURL does not trigger onAuthStateChanged method again after createUserWithEmailAndPassword (Sign Up Method)

  const addUserToRedux = (user) => {
    const { uid, email, displayName, photoURL } = user;

    const userObj = {
      uid: uid,
      email: email,
      displayName: displayName,
      photoURL: photoURL,
    };

    dispatch(addUser(userObj));
  };

  const removeUserFromRedux = () => {
    dispatch(removeUser());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // After Sign In / Sign Up
        addUserToRedux(user);
        navigate("/browse");
      } else {
        // After Sign Out
        removeUserFromRedux();
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
