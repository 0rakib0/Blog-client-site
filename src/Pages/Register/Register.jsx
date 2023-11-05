
import { updateProfile } from "firebase/auth";
import { authContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { useContext } from "react";
import { Link } from "react-router-dom";


const Register = () => {

    const { CreateAccount } = useContext(authContext)

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const picUrl = form.picUrl.value
        const password = form.password.value
        console.log(name, email, picUrl, password)
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
                    'Your Account Successfully account created!',
                    'success'
                )
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="bg-sky-100 w-11/12 mx-auto mt-6 p-6 rounded-lg">
            <form onSubmit={handleRegister}>
                <div className="bg-white md:w-2/5 mx-auto p-4 rounded-lg">
                    <h1 className="text-4xl font-semibold text-center my-2">Register</h1>
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
                        <input type="submit" value='Register' className="border-2 border-sky-100 p-2 h-12 rounded-lg mt-4 hover:bg-sky-100" required />
                    </div>
                    <p className="my-4">Already Have Account? <Link className="text-blue-600" to='/login'>Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;