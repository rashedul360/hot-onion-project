import { useContext } from "react";
import { AuthContext } from "../Component/context/authPrvider";

const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
