import { AiFillHome } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SHORTS_ICON } from "../Utils/constants";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../Utils/store";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store: RootState) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-72 shadow-lg px-6 py-6">
      <ul className="px-4">
        <Link to="/">
          <li className="flex pt-4 items-center">
            <AiFillHome className="w-6" />
            <h4 className="pl-6">Home</h4>
          </li>
        </Link>
        <li className="flex pt-4 items-center">
          <img className="w-6" alt="shorts-icon" src={SHORTS_ICON} />
          <h4 className="pl-6">Shorts</h4>
        </li>
        <li className="flex pt-5 pb-4 items-center">
          <MdOutlineSubscriptions className="w-6" />
          <h4 className="pl-6">Subscriptions</h4>
        </li>
      </ul>
      <hr />
      <ul className="px-4">
        <li className="pt-4">Library</li>
        <li className="pt-4">History</li>
        <li className="pt-4">Watch Later</li>
        <li className="pt-4 pb-4">Liked Videos</li>
      </ul>
      <hr />
      <ul className="px-4">
        <li className="pt-4">Library</li>
        <li className="pt-4">History</li>
        <li className="pt-4">Watch Later</li>
        <li className="pt-4 pb-4">Liked Videos</li>
      </ul>
      <hr />
      <ul className="px-4">
        <li className="pt-4">Library</li>
        <li className="pt-4">History</li>
        <li className="pt-4">Watch Later</li>
        <li className="pt-4 pb-4">Liked Videos</li>
      </ul>
      <hr />
      <ul className="px-4">
        <li className="pt-4">Library</li>
        <li className="pt-4">History</li>
        <li className="pt-4">Watch Later</li>
        <li className="pt-4 pb-4">Liked Videos</li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
