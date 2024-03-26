import Image from 'next/image';
import React from 'react';

const AllProductsPage = async () => {
    const res = await fetch("http://localhost:5000/api/v1/all-products");
    const data = await res.json();
    console.log(data);
    return (
        <div className=" my-10 rounded-md">
        <h1 className="text-sky-700 text-4xl px-3"> All Products :</h1>
        <div className='overflow-x-auto mt-5'>
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>Serial no</th>
                <th>Title</th>
                <th>Category</th>
                <th>Product Id</th>
                <th>Price(BDT)</th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            {
                data?.map((item, i)=><tr key={item._id} className="hover:bg-slate-300">
                <th>{i + 1}</th>
                <td className='flex gap-3'><span><Image src={item.image} alt='image' width={40} height={40}></Image></span> {item.title} </td>
                <td>{item.category}</td>
                <td>{item._id}</td>
                <td>{item.price}</td>
            </tr>)
            }
                          
            </tbody>
        </table>
        </div>
    </div>
    );
};

export default AllProductsPage;