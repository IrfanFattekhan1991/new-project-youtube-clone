import React from "react";
import { USER_ICON } from "../Utils/constants";

const ChatMessage = ({ name, message }: any) => {
  return (
    <div className="flex px-4 py-2 items-center shadow-sm bg-slate-50 my-2">
      <div>
        <img className="w-8 h-8" alt="user" src={USER_ICON} />
      </div>
      <p className="font-bold px-2">{name} :</p>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
