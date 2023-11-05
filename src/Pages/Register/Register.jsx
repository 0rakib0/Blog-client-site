
import { updateProfile } from "firebase/auth";
import { authContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Alert, AlertIcon, Stack } from "@chakra-ui/react";


const Register = () => {

    const { CreateAccount, Logout } = useContext(authContext)
    const [error, setError] = useState('')
    const naviget = useNavigate()

    const HandleLogout = () =>{
        Logout()
    }


    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const picUrl = form.picUrl.value
        const password = form.password.value
        setError('')
        var containsCapitalAndSpecial = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/.test(password);
        var numericPattern = /\d/;
        if (password.length < 6) {
            setError('Password should be atllist 6 character!')
            return
        }
        if(!numericPattern.test(password)){
            setError('In Password Must be a Numeric number')
            return
        }
        if (!containsCapitalAndSpecial) {
            setError('At list one Capital latter and a special character Required!')
            return
        }
        CreateAccount(email, password)
            .then(result => {
                const user = result.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: picUrl
                })
                    .then(() => {
                        console.log('successfully profile updated!')
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
                Swal.fire(
                    'Register Success!',
                    'Your Account Successfully created! Please Login',
                    'success'
                )
                
            })
            .catch(error => {
                setError(error.message)
            })
            Logout()
            naviget('/login')
    }
    return (
        <div className="bg-sky-100 w-11/12 mx-auto mt-6 p-6 rounded-lg">
            <form onSubmit={handleRegister}>
                <div className="bg-white md:w-2/5 mx-auto p-4 rounded-lg">
                    <h1 className="text-4xl font-semibold text-center my-2">Register</h1>
                    {error &&
                        <Stack spacing={3}>
                            <Alert status='error' className="rounded-md">
                                <AlertIcon />
                                {error}
                            </Alert>
                        </Stack>
                    }
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mt-2 mb-1">Full Name</label>
                        <input type="text" placeholder="Enter Full Name" className="border-2 border-sky-100 p-2 h-12 rounded-lg" name="name" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mt-2 mb-1">Email</label>
                        <input type="email" placeholder="Enter Email" className="border-2 border-sky-100 p-2 h-12 rounded-lg" name="email" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mt-2 mb-1">Profile Pic URL</label>
                        <input type="text" placeholder="Enter Profile Pic URL" className="border-2 border-sky-100 p-2 h-12 rounded-lg" name="picUrl" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mt-2 mb-1">password</label>
                        <input type="password" placeholder="Enter Password" className="border-2 border-sky-100 p-2 h-12 rounded-lg" name="password" required />
                    </div>
                    <div className="flex flex-col">
                        <input type="submit" value='Register' className="border-2 border-sky-100  p-2 h-12 rounded-lg mt-4 hover:text-white hover:bg-sky-400" required />
                    </div>
                    <p className="my-4">Already Have Account? <Link className="text-blue-600" to='/login'>Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;