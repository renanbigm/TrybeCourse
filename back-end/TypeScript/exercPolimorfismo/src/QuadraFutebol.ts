import Quadra from "./Quadra";
import IFutebol from "./interfaces/IFutebol";
import IAgenda from "./interfaces/IAgenda";
import normasDeUso from "./normas/normasDeUso";

export default class QuadraFutebol extends Quadra {
  public futebolData: IFutebol = normasDeUso.futebol;
  
  public reservar<IFutebol>(date: Date): IAgenda<IFutebol> {
  
    const protocolo = (Math.random() + 1).toString(30).substring(3);

    return {
      protocolo,
      data: date,
      regras: this.futebolData as IFutebol,
    }
  }
}