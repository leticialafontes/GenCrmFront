import type Servico from "./Servico";

export default interface Tema {
  id: number;
  nome: string;
  servico?: Servico[] | null;
}