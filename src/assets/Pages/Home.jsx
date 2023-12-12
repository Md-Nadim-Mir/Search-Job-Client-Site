import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Candidate_Review from "../Components/Candidate_Review";
import Categories_Tab from "../Components/Categories_Tab";
import Job_Success from "../Components/Job_Success";


const Home = () => {

    let jobs=useLoaderData();
    // console.log(jobs)

    return (

        <div>
            <Banner></Banner>
            <Categories_Tab jobs={jobs}></Categories_Tab>
            <Candidate_Review></Candidate_Review>
            <Job_Success></Job_Success>

        </div>
    );
};

export default Home;