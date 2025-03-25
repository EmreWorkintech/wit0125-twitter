import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);

  function logIn(user) {
    setUser(user);
  }

  return (
    <UserContext.Provider value={{ user, logIn }}>
      {children}
    </UserContext.Provider>
  );
}
