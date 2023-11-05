import { useContext } from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const {Login} = useContext()

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value

    }

    return (
        <div className="bg-sky-100 w-11/12 mx-auto mt-6 p-6 rounded-lg">
            <form onSubmit=''>
                <div className="bg-white md:w-2/5 mx-auto p-4 rounded-lg">
                    <h1 className="text-4xl font-semibold text-center my-2">Login Account</h1>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mt-2 mb-1">Email</label>
                        <input type="email" placeholder="Enter Email" className="border-2 border-sky-100 p-2 h-12 rounded-lg" name="email" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mt-2 mb-1">password</label>
                        <input type="password" placeholder="Enter Password" className="border-2 border-sky-100 p-2 h-12 rounded-lg" name="password" required />
                    </div>
                    <div className="flex flex-col">
                        <input type="submit" value='Register' className="border-2 border-sky-100 p-2 h-12 rounded-lg mt-4 hover:bg-sky-100" required />
                    </div>
                    <p className="my-4">Do Not Have Account? <Link className="text-blue-600" to='/register'>Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;