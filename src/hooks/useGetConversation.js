import axios from "axios";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/api/users", {
          withCredentials: true,
        });
        const data = await res.data;
        setConversations(data);
        console.log(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);

  return { loading, conversations };
};

export default useGetConversation;
