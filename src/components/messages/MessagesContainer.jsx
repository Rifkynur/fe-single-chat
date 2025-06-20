import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoSelectedConversation from "./NoSelectedConversation";
import useConversation from "../../zustand/useConversation";

const MessagesContainer = () => {
  const { selectedConversation } = useConversation();
  const chatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoSelectedConversation />
      ) : (
        <>
          {/* header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">John doe</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessagesContainer;
