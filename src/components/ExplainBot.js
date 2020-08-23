import React from 'react';
import {ReactComponent as ExplainSvg} from '../media/undraw_texting_k35o.svg'

const ExplainBot = () => {
    return (
        <div id="explain-bot">
            <div className="explain-text">
                <h1>Como o Pest<span>Bot</span> Funciona</h1>
                <p>O PestBot é uma inteligência articial que utiliza recursos do IBM Watson Studio. Com isso, utilizamos a inteligência artificial da melhor forma possível e com conhecimento em pragas. Dessa maneira, ela se adapta, aprende com as perguntas e gera respostas  em tempo real, entregando informações úteis para o agricultor sobre pragas e métodos de controle. Basicamente, ensinamos ele a pensar  utilizando dados extraídos de livros e pesquisas, mantendo uma base atualizada e com novos aprendizados a cada nova interação.</p>    
            </div>
            <ExplainSvg />
        </div>
    );
 
}

export default ExplainBot;
