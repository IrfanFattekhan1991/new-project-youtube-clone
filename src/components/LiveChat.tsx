import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { addMessages } from "../Utils/chatSlice";
import { useSelector } from "react-redux";
import { RootState } from "../Utils/store";
import { useState } from "react";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store: RootState) => store.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling");

      dispatch(
        addMessages({
          name: "Irfan Fattekhan",
          message: "Hi there, I am here",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <form
      className="w-[70%] h-[700px] border border-black mx-8 rounded-lg overflow-y-scroll flex flex-col-reverse"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          addMessages({
            name: "Ziya",
            message: liveMessage,
          })
        );
        setLiveMessage("");
      }}
    >
      <div className="flex">
        <input
          className=" mx-2 my-2 px-2 py-2 border border-gray-500 w-96 rounded-lg"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className=" bg-slate-400 text-white font-bold mx-2 my-2 px-2 py-2 border border-gray-500 w-40 rounded-lg">
          Send
        </button>
      </div>
      <div>
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
    </form>
  );
};

export default LiveChat;
