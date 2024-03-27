import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/logo.png";


const Navbar = () => {
    const navItems = <>      
        <li><Link href='/'>Home</Link></li>      
        <li><Link href='/'>Categories</Link></li>      
        <li><Link href='/'>Products</Link></li>      
        <li><Link href='/flash-sale'>Flash Sale</Link></li>      
        <li><Link href='/'>About Us</Link></li>            
        <li><Link href='/'>Contact Us</Link></li>            
    </>

    return (
        
            <div className="bg-base-100 w-full sticky top-0 left-0 z-10 ">
                <div className=" navbar  max-w-[1200px] mx-auto">
                <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navItems}
                    </ul>
                </div>
                <a className=" text-xl">
                    <Image className="rounded-full" src={Logo} height={60} width={60} alt="logo"/>

                </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navItems}
                </ul>
                </div>
                {/* <div className="navbar-end">
                <a className="">Button</a>
                </div> */}
                </div>
            </div>
    );
};

export default Navbar;