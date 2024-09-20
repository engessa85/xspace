import React from "react";
import { FaShuttleSpace } from "react-icons/fa6";

function SiteLogo({xvalue}) {
  return (
    <div className={`bg-black w-40 h-14 rounded flex items-center justify-center text-xl`}>
      <span className="text-black bg-myyellow2 p-2 rounded flex relative">{xvalue}<span className="bg-black w-1 h-1 rounded-full absolute top-6 right-0.5"></span></span>
      <span className="bg-myback1 text-black pr-2 py-1 pl-1 ml-1 flex items-center justify-center rounded">
        Space <FaShuttleSpace className="text-black ml-1" size={20} />
      </span>
    </div>
  );
}

export default SiteLogo;
