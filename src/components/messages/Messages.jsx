import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import useConversation from "../../zustand/useConversation";

const Messages = () => {
  const { loading } = useGetMessages();
  const { messages } = useConversation();
  const lastMessageRef = useRef();

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto flex flex-col gap-3">
      {messages.map((message, index) => {
        const isLast = index === messages.length - 1;
        return (
          <div key={message._id} ref={isLast ? lastMessageRef : null}>
            <Message message={message} />
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
