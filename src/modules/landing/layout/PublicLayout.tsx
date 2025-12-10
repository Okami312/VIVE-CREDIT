import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <Header />

      <main className="flex-1 pt-4">
        <Outlet />
      </main>

      <FooterSection />
    </div>
  );
};

export default PublicLayout;
