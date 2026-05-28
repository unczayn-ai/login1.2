import {useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import {toast} from "react-toastify";
import Loader from "../components/Loader";
import {validateEmail, validatePassword} from "../utils/validation";
import {registerUser} from "../api/auth";

function Register() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    async function handleRegister(event) {
        event.preventDefault();

        if (!email || !password) {
            toast("Please fill all fields");
            return;
        }

        if(!validateEmail(email)) {
            toast.error("Invalid email format");
            return;
        }

        if(!validatePassword(password)) {
            toast.error("Password needs uppercase letter and number");
            return;
        }

        try {
            setLoading(true);
            const response = await registerUser(email, password);
            const data = response.data;
            
            if(response.status === 201) {

                toast.success(data.message);
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            }

        } catch(error) {

            console.log(error);
            toast("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 to-indigo-200 dark:from-gray-900 dark:to-black p-4">
            <form onSubmit={handleRegister} className="bg-white dark:bg-gray-900 w-full max-w-md p-6 md:p-8 rounded-3xl shadow-2xl">
                <div className="mb-6 md:mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">Create Account</h1>
                    <p className="text-gray-500 dark:text-gray-400">Start your journey today</p>
                </div>
                <Input 
                    type = "email"
                    placeholder = "Email"
                    value = {email}
                    onChange = {(event) => setEmail(event.target.value)}
                    autocomplete={email}
                />
                <Input
                    type = "password"
                    placeholder = "password"
                    value = {password}
                    onChange = {(event) => setPassword(event.target.value)}
                    autocomplete={password}
                />
                <Button type="submit" disabled={loading}>
                    {loading ? <Loader /> : "Register"}
                </Button>
                
                <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
                    Already have account?
                    <Link to="/" className="text-blue-600 font-semibold ml-2">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Register;