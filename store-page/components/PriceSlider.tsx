'use client';

// import { useState } from "react";

// export default function PriceSlider() {

//     const [price, setPrice]: any = useState(250);
    
//     return (
//         <div>
//             <input id="minmax-range" type="range" min="10" max="500" step="10" value={price} onChange={(e) => setPrice(e.target.value)} className="w-4/6 h-2 rounded-lg cursor-pointer"/>
//             <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">0 - {price}</label>
//         </div>
//     );
// }


import React, { useEffect, useLayoutEffect, useState } from "react";

var thumbsize = 10;

const PriceSlider = ({ min, max }:any) => {
    const [avg, setAvg] = useState((min + max) / 2);
    const [minVal, setMinVal] = useState(150);
    const [maxVal, setMaxVal] = useState(350);
  
    const width = 200;
    const minWidth =
      thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);
    const minPercent = ((minVal - min) / (avg - min)) * 100;
    const maxPercent = ((maxVal - avg) / (max - avg)) * 100;
    const styles = {
      min: {
        width: minWidth,
        left: 0,
        "--minRangePercent": `${minPercent}%`,
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px'
      },
      max: {
        width: thumbsize + ((max - avg) / (max - min)) * (width - 2 * thumbsize),
        left: minWidth,
        "--maxRangePercent": `${maxPercent}%`,
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px'
      }
    };
  
    useLayoutEffect(() => {
      setAvg((maxVal + minVal) / 2);
    }, [minVal, maxVal]);

  
    console.log(maxVal, avg, min, max, maxPercent);
  
    return (
        <div className=" items-center mt-5">
            <div
                className="min-max-slider ml-auto mr-auto"
                data-legendnum="2"
                data-rangemin={min}
                data-rangemax={max}
                data-thumbsize={thumbsize}
                data-rangewidth={width}
            >
                <label htmlFor="min">Minimum price</label>
                <input
                id="min"
                className="min"
                style={styles.min}
                name="min"
                type="range"
                step="1"
                min={min}
                max={avg}
                value={minVal}
                onChange={({ target }) => setMinVal(Number(target.value))}
                />
                <label htmlFor="max">Maximum price</label>
                <input
                id="max"
                className="max"
                style={styles.max}
                name="max"
                type="range"
                step="1"
                min={avg}
                max={max}
                value={maxVal}
                onChange={({ target }) => setMaxVal(Number(target.value))}
                />
            </div>
            <div className="flex text-left pt-5">
                <div className="text-sm font-sans font-semibold">Price: ${Math.floor(minVal)} - ${Math.floor(maxVal)}</div>
                <button className="ml-auto text-xs font-sans font-semibold">FILTER</button>
            </div>
        </div>
    );
};

export default PriceSlider;

// import { useState, useEffect, useRef } from "react";

// const PriceSlider = ({ initialMin, initialMax, min, max, step, priceCap }:any) => {
//   const progressRef = useRef(null);
//   const [minValue, setMinValue] = useState(initialMin);
//   const [maxValue, setMaxValue] = useState(initialMax);

//   const handleMin = (e:any) => {
//     if (maxValue - minValue >= priceCap && maxValue <= max) {
//       if (parseInt(e.target.value) > parseInt(maxValue)) {
//       } else {
//         setMinValue(parseInt(e.target.value));
//       }
//     } else {
//       if (parseInt(e.target.value) < minValue) {
//         setMinValue(parseInt(e.target.value));
//       }
//     }
//   };

//   const handleMax = (e:any) => {
//     if (maxValue - minValue >= priceCap && maxValue <= max) {
//       if (parseInt(e.target.value) < parseInt(minValue)) {
//       } else {
//         setMaxValue(parseInt(e.target.value));
//       }
//     } else {
//       if (parseInt(e.target.value) > maxValue) {
//         setMaxValue(parseInt(e.target.value));
//       }
//     }
//   };

//   useEffect(() => {
//     progressRef.current.style.left = (minValue / max) * step + "%";
//     progressRef.current.style.right = step - (maxValue / max) * step + "%";
//   }, [minValue, maxValue, max, step]);

//   return (
//     <div className=" grid place-items-center border">
//       <div className="flex flex-col w-96 bg-white shadow-xl rounded-lg px-6 py-4">

//         <div className="flex justify-between items-center my-6 ">
//           <div className="rounded-md">
//             <span className="p-2 font-semibold"> Min</span>
//             <input
//               onChange={(e) => setMinValue(e.target.value)}
//               type="number"
//               value={minValue}
//               className="w-24 rounded-md border border-gray-400"
//             />
//           </div>
//           <div className="ml-2 font-semibold text-lg"> - </div>
//           <div className=" ">
//             <span className="p-2 font-semibold"> Max</span>
//             <input
//               onChange={(e) => setMaxValue(e.target.value)}
//               type="number"
//               value={maxValue}
//               className="w-24 rounded-md border border-gray-400"
//             />
//           </div>
//         </div>

//         <div className="mb-4">
//           <div className="slider relative h-1 rounded-md bg-gray-300">
//             <div
//               className="progress absolute h-1 bg-black rounded "
//               ref={progressRef}
//             ></div>
//           </div>

//           <div className="range-input relative  ">
//             <input
//               onChange={handleMin}
//               type="range"
//               min={min}
//               step={step}
//               max={max}
//               value={minValue}
//               className="range-min absolute w-full  -top-1  h-1   bg-transparent  appearance-none pointer-events-none"
//             />

//             <input
//               onChange={handleMax}
//               type="range"
//               min={min}
//               step={step}
//               max={max}
//               value={maxValue}
//               className="range-max absolute w-full  -top-1 h-1  bg-transparent appearance-none  pointer-events-none"
//             />
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default PriceSlider;