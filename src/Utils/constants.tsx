const apiKey = process.env.React_App_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const MENU_ICON =
  "https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png";

export const YOUTUBE_ICON =
  "https://1000logos.net/wp-content/uploads/2021/04/YouTube-logo.png";

export const USER_ICON =
  "https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png";

export const SHORTS_ICON =
  "https://www.edigitalagency.com.au/wp-content/uploads/Youtube-shorts-icon-png.png";

export const buttonList = [
  "All",
  "Cricket",
  "Hockey",
  "Football",
  "Songs",
  "Movies",
  "Dance",
  "Sports",
  "Live",
  "Music",
  "New",
  "Old Songs",
  "English",
  "Motivational",
  "Learning",
  "Study",
];

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  apiKey;
