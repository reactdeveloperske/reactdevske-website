import React from "react";

const Button = ({variant, title}) => {
  return (
    <div>
      <button
        type={variant}
        className="self-center rounded-lg bg-red text-white py-[18px] px-[59px] mt-[36px] font-bold"
      >{title}</button>
    </div>
  );
};

export default Button;
