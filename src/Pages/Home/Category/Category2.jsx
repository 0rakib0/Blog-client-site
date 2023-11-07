import PropTypes from 'prop-types';

const Category2 = ({ category }) => {
    const { name, image } = category
    return (
        <div className="mb-4 overflow-hidden relative">
            <img src={image} alt="" className="w-full h-[200px] transition-transform transform hover:scale-110" />
            <div className="bg-gradient-to-t from-gray-900 h-1/2 w-full text-white absolute bottom-0">
                <h2 className="text-center text-2xl font-bold mt-6 uppercase mx-auto">{name}</h2>
            </div>
        </div>
    );
};


Category2.propTypes  = {
    category: PropTypes.object
}

export default Category2;