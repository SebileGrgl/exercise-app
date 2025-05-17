import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="bg-secondary w-full px-2">
        <Header />
        <div>{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
