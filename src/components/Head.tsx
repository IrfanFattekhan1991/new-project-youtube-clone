import { MENU_ICON, USER_ICON, YOUTUBE_ICON } from "../Utils/constants";
import { useDispatch } from "react-redux/es/exports";
import { toggleMenu } from "../Utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-flow-col p-6 items-center shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-12 cursor-pointer"
          alt="menu"
          src={MENU_ICON}
          onClick={() => dispatch(toggleMenu())}
        />
        <img className="h-12 px-8" alt="youtube-icon" src={YOUTUBE_ICON} />
      </div>
      <div className="col-span-10 px-96">
        <input
          className="border border-gray-400 w-3/4 p-3 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 py-3 px-6 rounded-r-full bg-slate-200">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-12" alt="user-icon" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
