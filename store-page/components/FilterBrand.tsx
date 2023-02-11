"use client"

import { useState } from "react";

export default function FilterBrand() {

    const [hidden, setHidden] = useState('hidden')

    function handleClick(){
        if (!hidden) {
         setHidden('hidden')   
        }else{
            setHidden('')
        }
    }

    return(
        <div className="mt-1">
            {/* <select className="border w-4/6" name="price" id="price">
                <option value="">Brand</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select> */}
            <button onClick={handleClick} id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-black font-medium text-sm text-left inline-flex items-center border-b-[1px] border-black w-full " type="button">Filters: <svg className="w-4 h-4 ml-auto" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

            <div id="dropdown" className={`${hidden} z-10 w-full bg-white rounded divide-y divide-gray-100 shadow ml-auto mr-auto`}>
                <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownDefault">
                <li>
                    <a href="#" className="block py-2 px-4 hover:ml-2 transition-all font-medium">Option 1</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-4 hover:ml-2 transition-all font-medium">Option 2</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-4 hover:ml-2 transition-all font-medium">Option 3</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-4 hover:ml-2 transition-all font-medium">Option 4</a>
                </li>
                </ul>
            </div>
            
        </div>
    );
}