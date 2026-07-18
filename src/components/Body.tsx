import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Legend, Line, BarChart, CartesianGrid, Bar } from "recharts";
import { useState } from "react";
import {useTranslation} from 'react-i18next'
import'../i18n'

interface HeroProps {
  onNavigate: (page: string) => void;
}



function Body({ onNavigate }: HeroProps) {

    const data_stewing = [
        { month: "January", value: 22.79},
        { month: "February", value: 23.90},
        { month: "March", value: 21.61},
        { month: "April", value: 22.51},
        { month: "May", value: 23.86}
    ]

    const data_striploin = [
        { month: "January", value: 35.27},
        { month: "February", value: 35.56},
        { month: "March", value: 40.09},
        { month: "April", value: 42.42},
        { month: "May", value: 35.30}
    ]

    const data_top_sirloin = [
        { month: "January", value: 28.95},
        { month: "February", value: 24.87},
        { month: "March", value: 29.22},
        { month: "April", value: 28.94},
        { month: "May", value: 30.60}
    ]
    const data_rib = [
        { month: "January", value: 39.33},
        { month: "February", value: 37.70},
        { month: "March", value: 35.69},
        { month: "April", value: 30.56},
        { month: "May", value: 31.14}
    ]

const data_jan = [
    { cut: "Beef stewing", value: 22.79},
    { cut: "Beef striploin", value: 35.27},
    { cut: "Beef top sirloin", value: 28.95},
    { cut: "Beef rib", value: 39.33},
]

const data_feb = [
    { cut: "Beef stewing", value: 23.90},
    { cut: "Beef striploin", value: 35.56},
    { cut: "Beef top sirloin", value: 24.87},
    { cut: "Beef rib", value: 37.70},
]

const data_mar = [
    { cut: "Beef stewing", value: 21.61},
    { cut: "Beef striploin", value: 40.09},
    { cut: "Beef top sirloin", value: 29.22},
    { cut: "Beef rib", value: 35.69},
]

const data_april = [
    { cut: "Beef stewing", value: 22.51},
    { cut: "Beef striploin", value: 42.42},
    { cut: "Beef top sirloin", value: 28.94},
    { cut: "Beef rib", value: 30.56},
]

const data_may = [
    { cut: "Beef stewing", value: 23.86},
    { cut: "Beef striploin", value: 35.30},
    { cut: "Beef top sirloin", value: 30.60},
    { cut: "Beef rib", value: 31.14},
]

    const [dataSelection, setDataSelection] = useState(data_stewing);
    const [dataName, setDataName] = useState("Stewing")

    const [data2Selection, setData2Selection] = useState(data_jan);
    const [dataMonth, setDataMonth] = useState("January")

    const handleSubmit = (e:any) => {
        console.log(e)
      switch (e) {
        case "stewing":
            console.log("1")
            setDataSelection(data_stewing)
            setDataName("Stewing")
            break;
        case "striploin":
            console.log("2")
            setDataSelection(data_striploin)
            setDataName("Striploin")
            break;
        case "top sirloin":
            console.log("3")
            setDataSelection(data_top_sirloin)
            setDataName("Top Sirloin")
            break;
        case "rib":
            console.log("4")
            setDataSelection(data_rib)
            setDataName("Rib")
            break;
      }
   
  }
    const handleSubmit2 = (e:any) => {
        console.log(e)
        switch (e) {
        case "jan":
            console.log("1")
            setData2Selection(data_jan)
            setDataMonth("January")
            break;
        case "feb":
            console.log("2")
            setData2Selection(data_feb)
            setDataMonth("February")
            break;
        case "march":
            console.log("3")
            setData2Selection(data_mar)
            setDataMonth("March")
            break;
        case "april":
            console.log("4")
            setData2Selection(data_april)
            setDataMonth("April")
            break;
        case "may":
            console.log("5")
            setData2Selection(data_may)
            setDataMonth("May")
            break;
      }
    }
    return (
        <div>
            <div className="relative h-full">

                <div className="mt-5 mb-5 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <p className="text-xl mb-4">Price of Beef {dataName} Cuts (per kg) First Half of 2026</p>
                        <ResponsiveContainer width={600} height={600}>
                            <LineChart data={dataSelection}>
                                <XAxis dataKey="month"/>
                                <YAxis />
                                <Tooltip/>
                                <Legend/>
                                <Line type="monotone" dataKey="value" stroke="#8884d8"/>
                            </LineChart>
                        </ResponsiveContainer>
                        
                        <select className="text-center" name="options" id="options" onChange={e => handleSubmit(e.target.value)}>
                            <option value="stewing">Stewing</option>
                            <option value="striploin">Striploin</option>
                            <option value="top sirloin">Top Sirloin</option>
                            <option value="rib">Rib</option>
                        </select>
                        
                        
                    </div>
                    
                    <div className="flex flex-col">
                        <p className="text-xl mb-4">Price of Various Beef Cuts (per kg) {dataMonth} 2026</p>
                        <ResponsiveContainer width={600} height={600}>
                            <BarChart
                                style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                                responsive
                                data={data2Selection}
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

                        <select className="text-center" name="options2" id="options" onChange={e => handleSubmit2(e.target.value)}>
                            <option value="jan">January</option>
                            <option value="feb">February</option>
                            <option value="march">March</option>
                            <option value="april">April</option>
                            <option value="may">May</option>
                        </select>
                    </div>
                
                </div>
                
                
            </div>
        </div>

    )
}

export default Body