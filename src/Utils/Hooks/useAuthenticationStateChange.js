import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../Slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect } from "react";

const useAuthenticationStateChange = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
};

export default useAuthenticationStateChange;
