import "dotenv/config";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registraEventosDocumento from "./registrarEventos/documento.js";
import io from "./servidor.js";
import registrarEventosCadastro from "./registrarEventos/cadastro.js";
import registrarEventosLogin from "./registrarEventos/login.js";

io.on("connection", (socket) => {
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
  registrarEventosInicio(socket, io);
  registraEventosDocumento(socket, io);

});

