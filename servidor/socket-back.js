import registrarEventosInicio from "./registrarEventos/registrarEventosInicio.js";
import registraEventosDocumento from "./registrarEventos/registrarEventosDocumento.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
  registrarEventosInicio(socket, io);
  registraEventosDocumento(socket, io);
});
