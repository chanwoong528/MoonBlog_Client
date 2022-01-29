import { createContext, useReducer } from "react";
export const AuthContext = createContext();
const initialUserState = {
  isLoggedIn: false,
  isAdmin: false,
  accToken: "",
  refToken: "",
  user: {},
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return {
        isLoggedIn: action.payload.isLoggedIn,
        isAdmin: action.payload.isAdmin,
        user: action.payload.user,
      };
    case "LOGGED_OUT_USER":
      return {
        isLoggedIn: false,
        isAdmin: false,
      };
    default:
      return state;
  }
};
export const AuthProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(AuthReducer, initialUserState);

  const { isLoggedIn, isAdmin, user } = userState;
  console.log("provider: ", userState);
  return (
    <AuthContext.Provider value={{ userDispatch, isLoggedIn, isAdmin, user }}>
      {children}
    </AuthContext.Provider>
  );
};
