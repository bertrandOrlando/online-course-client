import { ReactNode, createContext, useContext, useState } from "react";

// Definisikan tipe data context
export interface UserContextData {
  name: string;
  isLoggedIn: boolean;
  login: (name: string) => void;
  logout: () => void;
}

// Buat context
export const UserContext = createContext<UserContextData>({
  name: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (name: string) => {
    setName(name.trim().split(" ")[0]);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setName("");
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider
      value={{
        name,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook untuk menggunakan context
export function useUserContext() {
  return useContext(UserContext);
}
