import { createContext } from "react";
import Auth from "../model/Auth";

const SessionContext = createContext<Auth>({
  username: '',
  password: '',
  email: '',
  fullName: '',
  admin: false,
  employee: false,
  isLoggedIn: false
});

export default SessionContext
