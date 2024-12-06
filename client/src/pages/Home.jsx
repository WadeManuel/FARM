
import Header from "../componentes/Header";
import LinesChards from "../componentes/LinesChards";
import BarChards from "../componentes/BarChards";
import PieChars from "../componentes/PieChars";
import Footer from "../componentes/Footer";


function Home() {
  return (
    <section>
      <Header></Header>
        <div className="container-Graficos">
          <h1>Gráficas</h1>
          <div className="container-1">
                <div className="box-card">
                    <h3>Gráfica Lineal</h3>
                    <LinesChards></LinesChards>
                </div>
                <div className="box-card">
                    <h3>Gráfica Baras</h3>
                    <BarChards></BarChards>
                </div>
                <div className="box-card">
                    <h3>Gráfica Circular</h3>
                    <PieChars></PieChars>
                </div>
               
          </div>
            

        </div>

        <Footer></Footer>
    </section>
  
  )
}

export default Home