const socket = io();

function emitirAutenticarUsuario(dados){
    socket.emit("autenticar_usuario", dados);
}

socket.on("autenticacao_sucesso", () => {
    {alert("Autenticado com sucesso!")
        window.location.href = "/";
    };
});
socket.on("autenticacao_falha", () => {
    alert("Usuário ou senha inválidos!");
});
socket.on("usuario_nao_encontrado", () => {
    alert("Usuário não encontrado!");
});

export {emitirAutenticarUsuario};