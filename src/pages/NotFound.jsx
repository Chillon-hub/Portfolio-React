import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);
    
        const redirectTimeout = setTimeout(() => {
            navigate("/");
        }, 3000);
        return () => {
            clearInterval(timer);
            clearTimeout(redirectTimeout);
        };
    }, [navigate]);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen text-center text-xl text-gray-700 dark:text-gray-300 px-4">
            <p className="text-3xl font-semibold mb-4">Page not found!</p>
            <p>Redirecting to Home in {countdown}...</p>
        </div>
    );
};

export default NotFound;