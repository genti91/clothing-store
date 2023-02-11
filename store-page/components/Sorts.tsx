'use client';

export default function Sorts() {

    return (
        <div className="mt-1">
            <div>
                <select className="font-medium" name="price" id="price">
                    <option value="" className="">Default Order</option>
                    <option value="a-z" className="">Newest </option>
                    <option value="z-a" className="">Oldest</option>
                    <option value="h-l" className="">Highest Price</option>
                    <option value="l-h" className="">Lowest Price</option>
                    <option value="a-z" className="">A-Z</option>
                    <option value="z-a" className="">Z-A</option>
                </select>
            </div>
        </div>

    );
}