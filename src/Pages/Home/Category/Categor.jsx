import { useEffect, useState } from "react";
import Category2 from "./Category2";

const Categor = () => {

    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div>
            <h1 className="text-4xl my-4 font-semibold">Tranding Category</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {
                    category.map(cat => <Category2 key={cat._id} category={cat}></Category2>)
                }
            </div>
        </div>
    );
};

export default Categor;