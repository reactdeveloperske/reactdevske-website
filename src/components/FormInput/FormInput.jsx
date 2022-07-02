import React from "react";

export const Input = (props) => {
  return (
    <div>
      <fieldset className="flex flex-col mt-[19px]">
        <label className="text-text-black text-bdy-sm" for={props.name}>
          {props.label}
        </label>
        <input
          type={props.type}
          className="form-input border-transparent focus:border-transparent focus:border-[1px] focus:border-green focus:ring-0 rounded-lg text-text-black py-[12px] pl-[16px] mt-[8px]"
          placeholder={props.placeholder}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </fieldset>
    </div>
  );
};

export const TextArea = (props) => {
  return (
    <div>
      <fieldset className="flex flex-col mt-[19px]">
        <label className="text-text-black text-bdy-sm" for={props.name}>
          {props.label}
        </label>
        <textarea
          placeholder={props.placeholder}
          className="form-input border-transparent focus:border-transparent focus:border-[1px] focus:border-green focus:ring-0 rounded-lg text-text-black text-bd-lg resize-none h-[178px] py-[22px] pl-[16px] mt-[8px]"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </fieldset>
    </div>
  );
};
