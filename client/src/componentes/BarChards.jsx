import { Bar } from "react-chartjs-2";
import{
    Chart as CharJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    plugins,
    scales,
    Ticks,
    BarElement

}from "chart.js";
CharJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

function BarChards(){
    const beneficos=[0,56,20,36,86,40,30,-15,25,30,12,60]
    const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
        "Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    

    const misoptions={
        responsive:true,
        animation:false,
            plugins:{
                Legend:{
                    display:false
                },scales:{
                    y:{
                        min:-25,
                        max:100
                    },
                    x:{
                        ticks:{color:'rgba(0,220,192,0.5)'}
                    }
             }
            }
         };
    const midata={
        labels:meses,
        datasets:[
            {
                label:"Beneficios",
                data:beneficos,
                backgroundColor:'rgba(0,220,192)',
            },
        ],
    };

    return (
        <Bar data={midata} options={misoptions} />
    )
}

export default BarChards