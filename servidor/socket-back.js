import registrarEventosInicio from "./registrarEventos/inicio.js";
import registraEventosDocumento from "./registrarEventos/documento.js";
import io from "./servidor.js";
import registrarEventosCadastro from "./registrarEventos/cadastro.js";

io.on("connection", (socket) => {
  registrarEventosInicio(socket, io);
  registraEventosDocumento(socket, io);
  registrarEventosCadastro(socket, io);
});

