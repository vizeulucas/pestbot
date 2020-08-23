import React from 'react';
import {ReactComponent as BenefitsSvg} from '../media/undraw_Country_side_k696.svg'

const Benefits = () => {
    return (
        <div id="benefits">
            <BenefitsSvg />
            <div className="benefits-text">
                <h1>características por usar o Pest<span>Bot</span></h1>
                <ul>
                    <li>Acessibilidade e filtro preciso de informações para <span>auxiliar</span> na tomada de decisões.</li>
                    <br/>
                    <li><span>Simples</span> e <span>fácil</span> de usar.</li>
                    <br/>
                    <li>Aprendendo constantemente com o usuário e com novos dados sobre <span>pragas</span>.</li>
                    <br/>
                </ul>
            </div>
        </div>
    );
}

export default Benefits;
