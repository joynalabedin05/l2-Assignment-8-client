import { ChevronRight } from "lucide-react";

const TopCategories = () => {
    return (
        <div className="max-w-[1200px] mx-auto mt-10">
            <div className="text-center w-3/4 mx-auto">
                <h1 className="text-3xl font-bold mb-2">TopCategories</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsum eum, delectus iure placeat deleniti modi quae aperiam modi quae aperiam voluptates quam?</p>
            </div>
            <div className="grid grid-cols-3 mt-10 gap-5 my-10">
                <div className="bg-red-300  h-full rounded ">

                </div>
                <div className="grid grid-rows-2 gap-5">
                    <div className="bg-red-300 w-full h-full rounded ">

                    </div>
                    <div className="bg-red-300 w-full h-48 rounded ">

                    </div>
                </div>
                <div className="bg-red-300  h-full rounded row-span-1">

                </div>
            </div>
            <div className="text-center">
            <button className="btn btn-neutral rounded-3xl">View All <ChevronRight /></button>
            </div>
        </div>
    );
};

export default TopCategories;