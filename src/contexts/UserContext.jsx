import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);

  function logIn(user) {
    setUser(user);
    const token = user.token || "slfkjhasdljkhfadsjklhfajks";
    localStorage.setItem("token", token);
  }

  function logOut() {
    setUser(null);
    localStorage.removeItem("token");
  }

  const isLoggedIn = localStorage.getItem("token") && user;

  return (
    <UserContext.Provider value={{ user, logIn, logOut, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}
