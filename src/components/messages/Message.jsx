import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const fromMe = message.senderId == authUser.id;
  const bubbleChatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-slate-800" : "bg-blue-500";
  const formatedTime = extractTime(message.createdAt);

  return (
    <div className={`chat ${bubbleChatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            alt="icon"
          />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} max-w-[370px] rounded-xl`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center pt-2">
        {formatedTime}
      </div>
    </div>
  );
};

export default Message;
