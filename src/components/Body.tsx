import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

interface HeroProps {
  onNavigate: (page: string) => void;
}

const data = [
    { name: "John", value: 400},
    { name: "Joe", value: 500},
    { name: "Jill", value: 100},
    { name: "June", value: 600}
]

function Body({ onNavigate }: HeroProps) {
    return (
        <div>
            <div className="relative h-screen">
                <ResponsiveContainer width={600} height={300}>
                        <LineChart data={data}>
                            <XAxis dataKey="name"/>
                            <YAxis />
                            <Tooltip/>
                            <Legend/>
                            <Line type="monotone" dataKey="value" stroke="#8884d8"/>
                        </LineChart>
                    </ResponsiveContainer>
                    
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* <h1 className="text-5xl lg:text-9xl text-black bg-white rounded px-5 font-bold">BOTTOM TEXT</h1> */}
                    
                </div>
            </div>
        </div>

    )
}

export default Body