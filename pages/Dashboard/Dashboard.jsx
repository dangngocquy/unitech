import HeaderLeft from "../../components/dashboard/headerLeft/HeaderLeft";
import { Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <div className="Dashboard-container">
            <div className="header-left-dashboard">
                <HeaderLeft />
                <Outlet />

            </div>
        </div>
    )
}
export default Dashboard;