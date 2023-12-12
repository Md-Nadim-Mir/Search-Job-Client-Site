
const Banner = () => {

    return (

        <div className='px-2 md:px-10 py-5 '>

            <div className="hero h-[75vh]" style={{ backgroundImage: 'url(https://picjumbo.com/wp-content/uploads/searching-for-a-new-job-2210x1473.jpg' }}>
                <div className="hero-overlay bg-opacity-60 "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-[40px] font-bold text-[#ffffff]">Welcome To Search Job</h1>
                        <p className="mb-5 text-[#f8f7f7] font-bold text-[17px]">Unlock Your Future Career! Explore Thousands of Opportunities with Search Job. Your Dream Job Awaits.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-2 ">

                            <input type="text" name="search" placeholder="search by category" className="p-3 rounded-xl text-center text-black font-semibold md:col-span-2" id="" />
                            <div>
                                <button type="submit" className="btn  text-[white] font-bold bg-[#8C53FA] hover:bg-[#8C53FA]">Search</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>



        </div>

    );
};

export default Banner;