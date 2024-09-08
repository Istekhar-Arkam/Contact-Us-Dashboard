import React from "react";
const Button1 = (props) => {
  return (
    <button class="flex items-center justify-center gap-2 sm:gap-4 relative py-2 rounded-md bg-white isolation-auto z-10 border-2 border-black before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-black before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:text-white mb-4 min-w-52 font-semibold">
      {props.icon}{props.text}
      
    </button>
  );
};

export default Button1;
