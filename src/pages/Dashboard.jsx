import { Outlet } from "react-router";
import HeadNav from "../components/Header";
function Dashboard (){
    return(
        <div>
        <HeadNav />

        <Outlet/>
        
        </div>
    )
};

export default Dashboard;