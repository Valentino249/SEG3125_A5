import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Legend, Line, BarChart, CartesianGrid, Bar } from "recharts";

interface HeroProps {
  onNavigate: (page: string) => void;
}

const data = [
    { month: "January", value: 22.79},
    { month: "February", value: 23.90},
    { month: "March", value: 21.61},
    { month: "April", value: 22.51},
    { month: "May", value: 23.86}
]

const data_2 = [
    { cut: "Beef stewing", value: 22.79},
    { cut: "Beef striploin", value: 35.27},
    { cut: "Beef top sirloin", value: 28.95},
    { cut: "Beef rib", value: 39.33},
]

function Body({ onNavigate }: HeroProps) {
    return (
        <div>
            <div className="relative h-screen ">

                <div className="mt-5 mb-5 grid grid-cols-2 gap-10">
                    <div className="flex flex-col">
                        <p>Price of Beef Stewing Cuts (per kg) First Half of 2026</p>
                        <ResponsiveContainer width={600} height={300}>
                            <LineChart data={data}>
                                <XAxis dataKey="month"/>
                                <YAxis />
                                <Tooltip/>
                                <Legend/>
                                <Line type="monotone" dataKey="value" stroke="#8884d8"/>
                            </LineChart>
                        </ResponsiveContainer>

                    </div>
                    
                    <div className="flex flex-col">
                        <p>Price of Various Beef Cuts (per kg) January 2026</p>
                        <ResponsiveContainer width={600} height={300}>
                            <BarChart
                                style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                                responsive
                                data={data_2}
                                margin={{
                                    top: 5,
                                    right: 0,
                                    left: 0,
                                    bottom: 5,
                                }}
                                >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="cut" />
                                <YAxis width="auto" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
                                
                                
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                
                </div>
                <div className="grid grid-cols-3">
                    <ResponsiveContainer width={300} height={300}>
                        <LineChart data={data}>
                            <XAxis dataKey="name"/>
                            <YAxis />
                            <Tooltip/>
                            <Legend/>
                            <Line type="monotone" dataKey="value" stroke="#8884d8"/>
                        </LineChart>
                    </ResponsiveContainer>

                    <ResponsiveContainer width={300} height={300}>
                            <LineChart data={data}>
                                <XAxis dataKey="name"/>
                                <YAxis />
                                <Tooltip/>
                                <Legend/>
                                <Line type="monotone" dataKey="value" stroke="#8884d8"/>
                            </LineChart>
                        </ResponsiveContainer>
                        <ResponsiveContainer width={300} height={300}>
                            <LineChart data={data}>
                                <XAxis dataKey="name"/>
                                <YAxis />
                                <Tooltip/>
                                <Legend/>
                                <Line type="monotone" dataKey="value" stroke="#8884d8"/>
                            </LineChart>
                        </ResponsiveContainer>
                </div>
                
            </div>
        </div>

    )
}

export default Body