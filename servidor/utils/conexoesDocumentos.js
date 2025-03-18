const conexoesDocumentos = [];   

function adicionarConexao(conexao){
    conexoesDocumentos.push(conexao);
    
}

function obterUsuariosNoDocumento(nomeDocumento){
    return conexoesDocumentos
    .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
    .map((conexao) => conexao.nomeUsuario)
}

export {adicionarConexao, obterUsuariosNoDocumento };