import type Categoria from "./Categoria";
import type Usuario from "./Usuario";

export default interface Servico {
  id: number;
  nome: string;
  descricao: string;
  valor: number;
  status: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}