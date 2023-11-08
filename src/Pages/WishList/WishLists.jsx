import { useContext, useEffect, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import WishList from "./WishList";
import Swal from 'sweetalert2'

const WishLists = () => {
    const { user } = useContext(authContext)
    const [wistList, setWishList] = useState([])


    console.log(user.email)

    const habndleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/deleteWishlist/${id}`, {
                    method: 'Delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Blog Successfully Remove",
                                text: "Blog Successfully remove from your blog list.",
                                icon: "success"
                            });
                        }

                    })
            }
        });
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/wishlists/${user.email}`)
            .then(res => setWishList(res.data))
    }, [])
    return (
        <div className="w-11/12">
            <h1 className="text-2xl font-bold my-6 text-center">Your Favourit Blog List</h1>
            <div className="w-11/12 grid mx-auto gap-6 my-6 md:grid-cols-2">
                {
                    wistList.map(wishList => <WishList key={wishList._id} habndleDelete={habndleDelete} data={wishList}></WishList>)
                }
            </div>
        </div>
    )
}

export default WishLists;