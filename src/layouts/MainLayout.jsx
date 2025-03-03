import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <header className="sticky top-0 z-10">
          <Navbar></Navbar>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    );
};

export default MainLayout;