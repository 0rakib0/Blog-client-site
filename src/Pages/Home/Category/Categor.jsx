import { useEffect, useState } from "react";
import Category2 from "./Category2";
import { useQuery } from "react-query";
import ContentLoader from "react-content-loader";

const Categor = () => {

    const { data: category, isLoading } = useQuery('category', async () => {
        const response = await fetch('https://blog-zeta-seven-90.vercel.app/category');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });


    if (isLoading) {
        return <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
            <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
            <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
            <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
            <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
            <circle cx="20" cy="20" r="20" />
        </ContentLoader>
    }


    return (
        <div>
            <h1 className="text-4xl my-4 font-semibold">Tranding Category</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {
                    category?.map(cat => <Category2 key={cat._id} category={cat}></Category2>)
                }
            </div>
        </div>
    );
};

export default Categor;