import Button from "./Button";
import { buttonList } from "../Utils/constants";

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonList.map((button, index) => {
        return <Button key={index} name={button} />;
      })}
    </div>
  );
};

export default ButtonList;
