import { USER_ICON } from "../Utils/constants";

const Comment = ({ data }: any) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex p-2 my-2 bg-gray-100">
      <img className=" w-12 h-12" alt="user" src={USER_ICON} />

      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
