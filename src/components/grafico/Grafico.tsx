
import BarChart from "./barchart/BarChart"
import PiesChart from "./pieschart/PiesChart"



function Grafico() {
  return (
    <>
    <div className="flex items-center justify-center">
        <div className="flex ">
            <BarChart />
        </div>
        <div className="flex w-full">
            <PiesChart />
        </div>
        <div className="flex w-full">
            <PiesChart />
        </div>
    </div>
    </>
  )
}

export default Grafico