import { useLoaderData } from "react-router-dom";
import DataTable from 'react-data-table-component';

const FeatureBlog = () => {
    const Blogs = useLoaderData()
    console.log(Blogs)
    const columns = [
        {
            name:'Number',
            selector: (row, index) => {return index + 1}
        },
        {
            name: 'Blog Title',
            selector: row => row.title,
        },
        {
            name: 'Blog Owner',
            selector: row => row.userName,
        },
        {
            name: 'Blog Owner Profile',
            selector: row => <img width={50} className="rounded-full" height={50} src={row.userPic} />,
        },
    ];



    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-2xl text-center font-bold my-4">Featured Blogs</h1>

            <DataTable
                columns={columns}
                data={Blogs}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="400px"
                responsive
                selectableRows
            />
        </div>
    );
};

export default FeatureBlog;