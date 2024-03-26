import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";


const commonLayout = ({children}: {children:React.ReactNode}) => {
    return (
        <div>
            <Navbar/>
            <div className="my-5">{children}</div>           
            <Footer/>
        </div>
    );
};

export default commonLayout;