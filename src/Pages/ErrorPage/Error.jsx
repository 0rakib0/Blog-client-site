import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="w-94">
            <img src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="" className="mx-auto mt-12 w-[40%]" />
            <div className="flex justify-center">
                <Link to='/'><button className="bg-sky-400 text-white p-2 mt-6">BACK TO HOME</button></Link>
            </div>
        </div>
    )
}

export default Error