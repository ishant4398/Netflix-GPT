import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IsAdminUser = ({ children }) => {
  const navigate = useNavigate();

  const allowedRoles = ["admin", "superAdmin"];
  const userRoles = ["user", "databaseUser", "ADMIN"]; // User roles will come from Backend Server in actual project

  const isUserAuthorized = userRoles.some((userRole) =>
    allowedRoles.some(
      (allowedrole) => allowedrole.toLowerCase() === userRole.toLowerCase()
    )
  );

  //   const isUserAuthorized = userRoles.some((userRole) =>
  //     allowedRoles.includes(userRole.toLowerCase())
  //   );

  useEffect(() => {
    if (!isUserAuthorized) {
      console.log(
        "You are not admin. Please login through admin role to access this page"
      );
      navigate("/browse");
    }
  }, [isUserAuthorized]);

  return isUserAuthorized ? children : "";
};

export default IsAdminUser;
