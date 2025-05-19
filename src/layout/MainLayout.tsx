import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-secondary w-screen">
      <Sidebar />
      <main className=" w-full px-2 ml-16 h-screen">
        <Header />
        <div>{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
