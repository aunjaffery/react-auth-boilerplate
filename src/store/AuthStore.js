import Domain from "../services/Endpoint";
import axios from "axios";
import { setSession } from "../services/jwt.service";

const createAuthStore = (set) => ({
  user: null,
  authLoading: false,
  tokenLoading: true,
  setUser: (args) => set({ user: args }),
  logoutService: () => {
    setSession(null);
    set({ user: null, authLoading: false, tokenLoading: false });
  },
  loginService: async (email, password) => {
    set({ authLoading: true });
    try {
      const rsp = await axios.post(`${Domain}/api/user/login`, {
        email,
        password,
      });
      if (rsp.data.result?.user && rsp.data.result?.access_token) {
        setSession(rsp.data.result?.access_token);
        set({ user: rsp.data.result?.user, authLoading: false });
      } else {
        set({ authLoading: false, user: null });
      }
    } catch (error) {
      console.log(error);
      set({ authLoading: false });
    }
  },
  loginWithToken: async () => {
    try {
      const rsp = await axios(`${Domain}/api/user/validation`);
      if (rsp.data.result?.user && rsp.data.result?.access_token) {
        setSession(rsp.data.result?.access_token);
        set({ user: rsp.data.result?.user, tokenLoading: false });
      } else {
        set({ tokenLoading: false, user: null });
      }
    } catch (error) {
      console.log(error);
      logoutService();
    }
  },
});
export default createAuthStore;
