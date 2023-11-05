import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import { Alert, AlertIcon, Stack } from "@chakra-ui/react";
import Swal from 'sweetalert2'


const Login = () => {
    const { Login } = useContext(authContext)
    const [error, setError] = useState('')
    const naviget = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        setError('')
        Login(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire(
                    'Login Success!',
                    'Your Account Successfully Login!',
                    'success'
                )
                naviget('/')
            })
            .catch(error => {
                setError(error.message)
            })

    }

    return (
        <div className="bg-sky-100 w-11/12 mx-auto mt-6 p-6 rounded-lg">
            <form onSubmit={handleLogin}>
                <div className="bg-white md:w-2/5 mx-auto p-4 rounded-lg">
                    <h1 className="text-4xl font-semibold text-center my-2">Login Account</h1>
                    {error &&
                        <Stack spacing={3}>
                            <Alert status='error' className="rounded-md">
                                <AlertIcon />
                                {error}
                            </Alert>
                        </Stack>
                    }
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mt-2 mb-1">Email</label>
                        <input type="email" placeholder="Enter Email" className="border-2 border-sky-100 p-2 h-12 rounded-lg" name="email" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mt-2 mb-1">password</label>
                        <input type="password" placeholder="Enter Password" className="border-2 border-sky-100 p-2 h-12 rounded-lg" name="password" required />
                    </div>
                    <div className="flex flex-col">
                        <input type="submit" value='Login' className="border-2 border-sky-100 p-2 h-12 rounded-lg mt-4 hover:bg-sky-400 hover:text-white" required />
                    </div>
                    <p className="my-4">Do Not Have Account? <Link className="text-blue-600" to='/register'>Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;