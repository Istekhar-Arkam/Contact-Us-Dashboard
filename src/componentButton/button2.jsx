import React from "react";
import { MdOutlineMessage } from "react-icons/md";
const Button2 = () => {
  return (
    <button className="relative z-10 flex items-center justify-center gap-2 py-2 mb-10 ml-4 overflow-hidden font-semibold bg-white border-2 border-black rounded-md isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 hover:text-white min-w-72 sm:min-w-80 sm:ml-20">
      {<MdOutlineMessage className="text-xl" />}VIA EMAIL FORM
    </button>
  );
};

export default Button2;
