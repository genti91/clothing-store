'use client';
import { useState } from "react";
import SideBar from "./SideBar";

export default function Drawer() {
    const [hidden, setHidden]: any = useState("hidden")
    return(
        <div>   
            <div className="text-center">
            <button onClick={() => setHidden("")} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
            Filters
            </button>
            </div>

            <div id="drawer-example" className={`fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 ${hidden}`} tabIndex={-1} aria-labelledby="drawer-label">
            <button onClick={() => setHidden("hidden")} type="button" data-drawer-dismiss="drawer-example" aria-controls="drawer-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center" >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close menu</span>
            </button>
            <div className="mt-6">
                <SideBar/>
            </div>
            </div>
        </div>
    );
}