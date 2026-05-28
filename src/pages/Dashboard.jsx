import useAuth from "../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import useTheme from "../hooks/useTheme";
import {getProfile} from "../api/auth";
import {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";

function Dashboard() {

    const navigate = useNavigate();
    const {user, logout} = useAuth();
    const {theme, toggleTheme} = useTheme();
    const [profile, setProfile] = useState(null);

    useEffect(function() {

        async function fetchProfile() {

            const response = await getProfile();

            console.log(response.data);
            setProfile(response.data);
        }
        fetchProfile();

    }, []);

    function handleLogout() {
        logout();
        navigate("/");
    }

    return (

        <MainLayout>

            <div className="max-w-7xl mx-auto p-6">
                <div className="mb-6 md:mb-8">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">Welcome Back 👋</h1>
                    <p className="text-gray-500 mt-2">Here's your dashboard overview.</p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 md:mb-8">
                    <Card>
                        <h2 className="text-gray-500 dark:text-gray-400 mb-2">Total Users</h2>
                        <p className="text-3xl font-bold dark:text-white">1,245</p>
                    </Card>

                    <Card>
                        <h2 className="text-gray-500 dark:text-gray-400 mb-2">Revenue</h2>
                        <p className="text-3xl font-bold dark:text-white">$12,400</p>
                    </Card>

                    <Card>
                        <h2 className="text-gray-500 dark:text-gray-400 mb-2">Active Sessions</h2>
                        <p className="text-3xl font-bold dark:text-white">342</p>
                    </Card>

                    <Card>
                        <h2 className="text-gray-500 dark:text-gray-400 mb-2">Growth</h2>
                        <p className="text-3xl font-bold text-green-500">+18%</p>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-4 dark:text-white">Recent Activity</h2>
                        <div className="space-y-4 dark:text-gray-400">
                            <div className="border-b pb-3">User logged in</div>
                            <div className="border-b pb-3">Profile updated</div>
                            <div className="border-b pb-3">New registration</div>
                        </div>
                    </Card>

                    <Card>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-blue-500 text-white flex items-center justify-center text-3xl font-bold mb-4">U</div>
                            <h2 className="text-2xl font-bold dark:text-white">User</h2>
                            <p className="text-gray-500 mt-2 dark:text-gray-400">React Developer</p>
                        </div>
                    </Card>
                </div>
            </div>
        </MainLayout>
    );
}


export default Dashboard;