import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

function AdminLayout({ children }) {
  return (
    <div className="flex flex-col xl:flex-row">
      <AdminSidebar />
      <main className="w-full">
        <AdminHeader />
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
