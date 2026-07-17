// src/services/authService.js
import axios from "axios";

const AUTH_URL = "https://tevoj98108.pythonanywhere.com/auth";

export const authService = {
  async login(email, password) {
    const res = await axios.post(`${AUTH_URL}/login/`, { email, password });
    // response: { access, refresh }
    localStorage.setItem("access_token", res.data.access);
    localStorage.setItem("refresh_token", res.data.refresh);
    return res.data;
  },

  async register(username, email, password) {
    // ESLATMA: bu endpoint hali tasdiqlanmagan, screenshot kelsa moslashtiramiz
    const res = await axios.post(`${AUTH_URL}/register/`, {
      username,
      email,
      password,
    });
    return res.data;
  },

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  },

  isAuthenticated() {
    return !!localStorage.getItem("access_token");
  },
};
