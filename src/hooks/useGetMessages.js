import axios from "axios";
import { useState, useEffect } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:5000/api/messages/${selectedConversation._id}`,
          { withCredentials: true }
        );
        const data = res.data;
        console.log(data);

        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation) getMessages();
  }, [selectedConversation._id]);

  return { loading };
};

export default useGetMessages;
