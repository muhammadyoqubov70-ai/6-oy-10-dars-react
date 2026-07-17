// src/context/AuthContext.jsx
import { createContext, useContext, useState } from "react";
import { authService } from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    authService.isAuthenticated(),
  );
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setError(null);
    
    // Maxsus admin tekshiruvi (Local Mocking)
    if (email === "admin@gmail.com" && password === "admin") {
      setIsAuthenticated(true);
      // Agar authService ichida localStorage-ga token yozish mantig'i bo'lsa, dars buzilmasligi uchun:
      localStorage.setItem("token", "fake-admin-token"); 
      return true;
    }

    try {
      await authService.login(email, password);
      setIsAuthenticated(true);
      return true;
    } catch (err) {
      setError("Email yoki parol noto'g'ri");
      return false;
    }
  };

  const register = async (username, email, password) => {
    setError(null);
    try {
      await authService.register(username, email, password);
      return true;
    } catch (err) {
      setError("Ro'yxatdan o'tishda xatolik yuz berdi");
      return false;
    }
  };

  const logout = () => {
    authService.logout();
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, error, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
