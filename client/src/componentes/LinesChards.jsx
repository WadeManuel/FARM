import { Line } from "react-chartjs-2";
import axios from "axios";
import { useEffect,useState } from "react";
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
    scales,
    Ticks,
}from "chart.js";

CharJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

function LinesChards(){

    const [lista,setLista]=useState([]);

    useEffect(()=>{
        async function fechLista(){
          const res=await axios.get('http://127.0.0.1:8000/array')
                setLista(res.data)
                console.log(res.data)
        }
        fechLista()  
    },[]);
   

    const dineroGanado=lista
    const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio",
        "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

    const midata={
        labels:meses,
        datasets:[//Cada una de las lines del gráfico
            {
                label:"Dinero Ganado",
                data:dineroGanado,
                tension:0.5,
                fill:true,
                borderColor:'rgb(255,99,132)',
                backgroundColor:'rgba(255,99,132,0.5)',
                pointRadius:5,
                pointBorderColor:'rgba(255,99,132)',
                pointBackgroundColor:'rgba(255,99,132)',
            },
        ],
    };

    const misoptions={
       
    };

    return (
        <Line data={midata} options={misoptions}/>
    )
}

export default  LinesChards
   
    

 
