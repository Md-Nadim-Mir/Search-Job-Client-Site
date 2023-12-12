

import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
} from "recharts";

const Job_Success = () => {
    const data = [
        { name: "On Site", Candidate: 4200 },
        { name: "Remote", Candidate: 2800 },
        { name: "Hybrid", Candidate: 1400 },
        { name: "Part", Candidate: 3500 },
    ];

    return (
        <div className="my-12" style={{ textAlign: "center" }}>
            <h1 className="text-center font-bold text-[18px] md:text-3xl text-[#8C53FA]">Our Successful Job Placement Statistics</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-2 md:mx-12  lg:mx-10 xl:mx-0 md:pt-20 pt-10">

                <div className="flex justify-center md:mt-5">
                    <PieChart width={300} height={400}>
                        <Pie
                            dataKey="Candidate"
                            isAnimationActive={false}
                            data={data}
                            cx={150}
                            cy={100}
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                        <Tooltip />
                    </PieChart>
                </div>

                <div className="flex justify-center -mt-28 md:mt-0">
                    <BarChart
                        width={300}
                        height={300}
                        data={data}
                        margin={{
                            top: 1,
                            right: 20,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={20}
                    >
                        <XAxis
                            dataKey="name"
                            scale="point"
                            padding={{ left: 10, right: 10 }}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="Candidate" fill="#8884d8" background={{ fill: "#eee" }} />
                    </BarChart>
                </div>

            </div>
        </div>
    );
};

export default Job_Success;