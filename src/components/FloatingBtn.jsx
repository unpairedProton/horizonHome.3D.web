import React from "react";
// import wa from "../assets/images/wa.png";
// import call from "../assets/images/call.png";
import msg from "../assets/icons/msg.svg";
import wa from "../assets/icons/wa.svg";
import call from "../assets/icons/call.svg";
import { useState } from "react";

const FloatingBtn = () => {
const [iconVisible, setIconVisible] = useState(false);
const phoneNumber = import.meta.env.VITE_APP_PHONE;


  return (
    <div className="fixed bottom-6 right-6 w-14 h-14  z-[9999]">
      <div className="w-full h-full z-30 bg-gradient-to-br rounded-full from-[#00c6ff] to-[#0072ff] relative ">
        <div onClick={() => setIconVisible(!iconVisible)}
          className="absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full"
          style={{
            backgroundImage: `url(${msg})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        ></div>
        
      </div>
      <div onClick={() => window.location.href = `tel:${phoneNumber}`}
          className={`absolute z-20 top-1/2 left-1/2 -translate-x-1/2 ${iconVisible?"-translate-y-24":"-translate-y-1/2"} duration-300 w-[85%] h-[85%] rounded`}
          style={{
            backgroundImage: `url(${call})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        ></div>
        <div onClick={() => window.open(`https://wa.me/${phoneNumber}`, "_blank")}
          className={`absolute z-10 top-1/2 left-1/2 ${iconVisible?"-translate-x-24":"-translate-x-1/2"} duration-300 -translate-y-1/2 w-[80%] h-[80%] rounded`}
          style={{
            backgroundImage: `url(${wa})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        ></div>
    </div>
  );
};

export default FloatingBtn;
