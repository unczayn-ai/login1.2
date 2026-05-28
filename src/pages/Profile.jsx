import {useEffect, useState} from "react";
import {getProfile} from "../api/auth";
import {toast} from "react-toastify";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";

function Profile() {

    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [avatar, setAvatar] = useState("");

    useEffect(function() {

        async function fetchProfile() {

            try {

                const response = await getProfile();

                if(response.status === 200) {
                    
                    setProfile(response.data);
                }

            } catch(error) {

                toast.error("Failed to load profile");

            } finally {

                setLoading(false);
            }
        }
        fetchProfile();

    }, []);

    useEffect(() => {

        const savedAvatar = localStorage.getItem("avatar");

        if(savedAvatar) {
            setAvatar(savedAvatar);
        }
    }, []);

    function handleAvatarChange(event) {

        const file = event.target.files[0];

        if(!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            const imageUrl = reader.result;
            setAvatar(imageUrl);
            localStorage.setItem("avatar", imageUrl);
        }
        reader.readAsDataURL(file);
    }

    if(loading) {
        <p>Loading...</p>
    }

    return(

        <MainLayout>

            <div className="max-w-6xl mx-auto p-6">
                <div className="mb-6 md:mb-8">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 ">My Profile</h1>
                    <p className="text-gray-500 mt-2">Manage your account information</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 md:mb-8">
                    <Card>
                        <div className="flex flex-col items-center text-center">
                            <label className="cursor-pointer">
                                {avatar ? (<img src={avatar} alt="Profile" className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-500 mb-6"/>) : 
                                (
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-600 text-white flex items-center justify-center text-5xl font-bold mb-6">
                                        U
                                    </div>
                                )}
                                <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange}/>
                            </label>
                            <h2 className="text-2xl font-bold dark:text-white">User</h2>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">Frontend Developer</p>
                            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
                                Edit Profile
                            </button>
                        </div>
                    </Card>

                    <Card className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-6 dark:text-white">Account Information</h2>
                        <div className="space-y-6">
                            <div>
                                <p className="text-gray-500 dark:text-gray-400 mb-1">Email</p>
                                <p className="text-lg font-semibold dark:text-white">{profile?.user?.email}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 dark:text-gray-400 mb-1">Role</p>
                                <p className="text-lg font-semibold dark:text-white">User</p>
                            </div>
                            <div>
                                <p className="text-gray-500 dark:text-white mb-1">Status</p>
                                <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">Active</span>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                        <h3 className="text-gray-500 dark:text-gray-400 mb-2">Projects</h3>
                        <p className="text-3xl font-bold dark:text-white">12</p>
                    </Card>

                    <Card>
                        <h3 className="text-gray-500 dark:text-gray-400 mb-2">Tasks Completed</h3>
                        <p className="text-3xl font-bold dark:text-white">87</p>
                    </Card>

                    <Card>
                        <h3 className="text-gray-500 dark:text-gray-400 mb-2">Account Age</h3>
                        <p className="text-3xl font-bold dark:text-white">1 year</p>
                    </Card>
                </div>

            </div>
        </MainLayout>
    );
}

export default Profile;