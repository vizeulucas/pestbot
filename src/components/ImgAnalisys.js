import React from 'react';

const ImgAnalisys = () => {
    return(
        <div id="img-analisys">
            <h1>Identifique <span>pragas</span> apenas com uma foto delas!</h1>
            <h2>Nos envie uma foto da praga e espere alguns segundos para receber o resultado da analise.</h2>
            <form>
            <label for='selecao-arquivo'>Selecionar Imagem da Praga</label>
            <input id='selecao-arquivo' type='file'/>
            <input type="submit"/>
            </form>
        </div>
    );
}

export default ImgAnalisys;