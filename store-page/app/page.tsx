import Link from "next/link";
import Card from "../components/Card";

export default function HomePage() {
    return (
        <div className="text-center h-max">
            <div className="bg-slate-400 h-60 w-full relative">
                    {/* <h1 className="align-text-bottom">Ecommerce</h1> */}
                    <img className="object-cover h-full w-full" src="https://f4e2q6s2.stackpathcdn.com/wp-content/uploads/2018/04/compras-de-roupas.jpeg.webp"/>
                    <div className="absolute w-full h-full bottom-0 bg-black opacity-25"></div>
                    <h1 className="absolute text-5xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    Ecommerce</h1>
            </div>
            <div className="flex flex-wrap max-w-5xl mr-auto ml-auto pt-10 pb-10 mt-3 justify-center">

                <div className="relative border ml-3 mr-3 mb-6 h-52 w-64 bg-black bg-opacity-5 overflow-hidden rounded-md">
                    <Link href="/store">
                        <div className="absolute w-full h-full bottom-0 bg-black opacity-25 hover:bg-slate-800 transition-all"></div>
                        <div className="absolute w-full py-2.5 ml-5 bottom-0 inset-x-0 text-white text-xl font-bold text-left leading-4">Shirts</div>
                        <img className="object-cover h-52 w-64 hover:h-56 hover:w-72 transition-all" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/new/img(2).jpg"/>
                    </Link>
                </div>
                
                <div className="relative border ml-3 mr-3 mb-6 h-52 w-64 bg-black bg-opacity-5 overflow-hidden rounded-md">
                    <Link href="/store">
                        <div className="absolute w-full h-full bottom-0 bg-black opacity-25 hover:bg-slate-800 transition-all"></div>
                        <div className="absolute w-full py-2.5 ml-5 bottom-0 inset-x-0 text-white text-xl font-bold text-left leading-4">Jeans</div>
                        <img className="object-cover h-52 w-64 hover:h-56 hover:w-72 transition-all" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/new/img(3).jpg"/>
                    </Link>
                </div>

                <div className="relative border ml-3 mr-3 mb-6 h-52 w-64 bg-black bg-opacity-5 overflow-hidden rounded-md">
                    <Link href="/store">
                        <div className="absolute w-full h-full bottom-0 bg-black opacity-25 hover:bg-slate-800 transition-all"></div>
                        <div className="absolute w-full py-2.5 ml-5 bottom-0 inset-x-0 text-white text-xl font-bold text-left leading-4">Shoes</div>
                        <img className="object-cover h-52 w-64 hover:h-56 hover:w-72 transition-all" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/new/img(4).jpg"/>
                    </Link>
                </div>

                <div className="relative border ml-3 mr-3 mb-6 h-52 w-64 bg-black bg-opacity-5 overflow-hidden rounded-md">
                    <Link href="/store">
                        <div className="absolute w-full h-full bottom-0 bg-black opacity-25 hover:bg-slate-800 transition-all"></div>
                        <div className="absolute w-full py-2.5 ml-5 bottom-0 inset-x-0 text-white text-xl font-bold text-left leading-4">Dresses</div>
                        <img className="object-cover h-52 w-64 hover:h-56 hover:w-72 transition-all" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/new/img(1).jpg"/>
                    </Link>
                </div>

                <div className="relative border ml-3 mr-3 mb-6 h-52 w-64 bg-black bg-opacity-5 overflow-hidden rounded-md">
                    <Link href="/store">
                        <div className="absolute w-full h-full bottom-0 bg-black opacity-25 hover:bg-slate-800 transition-all"></div>
                        <div className="absolute w-full py-2.5 ml-5 bottom-0 inset-x-0 text-white text-xl font-bold text-left leading-4">Accessories</div>
                        <img className="object-cover h-52 w-64 hover:h-56 hover:w-72 transition-all" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/new/img(5).jpg"/>
                    </Link>
                </div>
                
                <div className="relative border ml-3 mr-3 h-52 w-64 bg-black bg-opacity-5 overflow-hidden rounded-md">
                    <Link href="/store">
                        <div className="absolute w-full h-full bottom-0 bg-black opacity-25 hover:bg-slate-800 transition-all"></div>
                        <div className="absolute w-full py-2.5 ml-5 bottom-0 inset-x-0 text-white text-xl font-bold text-left leading-4">Jewelry</div>
                        <img className="object-cover h-52 w-64 hover:h-56 hover:w-72 transition-all" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/new/img(6).jpg"/>
                    </Link>
                </div>

            </div>
            <div>
                <h1 className="text-black text-4xl title-font mb-1 font-medium">Bestsellers</h1>
                <div className="flex flex-wrap gap-9 py-9 max-w-4xl w-auto place-content-center ml-auto mr-auto">
                    {bestsellers?.map((item: any, index: number) => {
                        return <Card key={index} item={item} />
                    })}
                </div>
            </div>
            <div>
                <h1 className="text-black text-4xl title-font mb-1 font-medium">New Products</h1>
                <div className="flex flex-wrap gap-9 py-9 max-w-4xl w-auto place-content-center ml-auto mr-auto">
                    {newProducts?.map((item: any, index: number) => {
                        return <Card key={index} item={item} />
                    })}
                </div>
            </div>


        </div>
    );
}


const bestsellers = [
    {
        img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        name: "Red Hoodie",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 35.99,
    },
    {
        img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        name: "Grey Sweater",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 21.99,
    },
    {
        img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        name: "Blue Denim Shirt",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 17.99,
    },
]

const newProducts = [
    {
        img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
        name: "Black Denim Jacket",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 99.99,
    },
    {
        img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        name: "Red Hoodie",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 35.99,
    },
    {
        img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        name: "Grey Sweater",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 21.99,
    },
]