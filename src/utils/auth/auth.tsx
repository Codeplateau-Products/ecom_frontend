import { useState, createContext, useContext } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user?: User | null | string;
  login?: () => void;
  logout?: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => null,
  logout: () => null,
});

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null | string>(null);

  const login = () => {

    if (user) return;
    
    localStorage.setItem(
      "user",
      JSON.stringify({ name: "John", email: "j@j.com" })
    );
    const savedUser = localStorage.getItem("user");

    const fetchedUser = JSON.parse(savedUser || "null");
    setUser(JSON.parse(fetchedUser));

    return;
  };

  const logout = () => {

    if (user) localStorage.removeItem("user");
    return;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <>{children}</>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);