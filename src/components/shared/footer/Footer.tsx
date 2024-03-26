import Image from "next/image";
import Logo from "../../../assets/logo.png";

import image1 from "../../../assets/shefinds-logo 1.png";
import image2 from "../../../assets/yahoo-news-img 1.png";
import image3 from "../../../assets/yahoo-img 1.png";
import image4 from "../../../assets/MSN-logo 1.png";
import image5 from "../../../assets/Healthline-img 1.png";
const Footer = () => {
    return (
        <div className="">
            <div className="flex justify-between max-w-[1200px] mx-auto p-10 w-full h-full">
                <Image src={image1} alt="footer"/>
                <Image src={image2} alt="footer"/>
                <Image src={image3} alt="footer"/>
                <Image src={image4} alt="footer"/>
                <Image src={image5} alt="footer"/>
                <Image src={image1} alt="footer"/>
            </div>           
            <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
            <Image className="rounded-full" src={Logo} height={80} width={80} alt="logo"/>
                <p>Grocery Items Ltd.<br/>Providing reliable food since 1992</p>
            </aside> 
            <nav>
                <h6 className="footer-title">Services</h6> 
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav> 
            <nav>
                <h6 className="footer-title">Company</h6> 
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav> 
            <nav>
                <h6 className="footer-title">Legal</h6> 
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6> 
                <a className="link link-hover">Twitter</a>
                <a className="link link-hover">Instagram</a>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">Github</a>
            </nav> 
            </footer>
            
            <div  className="text-center">
            <p className="bg-base-200 text-base-content">Copyright © 2024 - All right reserved by Grocery Items Ltd</p>
            </div>
        </div>
    );
};

export default Footer;