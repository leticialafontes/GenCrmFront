import Popup from "reactjs-popup";
import FormServico from "../formservico/FormServico";

function ModalServico() {
  return (
    <>
      <Popup
        trigger={
          <button className="border rounded px-4 py-2 hover:bg-white hover:text-indigo-800">
            Novo ServiÇo
          </button>
        }
        modal
      >
        <FormServico />
      </Popup>
    </>
  );
}

export default ModalServico;