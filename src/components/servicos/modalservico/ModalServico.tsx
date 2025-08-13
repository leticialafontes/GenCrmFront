import Popup from "reactjs-popup";
import FormServico from "../formservico/FormServico";

function ModalServico() {
  return (
    <Popup
      trigger={
        <button
          className='border rounded px-4 py-2 bg-sky-800 text-white hover:bg-sky-600 cursor-pointer'>
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
