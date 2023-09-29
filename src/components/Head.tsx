import {
  MENU_ICON,
  USER_ICON,
  YOUTUBE_ICON,
  YOUTUBE_SEARCH_API,
} from "../Utils/constants";
import { useDispatch } from "react-redux/es/exports";
import { toggleMenu } from "../Utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Utils/store";
import { chachedSearch } from "../Utils/searchSlice";

const Head = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [suggessions, setSuggessions] = useState<string[]>([]);
  const [showSuggesstions, setShowSuggessions] = useState(false);

  const cachedSearch: any = useSelector((store: RootState) => store.search);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachedSearch[searchText]) {
        setSuggessions(cachedSearch[searchText]);
      } else getSearchSuggessions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchSuggessions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    console.log(json[1]);
    setSuggessions(json[1]);

    dispatch(
      chachedSearch({
        [searchText]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-6 items-center shadow-lg sticky top-0 ">
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
          className="px-6 border border-gray-400 w-3/4 p-3 rounded-l-full"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setShowSuggessions(true)}
          onBlur={() => setShowSuggessions(false)}
        />
        {showSuggesstions && (
          <div className="px-4 py-4 fixed bg-white w-[45rem] rounded-lg">
            <ul>
              {suggessions.map((s) => (
                <li key={s} className="py-2 px-2 shadow-sm hover:bg-slate-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className="border border-gray-400 py-3 px-6 rounded-r-full bg-slate-100">
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
