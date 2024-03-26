import Link from "next/link";

const Sidebar = () => {
    return (
        <aside className="bg-purple-500 text-white col-span-2 h-screen sticky top-0 left-0 overflow-auto p-3 md:p-5">
           
        <nav className="flex flex-col gap-3 mt-10">
            <Link className="p-3 bg-gray hover:bg-gray-700 hover:text-white rounded-md transition-all flex  items-center gap-2 text-lg" href='/'> 
            <span className="truncate">Home</span>
            </Link>            
            <Link className="p-3 bg-gray hover:bg-gray-700 hover:text-white rounded-md transition-all flex  items-center gap-2 text-lg" href='/dashboard/all-products'> 
            <span className="truncate">AllProducts</span>
            </Link>            
        </nav>
    </aside>
    );
};

export default Sidebar;