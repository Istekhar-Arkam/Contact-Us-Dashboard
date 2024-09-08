import React from "react";
import { MdOutlineMessage } from "react-icons/md";
const Button2 = () => {
  return (
    <button class="flex items-center justify-center gap-2 relative py-2 rounded-md bg-white isolation-auto z-10 border-2 border-black before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-black before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:text-white mb-17 min-w-52 sm:min-w-80 font-semibold sm:ml-20">
      {<MdOutlineMessage className="text-xl" />}VIA EMAIL FORM
    </button>
  );
};

export default Button2;
