import BarChart from "./barchart/BarChart";
import LineChart from "./linechart/LineChart";
import PiesChart from "./pieschart/PiesChart";

function Grafico() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-between m-8 ">
        <div className="w-md">
          <div className="p-1">
            <h2>Contato</h2>
            <BarChart />
          </div>
          <div className="p-1">
            <h2>Contratos</h2>
            <LineChart />
          </div>
        </div>
        <div className="w-full">
          <h2>Serivços prestados</h2>
          <PiesChart />
        </div>
      </div>
    </>
  );
}

export default Grafico;
