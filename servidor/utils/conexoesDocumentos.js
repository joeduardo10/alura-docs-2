const conexoesDocumentos = [];   


function adicionarConexao(conexao){
    conexoesDocumentos.push(conexao);
    
}

function obterUsuariosNoDocumento(nomeDocumento){
    return conexoesDocumentos
    .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
    .map((conexao) => conexao.nomeUsuario)
}

function removerConexao(nomeDocumento,nomeUsuario){
    const indice = conexoesDocumentos.findIndex((conexao)=>{
        return (conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario);
    });
    if(indice !== -1){
        conexoesDocumentos.splice(indice,1);
    }
    console.log(conexoesDocumentos);  
}

export {adicionarConexao, obterUsuariosNoDocumento, removerConexao};