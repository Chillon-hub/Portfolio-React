import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar"
import SocialLinks from "../components/SocialLinks";

const MainLayout = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isContact = location.pathname === "/contact";

    useEffect(() => {
        const path = location.pathname.slice(1) || "Home";
        document.title = `Chillon | ${path.charAt(0).toUpperCase() + path.slice(1)}`;
    }, [location.pathname]);

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <header>
                <Navbar className="fixed top-0 left-0 w-full z-50"/>
            </header>

            {!isHome && !isContact && (
                <div className="hidden lg:block">
                    <SocialLinks layout="side" />
                </div>
            )}

            <main className="flex-grow px-4 sm:px-8 max-w-7xl mx-auto w-full lg:mb-0">
                <Outlet />
            </main>
            <footer className="text-center py-4 px-4 sm:px-8 text-sm text-gray-500 dark:text-gray-400">
                {!isHome && !isContact && (
                    <div className="lg:hidden mb-2">
                        <SocialLinks layout="side" />
                    </div>
                )}
                © 2025 Chillon C. Rigonan. All rights reserved.
            </footer>
        </div>
    );
};

export default MainLayout;