import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen">
      <div className="bg-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <header className="site-header">
            <h1 className="site-title">Command of Commerce</h1>
            <h2 className="site-subtitle">
              America's Enduring Economic Power<br />
              Advantage over China
            </h2>
          </header>
        </div>
        <Navbar className="sticky top-0 z-50 bg-slate-100 border-b py-6" />
      </div>
      <main className="bg-white">
        <Outlet />
      </main>
    </div>
  );
}
