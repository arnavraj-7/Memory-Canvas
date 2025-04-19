import { Link, NavLink, useNavigate } from "react-router-dom";
import { useActiveUser } from "@/contexts/ActiveUser";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Navbar = () => {
  const {theme ,handleTheme}=useTheme();
  
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
    <nav className="bg-zinc-900 text-white py-4 px-8 shadow-md flex justify-between items-center">
    {/* Logo Section */}
    <Link to="/" className="text-3xl font-bold tracking-wide hover:text-blue-400 transition-colors duration-200">
      Memory <span className="text-blue-500">Canvas</span>
    </Link>
  
    {/* Navigation Links */}
    <div className="flex items-center space-x-6 text-lg font-medium">
      {active ? (
        <>
          <NavLink
            to="/Gallery"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 underline underline-offset-4"
                : "hover:text-blue-300 transition-colors"
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/Upload"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 underline underline-offset-4"
                : "hover:text-blue-300 transition-colors"
            }
          >
            Upload
          </NavLink>
          <NavLink
            to="/Profile"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 underline underline-offset-4"
                : "hover:text-blue-300 transition-colors"
            }
          >
            Profile
          </NavLink>
          <Button
            onClick={handleLogout}
            variant="destructive"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-semibold"
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <NavLink
            to="/Login"
            className="hover:text-blue-300 transition-colors"
          >
            Login
          </NavLink>
          <NavLink
            to="/CreateAccount"
            className="hover:text-blue-300 transition-colors"
          >
            Sign Up
          </NavLink>
        </>
      )}
    </div>
  </nav>
  
  );
};

export default Navbar;
