import { CirclePlus } from 'lucide-react';
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from 'next/link';

export type Products = {
    _id: string,
    title: string,
    category: string,
    image: string,
    description: string,
    rating: number,
    price: number

}

const FlashSale = async () => {
    const res = await fetch("http://localhost:5000/api/v1/all-products", {
        next: {
            revalidate: 30,
        }
    });
    const data = await res.json();
    // console.log(data);
    return (
        <div className="max-w-[1200px] mx-auto my-10">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">Flash Sale</h1>
                <button className="btn btn-neutral rounded-3xl"><Link href='/flash-sale'>View All</Link> <ChevronRight/></button>
            </div>
            <div className="grid grid-cols-4 gap-1 mt-8">
            {
                data?.slice(0-4).map((item: Products)=><div key={item._id} className="card  bg-base-100 shadow-xl relative mx-4">
                <h1 className="absolute bg-slate-300 p-2 top-3 left-5 rounded-2xl">-13%</h1>
                <figure><Image src={item.image} height={200} width={250} alt="carasol" className="w-full h-[300px]  rounded-md"/></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {item.title}
                    </h2> 
                    <div className="flex justify-between mt-1">
                        <div className="flex w-1/2">
                        <p className="bg-gray-300 line-through">${item.price} </p>
                        <span className="bg-white">${(item.price-3).toFixed(2)}</span> 
                        </div>
                        <div>
                           <button> <CirclePlus></CirclePlus></button>
                        </div>

                     </div>            
                </div>
            </div>)
            }
            </div>
        </div>
    );
};

export default FlashSale;