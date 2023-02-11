import Card from "../../components/Card";

export default function Detail(){
    return(
        <div>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 py mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-24 lg:h-24 w-20 h-20 object-cover mr-3 mb-3" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"/>
                    <img alt="ecommerce" className="lg:w-1/3 w-full object-cover object-center" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest mb-1">BANANA REPUBLIC</h2>
                        <h1 className="text-black text-4xl title-font mb-1 font-bold">Black Denim Jacket</h1>
                        <h2 className="text-black text-2xl font-medium mb-3">$17.99</h2>
                        <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="mt-6 items-center pt-5 border-t-2 border-gray-200 mb-5">
                        <div className="flex mb-3">
                            <span className="mr-3">Color</span>
                            <button className="border-2 border-gray-300 w-6 h-6 focus:outline-none"></button>
                            <button className="border-2 border-gray-300 ml-1 bg-gray-700 w-6 h-6 focus:outline-none"></button>
                            <button className="border-2 border-gray-300 ml-1 bg-red-500 w-6 h-6 focus:outline-none"></button>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-3">Size</span>
                            <div className="mt-1">
                                <button className="border mr-2 w-8 h-8 hover:border-black transition-all">XS</button>
                                <button className="border mr-2 w-8 h-8 hover:border-black transition-all">S</button>
                                <button className="border mr-2 w-8 h-8 hover:border-black transition-all">M</button>
                                <button className="border mr-2 w-8 h-8 hover:border-black transition-all">L</button>
                                <button className="border mr-2 w-8 h-8 hover:border-black transition-all">XL</button>
                            </div>
                        </div>
                        </div>
                        <div className="flex justify-center">
                        <button className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 font-sans text-sm font-medium">ADD TO CART</button>
                        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <div className="text-center">
                <h1 className="text-black text-4xl title-font mb-1 font-medium">Related Products</h1>
                <div className="flex flex-wrap gap-9 py-7 max-w-4xl w-auto place-content-center ml-auto mr-auto">
                    {relatedProducts?.map((item: any, index: number) => {
                        return <Card key={index} item={item}/>
                    })}
                </div>
            </div>
        </div>
    );
}


const relatedProducts = [
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