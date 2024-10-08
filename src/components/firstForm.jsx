import React from "react";
import Button1 from "../componentButton/button1";
import { MdOutlineMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";

const FirstForm = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="mt-7 sm:px-10 sm:gap-5 flex flex-col sm:flex-row mx-3">
          <Button1
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage className="text-xl ma" />}
          />
          <Button1 text="VIA CALL" icon={<MdCall className="text-xl" />} />
        </div>
      </div>
    </>
  );
};

export default FirstForm;
