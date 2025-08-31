import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";


function Adminlayout() {

  return (
    <>
      {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <div className="w-[90vw] h-[100vh] bg-white mx-auto rounded-2xl flex justify-around dark:bg-slate-900">
        <div className="w-[13vw]">
            <Sidebar/>
        </div>
        <div className=" w-[85vw]"><Outlet/></div>
        {/* <div className="bg-blue-400 w-[20vw]">right</div> */}
      </div>
    </>
  );
}

export default Adminlayout;
