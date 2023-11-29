import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../Utils/Slices/userSlice";
import { auth } from "../firebase";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // After Sign In / Sign Up
      } else {
        // After Sign Out
        dispatch(removeUser());
        navigate("/");
      }
    });
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
