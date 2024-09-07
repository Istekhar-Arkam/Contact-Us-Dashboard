import React from "react";
import Button1 from "./componentButton/button1";
import { MdOutlineMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";


const FirstForm = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="border-2 border-blue-700 my-5 mx-2 sm:flex sm:px-10 sm:gap-5 flex flex-col sm:flex-row-2 w-3/5">
          <Button1 text="VIA SUPPORT CHAT" icon={<MdOutlineMessage className="text-xl"/>} />
          <Button1 text="VIA CALL" icon={<MdCall className="text-xl"/>} />
          
        </div>
        
        <div className="border-2 border-yellow-500">image

        </div>
      </div>
    </>
  );
};

export default FirstForm;
