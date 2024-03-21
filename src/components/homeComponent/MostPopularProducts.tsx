import { ChevronRight, CirclePlus } from "lucide-react";
import Image from "next/image";
import grocery2 from "../../assets/grocery2.jpg";


const MostPopularProducts = () => {
    return (
        <div className="max-w-[1200px] mx-auto my-28">
            <div className="flex justify-between"> 
                <div className="w-1/2">
                    <h1 className="text-3xl font-bold mb-2">MostPopularProducts</h1>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, laborum a? Numquam molestiae velit magni  beatae accusamus a!</p>
                </div>
                <button className="btn btn-neutral rounded-3xl">View All <ChevronRight/></button>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-10">
            <div className="card  bg-base-100 shadow-xl relative mx-4">
                <h1 className="absolute bg-slate-300 p-2 top-3 left-5 rounded-2xl">-13%</h1>
                <figure><Image src={grocery2} alt="carasol" className="w-full h-[300px]  rounded-md"/></figure>
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
            
        </div>
    );
};

export default MostPopularProducts;