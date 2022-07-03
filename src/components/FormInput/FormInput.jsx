import React from "react";

export const Input = ({name, label, type, placeholder, value, onChange}) => {
  return (
    <div>
      <fieldset className="flex flex-col mt-[19px]">
        <label className="text-text-black text-bdy-sm" htmlFor={name}>
          {label}
        </label>
        <input
          type={type}
          className="form-input border-transparent focus:border-transparent focus:border-[1px] focus:border-green focus:ring-0 rounded-lg text-text-black py-[12px] pl-[16px] mt-[8px]"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </fieldset>
    </div>
  );
};

export const TextArea = ({name, label, type, placeholder, value, onChange}) => {
  return (
    <div>
      <fieldset className="flex flex-col mt-[19px]">
        <label className="text-text-black text-bdy-sm" htmlFor={name}>
          {label}
        </label>
        <textarea
          placeholder={placeholder}
          className="form-input border-transparent focus:border-transparent focus:border-[1px] focus:border-green focus:ring-0 rounded-lg text-text-black text-bd-lg resize-none h-[178px] py-[22px] pl-[16px] mt-[8px]"
          name={name}
          value={value}
          onChange={onChange}
        />
      </fieldset>
    </div>
  );
};
