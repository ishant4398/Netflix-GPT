import { useEffect, useLayoutEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/Slices/userSlice";
import { auth } from "../firebase";
import { updateCurrentLang } from "../Utils/Slices/configSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;

  const isWatchComponent = currentPath.includes("/watch/");

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

  useLayoutEffect(() => {
    let currentLang = localStorage.getItem("currLanguage");

    if (currentLang) {
      dispatch(updateCurrentLang(currentLang));
    }
  }, []);

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
    <div className="flex flex-col">
      {!isWatchComponent && <Header />}
      <Outlet />
      {!isWatchComponent && <Footer />}
    </div>
  );
};

export default Body;
