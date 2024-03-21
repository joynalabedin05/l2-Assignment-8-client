import Image from "next/image";
import grocery1 from "../../assets/grocery1.jpg";
import grocery2 from "../../assets/grocery2.jpg";
// import grocery3 from "../../assets/grocery3.jpg";
import grocery4 from "../../assets/grocery4.jpg";
import { CirclePlus } from 'lucide-react';


const HeroSection = () => {
    return (
        <div className="bg-gray-300 p-5">
            <div className="w-1/2 mx-auto">
                <h1 className="text-4xl my-5 font-bold">Grocery Items means supply items, non-food items, foodstuffs. </h1>
                <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, optio molestias nobis quas nesciunt quae dolorem ducimus aliquam ad debitis aliquid tempora quasi officia explicabo fugit rem dolores praesentium ut!</p>
            </div>
            <div className="carousel  mt-10 w-3/4 ml-40">
            <div id="slide1" className="carousel-item relative w-full">
                
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
                <div className="card  bg-base-100 shadow-xl relative mx-2">
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
                <div className="card  bg-base-100 shadow-xl relative mx-3">
                <h1 className="absolute bg-slate-300 p-2 top-3 left-5 rounded-2xl">-13%</h1>
                <figure><Image src={grocery4} alt="carasol" className="w-full h-[300px]  rounded-md"/></figure>
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
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                
            </div> 
             <div id="slide2" className="carousel-item relative w-full">
                
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
                <div className="card  bg-base-100 shadow-xl relative mx-2">
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
                <div className="card  bg-base-100 shadow-xl relative mx-3">
                <h1 className="absolute bg-slate-300 p-2 top-3 left-5 rounded-2xl">-13%</h1>
                <figure><Image src={grocery4} alt="carasol" className="w-full h-[300px]  rounded-md"/></figure>
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
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                
            </div>
             <div id="slide3" className="carousel-item relative w-full">
                
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
                <div className="card  bg-base-100 shadow-xl relative mx-2">
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
                <div className="card  bg-base-100 shadow-xl relative mx-3">
                <h1 className="absolute bg-slate-300 p-2 top-3 left-5 rounded-2xl">-13%</h1>
                <figure><Image src={grocery4} alt="carasol" className="w-full h-[300px]  rounded-md"/></figure>
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
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                
            </div>
             <div id="slide4" className="carousel-item relative w-full">
                
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
                <div className="card  bg-base-100 shadow-xl relative mx-2">
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
                <div className="card  bg-base-100 shadow-xl relative mx-3">
                <h1 className="absolute bg-slate-300 p-2 top-3 left-5 rounded-2xl">-13%</h1>
                <figure><Image src={grocery4} alt="carasol" className="w-full h-[300px]  rounded-md"/></figure>
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
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                
            </div>
            
            
            
            </div>
        </div>
    );
};

export default HeroSection;