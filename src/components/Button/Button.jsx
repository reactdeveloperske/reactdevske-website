import React from "react";

export default function Button (props) {
  return (
    <div>
      <button
        type={props.variant}
        className="self-center rounded-lg bg-red text-white py-[18px] px-[59px] mt-[36px] font-bold"
      >{props.title}</button>
    </div>
  );
};
