import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

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
      </div>
      <div className="sticky top-0 z-50 bg-slate-100 shadow-sm">
        <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-4 py-4">
              <Link
                to="/"
                className={`text-lg transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                HOME
              </Link>
              <Link
                to="/authors"
                className={`text-lg transition-colors hover:text-primary ${
                  isActive("/authors") ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                AUTHORS
              </Link>
              <Link
                to="/about"
                className={`text-lg transition-colors hover:text-primary ${
                  isActive("/about") ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                PRAISE
              </Link>
              <Link
                to="/press"
                className={`text-lg transition-colors hover:text-primary ${
                  isActive("/press") ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                PRESS
              </Link>
              <Link
                to="/appendix"
                className={`text-lg transition-colors hover:text-primary ${
                  isActive("/appendix") ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                APPENDIX
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <main className="bg-white">
        <Outlet />
      </main>
    </div>
  );
}
