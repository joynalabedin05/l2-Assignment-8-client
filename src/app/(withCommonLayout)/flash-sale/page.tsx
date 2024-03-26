import { CirclePlus } from 'lucide-react';
import Image from "next/image";
import grocery1 from "../../../assets/grocery2.jpg";
import { ChevronRight } from "lucide-react";
import Link from 'next/link';

const FlashSalePage = () => {
    return (
        <div className="max-w-[1200px] mx-auto mt-20">
        <div className="">
            <h1 className="text-3xl font-bold">Flash Sale</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis pariatur impedit ad odio alias asperiores nihil sed quidem, corrupti ipsam.</p>
        </div>
        <div className="grid grid-cols-4 gap-1 mt-10">
        <div className="card  bg-base-100 shadow-xl relative mx-4">
            <h1 className="absolute bg-slate-300 p-2 top-3 left-5 rounded-2xl">-13%</h1>
            <figure><Image src={grocery1} alt="carasol" className="w-full h-[300px]  rounded-md"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                Grocery name
                </h2> 
                <div className="flex justify-between mt-1">
                    <div className="flex w-1/2">
                    <p className="bg-gray-300 line-through">$230.00 </p>
                    <span className="bg-white">$200.00</span> 
                    </div>
                    <div>
                       <button> <CirclePlus></CirclePlus></button>
                    </div>

                 </div>            
            </div>
        </div>
        <div className="card  bg-base-100 shadow-xl relative mx-4">
            <h1 className="absolute bg-slate-300 p-2 top-3 left-5 rounded-2xl">-13%</h1>
            <figure><Image src={grocery1} alt="carasol" className="w-full h-[300px]  rounded-md"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                Grocery name
                </h2> 
                <div className="flex justify-between mt-1">
                    <div className="flex w-1/2">
                    <p className="bg-gray-300 line-through">$230.00 </p>
                    <span className="bg-white">$200.00</span> 
                    </div>
                    <div>
                       <button> <CirclePlus></CirclePlus></button>
                    </div>

                 </div>            
            </div>
        </div>
        </div> 
        <div className=' my-10 text-center mx-auto'>
        <button className="btn btn-neutral rounded-3xl"><Link href='/flash-sale'>Load All</Link><ChevronRight/></button>
        </div>
    </div>
    );
};

export default FlashSalePage