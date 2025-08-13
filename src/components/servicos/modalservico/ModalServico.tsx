import Popup from "reactjs-popup";
import FormServico from "../formservico/FormServico";

function ModalServico() {
  return (
    <Popup
      trigger={
        <button
          className='border rounded px-4 py-2 bg-sky-900 text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-sky-800 cursor-pointer'>
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
