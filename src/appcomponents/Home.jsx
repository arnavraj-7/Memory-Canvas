import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900 bg-[length:200%_200%]"
                initial={{ backgroundPosition: "0% 0%" }}
                animate={{ backgroundPosition: "100% 100%" }}
                transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
                style={{
                    background: "linear-gradient(135deg, #0f172a, #1e293b, #4c1d95)", // Darker gradient
                    backgroundSize: "200% 200%",
                }}
            />
            <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-4 z-10"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Welcome to Memory Canvas
            </motion.h1>
            <motion.p
                className="text-lg md:text-xl text-white mb-8 z-10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Capture and cherish your memories with ease.
            </motion.p>
            <motion.div
                className="flex space-x-4 z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <motion.button
                    className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate('/Login')}
                >
                    Login
                </motion.button>
                <motion.button
                    className="px-6 py-3 bg-white text-purple-500 font-semibold rounded-lg shadow-md hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate('/CreateAccount')}
                >
                    Create Account
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Home;
