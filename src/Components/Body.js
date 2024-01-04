import Header from "./Header/Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import useAuthenticationStateChange from "../Utils/Hooks/useAuthenticationStateChange";
import useGetDataFromLocalStorage from "../Utils/Hooks/useGetDataFromLocalStorage";

const Body = () => {
  useGetDataFromLocalStorage();
  useAuthenticationStateChange();

  const location = useLocation();
  const currentPath = location.pathname;
  const isWatchComponent = currentPath.includes("/watch/");

  return (
    <div className="flex flex-col">
      <ScrollToTop />
      {!isWatchComponent && <Header />}
      <Outlet />
      {/* {!isWatchComponent && <Footer />} */}
    </div>
  );
};

export default Body;
