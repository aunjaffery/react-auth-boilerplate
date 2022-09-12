import { useEffect } from "react";
import useBoundStore from "../../store/Store";
import jwtDecode from "jwt-decode";
import { setSession, getAccessToken } from "../../services/jwt.service";

const Auth = ({ children }) => {
  const { loginWithToken, tokenLoading, logoutService } = useBoundStore(
    (state) => state
  );

  const handleAuthentication = async () => {
    let access_token = getAccessToken();
    if (!access_token) {
      logoutService();
      return;
    }
    if (!isAuthTokenValid(access_token)) return;
    setSession(access_token);
    loginWithToken();
  };

  const isAuthTokenValid = (access_token) => {
    const decoded = jwtDecode(access_token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn("access token expired");
      logoutService();
      return false;
    } else {
      return true;
    }
  };
  useEffect(() => {
    handleAuthentication();
  }, []);

  return <div>{tokenLoading ? "Cool Loading here..." : children}</div>;
};

export default Auth;
