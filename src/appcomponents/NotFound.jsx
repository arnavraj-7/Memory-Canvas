// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'motion/react'; 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-950">
      <motion.div
      initial={
        { translateY:0,
          opacity:1
        }
      }
      animate={
        { translateY:0,
          opacity:1
        }
      }
      transition={
        {
          ease:"easeOut",
          duration:1
        }
      }
      >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! Page not found.</p>
      <motion.div
      initial={{
        y:10
      }}
      animate={{
        y:0
      }}
      transition={
        {
          duration:2

        }
      }
      >
      <Link
        to="/"
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-700"
      >
        Go Home
      </Link>
      </motion.div>
      </motion.div>
    </div>
  );
}
