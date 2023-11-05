

const Banner = () => {
    return (
        <div className="grid md:grid-cols-2 gap-4 ">
            <div className="md:h-[450px] overflow-hidden relative">
                <img src="https://assets.entrepreneur.com/content/3x2/2000/20190118195537-GettyImages-970161414.jpeg" className="w-full h-full transition-transform transform hover:scale-110" alt="" />
                <div className="bg-gradient-to-t from-gray-900 w-full text-sky-100 absolute bottom-0 h-44">
                    <h2 className=" font-bold text-4xl w-3/4 uppercase mx-auto">Focus On Lernign and Enjoy Future</h2>
                    <div className="flex justify-center">
                        <button className="bg-sky-400 p-4 rounded-md mt-4 hover:bg-transparent border-2 border-sky-400">JOIN FOR LERN</button>
                    </div>
                </div>
            </div>
            <div className="h-[430px]">
                <div className="h-1/2 mb-4 overflow-hidden relative">
                    <img src="https://assets-global.website-files.com/56e9debf633486e330198479/57b6723c0c7bdb62381c5e86_top-10-travel-bloggers-you-should-be-follow-danflyingsolo-danielclarke-lonelyplanet-skyscanner.jpg" alt="" className="w-full h-full transition-transform transform hover:scale-110" />
                    <div className="bg-gradient-to-r from-gray-900 w-1/2 h-full text-white absolute bottom-0">
                        <h2 className=" ml-6 text-4xl font-bold mt-12 uppercase mx-auto">a Beutiful Traveling With Family</h2>
                    </div>
                </div>
                <div className="h-1/2 flex gap-3">
                    <div className="overflow-hidden">
                        <img src="https://www.escape2explore.com/blog/wp-content/uploads/2015/12/blogging-1.jpg" alt="" className="w-full h-full transition-transform transform hover:scale-110" />
                    </div>
                    <div className="overflow-hidden">
                        <img src="https://cdn.uniacco.com/blog/wp-content/uploads/2021/06/03065324/guestpost2.jpg" alt="" className="w-full h-full transition-transform transform hover:scale-110" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;