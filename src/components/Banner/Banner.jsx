import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="bg-white">
        <div
          className="p-4"
          style={{
            background:
              "repeating-linear-gradient(-55deg, #222, rgb(34, 34, 34) 10px, rgb(234, 179, 8) 10px, rgb(234, 179, 8) 20px)",
          }}
        />
        <div className="p-4 text-center text-gray-900 bg-yellow-500 font-bold">
          UNDER CONSTRUCTION
        </div>
      </div>
    </div>
  );
};
export default Banner;
