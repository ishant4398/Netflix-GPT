import { useSelector } from "react-redux";

const useGetCurrentUser = () => {
  const currentUser = useSelector((store) => store.user);
  return currentUser;
};

export default useGetCurrentUser;
