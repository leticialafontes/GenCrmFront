import Popup from "reactjs-popup";
import FormServico from "../formservico/FormServico";

function ModalServico() {
  return (
    <Popup
      trigger={
        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                     focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                     text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
                     dark:focus:ring-blue-800"
          type="button"
        >
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
