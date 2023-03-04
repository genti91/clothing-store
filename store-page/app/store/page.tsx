import Card from "../../components/Card";
import Drawer from "../../components/Drawer";
import Pagination from "../../components/Pagination";
import SearchBar from "../../components/SearchBar";
import SideBar from "../../components/SideBar";
import Sorts from "../../components/Sorts";

async function getData () {
    const res = await fetch('http://localhost:3000/api/products', {cache: 'no-store'})
    const data = await res.json();
    console.log('data:',data)
    return data;
}

export default async function Store() {
    const data = await getData();
    return (
        <div className="bg-white text-center p-5">
            <div className="min-[873px]:hidden">
                <Drawer/>
            </div>
            <div className="flex justify-center my-2">
                <div className="max-[873px]:hidden"> 
                    <SideBar/>
                </div>
                <div>
                    <div className="flex md:ml-10 pb-2 text-left">
                        <SearchBar/>
                        <div className="ml-auto">
                            <Sorts/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-9 pt-5 md:grid-cols-3 md:ml-10 w-max place-content-center border-t-2 pb-9">
                        {data?.map((item: any, index: number) => {
                            return <Card key={index} item={item} />
                        })}
                    </div>
                    <Pagination/>
                </div>
            </div>
        </div>
    );
}
