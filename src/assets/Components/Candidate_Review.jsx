

const Candidate_Review = () => {



    let data = [
        {
            "id": 1,
            "image": "https://i.ibb.co/q9rrzGS/m1.jpg",
            "name": "Alice Johnson",
            "review": "I found my dream job through this website! It made the job search process so easy and efficient. Highly recommended."
        },
        {
            "id": 2,
            "image": "https://i.ibb.co/VBScmSV/mw7.jpg",
            "name": "Bob Smith",
            "review": "The job listings on this website are up-to-date, and the search features are user-friendly. Thanks to it, I landed a fantastic job."
        },
        {
            "id": 3,
            "image": "https://i.ibb.co/2cGzc25/m3.jpg",
            "name": "Eva Martinez",
            "review": "I appreciate the personalized job recommendations I received. It helped me discover job opportunities I wouldn't have found elsewhere."
        },
        {
            "id": 4,
            "image": "https://i.ibb.co/D5LzLLH/m2.jpg",
            "name": "David Wilson",
            "review": "This website has a great selection of job listings and a simple application process. It took the stress out of job hunting."
        },
        {
            "id": 5,
            "image": "https://i.ibb.co/jfsjjT9/m4.jpg",
            "name": "Sophie Brown",
            "review": "I'm impressed by the quality of the jobs listed here. I landed a job that matches my skills perfectly."
        },
        {
            "id": 6,
            "image": "https://i.ibb.co/QKvmBvw/mw10.jpg",
            "name": "Mark Turner",
            "review": "The website's interface is intuitive, and the job alerts are incredibly useful. It saved me time in my job search."
        },
        {
            "id": 7,
            "image": "https://i.ibb.co/x1NyTmK/m5.jpg",
            "name": "Olivia Green",
            "review": "I love the job matching algorithm. It helped me find a job that aligns with my career goals and interests."
        },
        {
            "id": 8,
            "image": "https://i.ibb.co/KW2KpLd/mw11.jpg",
            "name": "Daniel White",
            "review": "This website simplified the job application process, making it a breeze to submit multiple applications in a short amount of time."
        },
        {
            "id": 9,
            "image": "https://i.ibb.co/ZJfwZp3/m6.jpg",
            "name": "Linda Parker",
            "review": "The website's user reviews of employers were valuable in my decision-making process. I found a great company to work for."
        },
        {
            "id": 10,
            "image": "https://i.ibb.co/jwcvk4g/m8.jpg",
            "name": "Michael Hall",
            "review": "I received helpful job interview tips and resources, which gave me the confidence to excel in interviews and land my ideal job."
        },
        {
            "id": 11,
            "image": "https://i.ibb.co/ftjgh46/m9.jpg",
            "name": "Grace Murphy",
            "review": "I had a fantastic experience with this job search website. It connected me with the right opportunities."
        },
        {
            "id": 12,
            "image": "https://i.ibb.co/d5NY6D8/m12.jpg",
            "name": "Peter Turner",
            "review": "The website's job matching algorithm was spot on. It understood my skills and preferences, resulting in a successful job placement."
        }

    ]



    return (
        <div className="md:mx-10 my-12 ">
            <h1 className="text-center font-bold text-[18px] md:text-3xl text-[#8C53FA]">Our Job Candidate Review</h1>

            {/* card show */}



            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  mt-10 px-2 py-2">



                {
                    data.map(info => <div key={info.id} className="card w-full  shadow-2xl flex flex-col rounded-2xl">

                        <figure ><img className="w-full h-[180px]" src={info.image} alt="Shoes" /></figure>

                        <div className="card-body">
                            <h2 className="card-title font-extrabold text-[#80107B]">{info.name}</h2>
                            <p>{info.review}</p>

                            {/* rating start */}


                            <div className="rating gap-1 flex justify-center pt-2 pb-3">

                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#8C53FA]" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#8C53FA]" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#8C53FA]" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#8C53FA]" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#8C53FA]" />

                            </div>


                            {/* rating end */}

                            
                        </div>
                    </div>)
                }



            </div>



        </div>
    );
};

export default Candidate_Review;