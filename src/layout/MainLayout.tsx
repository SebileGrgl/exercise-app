import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="bg-secondary w-full">{children}</main>
    </div>
  );
};

export default MainLayout;
