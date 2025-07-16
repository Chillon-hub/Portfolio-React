import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = ({ className = "" }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        } else if (savedTheme === "light") {
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
        } else {
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            document.documentElement.classList.toggle("dark", systemPrefersDark);
            setDarkMode(systemPrefersDark);
        }
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        document.documentElement.classList.toggle("dark", newDarkMode);
        localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    };

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const linkClass = ({ isActive }) =>
        isActive
            ? "text-blue-500 font-bold"
            : "text-gray-700 dark:text-gray-300 hover:text-blue-500";
    return (
        <header className={`w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow ${className}`}>
            {/* Logo */}
            <NavLink to="/" onClick={() => setMenuOpen(flase)} className="text-xl font-bold text-gray-800 dark:text-white">
                Chillon Rigonan
            </NavLink>

            {/* Desktop Links */}
            <nav className="hidden md:flex gap-6">
                <NavLink to="/about" className={linkClass}>About</NavLink>
                <NavLink to="/projects" className={linkClass}>Projects</NavLink>
                <NavLink to="/contact" className={linkClass}>Contact Me</NavLink>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
                {/* Dark mode toggle (placeholder) */}
                <button
                    onClick={toggleDarkMode}
                    className="text-xl text-gray-600 dark:text-gray-300 hover:text-yellow-400 transition"
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? <FiSun /> : <FiMoon />}
                </button>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="text-2xl md:hidden text-gray-600 dark:text-gray-300"
                    aria-label="Toggle mobile menu"
                >
                {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-md flex flex-col items-center gap-4 py-4 z-20">
                    <NavLink to="/about" className={linkClass} onClick={toggleMenu}>About</NavLink>
                    <NavLink to="/projects" className={linkClass} onClick={toggleMenu}>Projects</NavLink>
                    <NavLink to="/contact" className={linkClass} onClick={toggleMenu}>Contact Me</NavLink>
                </div>
            )}
        </header>
    );
};

export default Navbar;