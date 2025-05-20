import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserAuthStatus } from "../features/user/authSlice";
import { setUserProfile } from "../features/user/userSlice";

const useLoginUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const loginUser = (payload) => {
    if (!payload || !payload.token || !payload.user) return;

    try {
      // Store the token
      localStorage.setItem("jwttoken", payload.token);
      
      // Update Redux state
      dispatch(setUserProfile(payload.user));
      dispatch(setUserAuthStatus(true));
      
      // Add a small delay before navigation
      setTimeout(() => {
        // Check if username exists before navigating
        if (payload.user.username) {
          navigate(`/user/${payload.user.username}`);
        } else {
          console.error("Username not found in payload:", payload);
        }
      }, 100);
    } catch (error) {
      console.error("Error in loginUser hook:", error);
    }
  };

  return loginUser;
};

export default useLoginUser;