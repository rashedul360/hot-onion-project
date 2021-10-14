import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initialLizetionAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default initialLizetionAuthentication;
