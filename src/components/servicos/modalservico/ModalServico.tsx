import Popup from "reactjs-popup";
import FormServico from "../formservico/FormServico";

function ModalServico() {
  return (
    <Popup
      trigger={
        <button
          className='my-4 items-center px-6 py-2 border bg-gray-300 border-gray-400 rounded-md text-gray-800 font-semibold text-xl hover:bg-gray-300 hover:text-gray-900 flex justify-center mx-auto transition-all duration-300 shadow-sm w-1/2'>
          Novo Serviço
        </button>
      }
      modal
    >
      <FormServico />
    </Popup>
  );
}

export default ModalServico;
