import FilterBrand from "./FilterBrand";
import FilterSize from "./FilterSize";
import PriceSlider from "./PriceSlider";
import SearchBar from "./SearchBar";
import Sorts from "./Sorts";

export default function SideBar() {
    return (
        <div className="h-max w-full text-left max-w-xs min-w-[250px] px-1 py-2">
            {/* <div>
                <SearchBar/>
            </div> */}
            {/* <div className="overline bg-gray-300 mt-4 mb-3 h-[1px] w-5/6 mr-auto ml-auto"></div> */}
            <div className=" px-1 border-b-[1px] pb-3">
                <p className="font-sans text-xs mb-3 font-bold">FILTER BY CATEGORY</p>
                
                <div className="flex cursor-pointer my-1">
                    <p className="text-[15px] font-serif">Shirts</p>
                    <div className="ml-auto bg-slate-100 rounded-full text-center font-sans text-[11px] font-medium h-6 w-6 p-1">5</div>
                </div>
                <div className="flex cursor-pointer my-1">
                    <p className="text-[15px] font-serif">Dresses</p>
                    <div className="ml-auto bg-slate-100 rounded-full text-center font-sans text-[11px] font-medium h-6 w-6 p-1">2</div>
                </div>
                <div className="flex cursor-pointer my-1">
                    <p className="text-[15px] font-serif">Shoes</p>
                    <div className="ml-auto bg-slate-100 rounded-full text-center font-sans text-[11px] font-medium h-6 w-6 p-1">4</div>
                </div>
                {/* <div className="flex cursor-pointer my-1">
                    <p className="text-[15px] font-serif">Jewelry</p>
                    <div className="ml-auto bg-slate-100 rounded-full text-center font-sans text-[11px] font-medium h-6 w-6 p-1">4</div>
                </div> */}
                <div className="flex cursor-pointer my-1">
                    <p className="text-[15px] font-serif">Pants</p>
                    <div className="ml-auto bg-slate-100 rounded-full text-center font-sans text-[11px] font-medium h-6 w-6 p-1">3</div>
                </div>
                <div className="flex cursor-pointer my-1">
                    <p className="text-[15px] font-serif">Accessories</p>
                    <div className="ml-auto bg-slate-100 rounded-full text-center font-sans text-[11px] font-medium h-6 w-6 p-1">4</div>
                </div>
            </div>
            {/* <div className="overline bg-gray-300 mt-4 mb-2 h-[1px] w-full mr-auto ml-auto"></div> */}
            
            <div className="border-b-[1px] pb-4">
            <p className="font-sans text-xs mb-3 font-bold mt-5">FILTER BY PRICE</p>
            <PriceSlider
                min={0} max={501}
                />
            </div>
            
            {/* <div className="overline bg-gray-300 mt-4 mb-2 h-[1px] w-5/6 mr-auto ml-auto"></div> */}
            {/* <p className="font-sans text-xs mb-3 font-bold">SORT BY</p>
            <Sorts/>
            
            <div className="overline bg-gray-300 mt-4 mb-2 h-[1px] w-5/6 mr-auto ml-auto"></div> */}
            <div className="border-b-[1px] pb-6">
                <p className="font-sans text-xs mb-5 mt-5 font-bold">FILTER BY SIZE</p>
                <FilterSize/>
            </div>
            
            {/* <div className="overline bg-gray-300 mt-4 mb-2 h-[1px] w-5/6 mr-auto ml-auto"></div> */}
            <p className="font-sans text-xs mb-3 mt-5 font-bold">BRAND</p>
            <FilterBrand/>

        </div>
    );
}