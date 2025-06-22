import { useState } from "react";
import axios from "axios";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const { setMessages, selectedConversation, messages } = useConversation();
  const [loading, setLoading] = useState(false);

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:5000/api/messages/send/${selectedConversation._id}`,
        {
          message,
        },
        { withCredentials: true }
      );
      setMessages([...messages, res.data]);
      console.log(res.data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
};

export default useSendMessage;
