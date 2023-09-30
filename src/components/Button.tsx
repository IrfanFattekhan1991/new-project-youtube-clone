interface ButtonProps {
  name: string;
}

const Button = ({ name }: ButtonProps) => {
  return (
    <div>
      <button className=" my-6 mx-3 py-2 px-4 bg-slate-100 rounded-lg ">
        {name}
      </button>
    </div>
  );
};

export default Button;
