import React from "react";
import { Chart as CharJS,Tooltip,Legend ,ArcElement} from "chart.js";
import { Pie } from "react-chartjs-2";

CharJS.register(ArcElement,Tooltip,Legend);

function PieChars(){
    const options={
        responsibe:true,
        maintainAspectRatio:false,
    };
    const midata={
        labels:['Jamon','Carne','Pollo','Vino','Turron'],
        datasets:[
            {
                label:'Popularidad en Fin año',
                data:[25,20,30,15,10],
                backgroundColor:[
                    'rgba(255,99,132,0.2)',
                    'rgba(255,289,86,0.2)',
                    'rgba(54,162,235,0.2)',
                    'rgba(75,192,192,0.2)',
                    'rgba(153,182,252,0.2)',
                ],
                borderColor:[
                    'rgba(255,99,132,1)',
                    'rgba(255,289,86,1)',
                    'rgba(54,162,235,1)',
                    'rgba(75,192,192,1)',
                    'rgba(153,182,252,1)',
                ],
                borderWidth:1,
            },
        ],
    };

    return (
        <Pie data={midata} options={options} />
    )
}

export default PieChars