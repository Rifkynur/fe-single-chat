import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    const success = handleInputErrors(username, password);
    if (!success) return;
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );
      const data = await res.data;
      console.log(data);
      localStorage.setItem("chat-user", JSON.stringify(data));
      toast.success("Login Successfully");
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

const handleInputErrors = (username, password) => {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
};

export default useLogin;
