import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const quadraDeFutebol = new QuadraFutebol();
const clube = new Clube();

clube.adicionarQuadra(quadraDeFutebol);

const reservar = quadraDeFutebol.reservar(new Date());

console.log(reservar)
