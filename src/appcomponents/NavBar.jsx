import { Link, NavLink, useNavigate } from "react-router-dom";
import { useActiveUser } from "@/contexts/ActiveUser";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const { Theme, handleTheme } = useTheme();
  const { active, setactive } = useActiveUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("active");
    toast.success("Logout Successful", {
      description: "You have been logged out successfully",
      duration: 1000,
    });
    setactive(null);
  };

  return (
    <nav className="dark:bg-gradient-to-r from-gray-900 to-black sticky top-0 w-full bg-white dark:text-white py-3 px-8 z-10 shadow-lg border-b dark:border-gray-800 flex justify-between items-center">
      {/* Logo Section */}
      <Link
        to="/"
        className="text-3xl font-bold tracking-wider bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text hover:from-pink-400 hover:via-purple-400 hover:to-blue-400 transition-colors duration-300 drop-shadow-lg"
      >
        <span className="font-bold">Memory</span> <span>Canvas</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6 text-base font-medium">
        {active ? (
          <>
            <NavLink
              to="/Gallery"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-400 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-pink-500 after:bottom-[-4px] after:left-0"
                  : "hover:text-pink-300 transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-pink-500/50 hover:after:bottom-[-4px] hover:after:left-0 hover:after:transform hover:after:transition-all"
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/Upload"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-400 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-purple-500 after:bottom-[-4px] after:left-0"
                  : "hover:text-purple-300 transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-purple-500/50 hover:after:bottom-[-4px] hover:after:left-0 hover:after:transform hover:after:transition-all"
              }
            >
              Upload
            </NavLink>
            <NavLink
              to="/Profile"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-500 after:bottom-[-4px] after:left-0"
                  : "hover:text-blue-300 transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-blue-500/50 hover:after:bottom-[-4px] hover:after:left-0 hover:after:transform hover:after:transition-all"
              }
            >
              Profile
            </NavLink>
            <Button
              onClick={handleLogout}
              variant="destructive"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-5 py-2 rounded-md text-sm font-semibold shadow-md hover:shadow-red-600/20 transition-all duration-300"
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <NavLink
              to="/Login"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-400 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-pink-500 after:bottom-[-4px] after:left-0"
                  : "hover:text-pink-300 transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-pink-500/50 hover:after:bottom-[-4px] hover:after:left-0 hover:after:transform hover:after:transition-all"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/CreateAccount"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-400 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-purple-500 after:bottom-[-4px] after:left-0"
                  : "hover:text-purple-300 transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-purple-500/50 hover:after:bottom-[-4px] hover:after:left-0 hover:after:transform hover:after:transition-all"
              }
            >
              Sign Up
            </NavLink>
          </>
        )}
        <button
          className="rounded-full h-10 w-10 p-1 border tracking-wider bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500  border-gray-700 hover:border-purple-400 transition-all duration-300 shadow-md hover:shadow-purple-500/30"
          onClick={handleTheme}
          aria-label={Theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          <img
            className="rounded-full object-cover h-full w-full hover:animate-pulse"
            src={Theme == "dark" ? "src/assets/dark.png" : "src/assets/light.png"}
            alt={Theme === "dark" ? "Dark mode" : "Light mode"}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;