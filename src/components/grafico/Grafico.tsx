import BarChart from "./barchart/BarChart";
import LineChart from "./linechart/LineChart";
import PiesChart from "./pieschart/PiesChart";

function Grafico() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 col-auto items-center m-8 ">
        <div className="w-2xl justify-center ms-5">
          <div className="p-1">
            <h1>Contato</h1>
            <BarChart />
          </div>
          <div className="p-1">
            <h1>Contratos</h1>
            <LineChart />
          </div>
        </div>
        <div className="w-2xl p-3 ms-7">
          <h1>Serviços prestados</h1>
          <PiesChart />
        </div>
      </div>
    </>
  );
}

export default Grafico;
