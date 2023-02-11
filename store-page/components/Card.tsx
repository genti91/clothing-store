import Image from "next/image";
import Link from "next/link";

export default function Card({item}: any) {
    const { img, name, price } = item
    return (
        <Link href='/detail'>
            <div className="h-72 w-52">
                <div className="bg-slate-400 w-full h-5/6 shadow-md">
                    <img src={img} className="object-cover w-full h-full"/>
                </div>
                <div className="mt-2 text-left">
                    <h3 className="font-medium">{name}</h3>
                    <h4 className="font-normal text-sm">${price}</h4>
                </div>
            </div>
        </Link>
    );
}