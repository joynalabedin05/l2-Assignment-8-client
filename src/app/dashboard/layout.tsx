import Sidebar from "@/components/shared/sidebar/Sidebar";


const DashboardLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="grid grid-cols-12">
            <Sidebar></Sidebar>
            <div className="col-span-10 m-10">
            {children}
            </div>
            
        </div>
    );
};

export default DashboardLayout;