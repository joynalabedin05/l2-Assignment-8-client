import { Products } from "@/components/homeComponent/FlashSale";
import { ChevronRight, CirclePlus } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

const GraceryPage = async () => {
    const res = await fetch("http://localhost:5000/api/v1/all-popular-products", {
        next: {
            revalidate: 30,
        }
    });
    const data = await res.json();
    return (
        <div className="max-w-[1200px] mx-auto my-10">
            <div className="mb-10">
                <h1 className="text-3xl font-bold">Our Collection Of Products</h1>               
            </div>
            <div className="flex gap-4">
                <div className="w-2/12 flex-col">
                <div className="border p-5">
                    <div className="flex gap-1 mb-2">
                        <span>|</span>
                        <h1 className="font-bold">Price Range</h1>
                    </div>
                    <ul>
                        <li>
                            <input type="checkbox" name="" id="" />
                            <span className="ml-2">$20-90.00</span>
                        </li>
                        <li>
                            <input type="checkbox" name="" id="" />
                            <span className="ml-2">$20-90.00</span>
                        </li>
                        <li>
                            <input type="checkbox" name="" id="" />
                            <span className="ml-2">$20-90.00</span>
                        </li>
                        <li>
                            <input type="checkbox" name="" id="" />
                            <span className="ml-2">$20-90.00</span>
                        </li>
                    </ul>
                </div> 
                <div className="border p-5 my-5">
                    <div className="flex gap-1 mb-2">
                        <span>|</span>
                        <h1 className="font-bold">Category/Brands</h1>
                    </div>
                    <ul>
                        <li>
                            <span className="ml-2">Tea</span>
                            <select name="name 1" id="name 1">
                            {/* <option>Select car:</option> */}
                           
                            </select>
                        </li>
                        <li>
                            <span className="ml-2">Water</span>
                            <select name="name 1" id="name 1">
                            {/* <option>Select car:</option> */}
                           
                            </select>
                        </li>
                        <li>
                            <span className="ml-2">Food</span>
                            <select name="name 1" id="name 1">
                            {/* <option>Select car:</option> */}
                           
                            </select>
                        </li>
                      
                    </ul>
                </div> 
                <div className="border p-5">
                    <div className="flex gap-1 mb-2">
                        <span>|</span>
                        <h1 className="font-bold">Ratings</h1>
                    </div>
                    <ul>
                        <li>
                            <input type="checkbox" name="" id="" />
                            <span className="ml-2">$20-90.00</span>
                        </li>
                        <li>
                            <input type="checkbox" name="" id="" />
                            <span className="ml-2">$20-90.00</span>
                        </li>
                        <li>
                            <input type="checkbox" name="" id="" />
                            <span className="ml-2">$20-90.00</span>
                        </li>
                        <li>
                            <input type="checkbox" name="" id="" />
                            <span className="ml-2">$20-90.00</span>
                        </li>
                    </ul>
                </div> 
                              
                </div>
                <div className="grid grid-cols-4 gap-y-8 w-10/12">
                {
                    data?.slice(0-6).map((item: Products)=><div key={item._id} className="card  bg-base-100 shadow-xl relative mx-4">
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
        </div>
    );
};

export default GraceryPage;