import {Link, useNavigate} from "react-router-dom";
import {Menu, X, User} from "lucide-react";
import {useState} from "react";
import useAuth from "../hooks/useAuth";
import useTheme from "../hooks/useTheme";

function Navbar() {

    const navigate = useNavigate();
    const {logout} = useAuth();
    const {theme, toggleTheme} = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    function handleLogout() {

        logout();
        navigate("/");
    }

    return(

        <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <h1 className="text-xl md:text-2xl font-bold text-blue-600">Auth App</h1>
                <div className="hidden md:flex items-center gap-6">
                    <Link to = "/dashboard" className="font-bold dark:text-white hover:text-blue-600">Dashboard</Link>
                    <Link to = "/profile" className="font-bold dark:text-white hover:text-blue-600">Profile</Link>
                    <button onClick={toggleTheme} className="font-bold dark:text-white hover:text-blue-600">
                        {theme==="light" ? "Dark" : "Light"}
                    </button>
                    <div className="relative">
                        <button onClick={()=>setDropdownOpen(!dropdownOpen)} className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                            <User size={20}/>
                        </button>

                        {dropdownOpen && (
                            <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-xl w-40 p-2 border">
                                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">
                                    Profile
                                </Link>
                                <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg text-red-500">
                                    Logout
                                </button>
                            </div>
                        )}
                        
                    </div>
                </div>
                
                <button onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden">
                    {menuOpen ? <X/> : <Menu/>}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-4">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/profile">Profile</Link>
                    <button onClick={toggleTheme} className="font-bold dark:text-white hover:text-blue-600">
                        {theme==="light" ? "Dark" : "Light"}
                    </button>
                    <button onClick={handleLogout} className="text-left text-red-500">Logout</button>
                </div>
            )}
            
        </nav>

    );
}

export default Navbar;