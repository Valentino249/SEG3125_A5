import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Legend, Line, BarChart, CartesianGrid, Bar } from "recharts";
import { useState } from "react";
import {useTranslation} from 'react-i18next'
import'../i18n'




function Body() {
    const {t} = useTranslation()

    const data_stewing = [
        { month: t('jan'), value: 22.79},
        { month: t('feb'), value: 23.90},
        { month: t('mar'), value: 21.61},
        { month: t('apr'), value: 22.51},
        { month: t('may'), value: 23.86}
    ]

    const data_striploin = [
        { month: t('jan'), value: 35.27},
        { month: t('feb'), value: 35.56},
        { month: t('mar'), value: 40.09},
        { month: t('apr'), value: 42.42},
        { month: t('may'), value: 35.30}
    ]

    const data_top_sirloin = [
        { month: t('jan'), value: 28.95},
        { month: t('feb'), value: 24.87},
        { month: t('mar'), value: 29.22},
        { month: t('apr'), value: 28.94},
        { month: t('may'), value: 30.60}
    ]
    const data_rib = [
        { month: t('jan'), value: 39.33},
        { month: t('feb'), value: 37.70},
        { month: t('mar'), value: 35.69},
        { month: t('apr'), value: 30.56},
        { month: t('may'), value: 31.14}
    ]

const data_jan = [
    { cut: t('stewing'), value: 22.79},
    { cut: t('striploin'), value: 35.27},
    { cut: t('top_sirloin'), value: 28.95},
    { cut: t('rib'), value: 39.33},
]

const data_feb = [
    { cut: t('stewing'), value: 23.90},
    { cut: t('striploin'), value: 35.56},
    { cut: t('top_sirloin'), value: 24.87},
    { cut: t('rib'), value: 37.70},
]

const data_mar = [
    { cut: t('stewing'), value: 21.61},
    { cut: t('striploin'), value: 40.09},
    { cut: t('top_sirloin'), value: 29.22},
    { cut: t('rib'), value: 35.69},
]

const data_april = [
    { cut: t('stewing'), value: 22.51},
    { cut: t('striploin'), value: 42.42},
    { cut: t('top_sirloin'), value: 28.94},
    { cut: t('rib'), value: 30.56},
]

const data_may = [
    { cut: t('stewing'), value: 23.86},
    { cut: t('striploin'), value: 35.30},
    { cut: t('top_sirloin'), value: 30.60},
    { cut: t('rib'), value: 31.14},
]

    const [dataSelection, setDataSelection] = useState(data_stewing);

    const [data2Selection, setData2Selection] = useState(data_jan);

    const handleSubmit = (e:any) => {
        console.log(e)
      switch (e) {
        case "stewing":
            console.log("1")
            setDataSelection(data_stewing)
            break;
        case "striploin":
            console.log("2")
            setDataSelection(data_striploin)
            break;
        case "top sirloin":
            console.log("3")
            setDataSelection(data_top_sirloin)
            break;
        case "rib":
            console.log("4")
            setDataSelection(data_rib)
            break;
      }
   
  }
    const handleSubmit2 = (e:any) => {
        console.log(e)
        switch (e) {
        case "jan":
            console.log("1")
            setData2Selection(data_jan)
            break;
        case "feb":
            console.log("2")
            setData2Selection(data_feb)
            break;
        case t('mar'):
            console.log("3")
            setData2Selection(data_mar)
            break;
        case t('apr'):
            console.log("4")
            setData2Selection(data_april)
            break;
        case t('may'):
            console.log("5")
            setData2Selection(data_may)
            break;
      }
    }
    return (
        <div>
            <div className="relative h-full lg:h-screen">

                <div className="mt-5 mb-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <p className="text-xl mb-4">{t('data_1_title')}</p>
                        <ResponsiveContainer width={600} height={600}>
                            <LineChart data={dataSelection}>
                                <XAxis dataKey="month"/>
                                <YAxis />
                                <Tooltip/>
                                <Legend/>
                                <Line type="monotone" dataKey="value" stroke="#8884d8"/>
                            </LineChart>
                        </ResponsiveContainer>
                        
                        <select className="text-center bg-blue-100" name="options" id="options" onChange={e => handleSubmit(e.target.value)}>
                            <option value="stewing">{t('stewing')}</option>
                            <option value="striploin">{t('striploin')}</option>
                            <option value="top sirloin">{t('top_sirloin')}</option>
                            <option value="rib">{t('rib')}</option>
                        </select>
                        
                        
                    </div>
                    
                    <div className="flex flex-col">
                        <p className="text-xl mb-4">{t('data_2_title')}</p>
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

                        <select className="text-center bg-blue-100" name="options2" id="options" onChange={e => handleSubmit2(e.target.value)}>
                            <option value="jan">{t('jan')}</option>
                            <option value="feb">{t('feb')}</option>
                            <option value="mar">{t('mar')}</option>
                            <option value="apr">{t('apr')}</option>
                            <option value="may">{t('may')}</option>
                        </select>
                    </div>
                
                </div>
                
                
            </div>
        </div>

    )
}

export default Body