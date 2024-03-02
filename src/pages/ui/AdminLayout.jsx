import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar"; 
import AdminHeader from "./AdminHeader";


function AdminLayout() {
	return (
		<>	<div className="flex flex-col xl:flex-row">
			<AdminSidebar/>
			<main className="w-full">
				<AdminHeader/>
				<Outlet />
			</main>
		</div>
			
		</>
	);
}

export default AdminLayout;
