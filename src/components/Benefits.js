import React from 'react';
import {ReactComponent as BenefitsSvg} from '../media/undraw_Country_side_k696.svg'

const Benefits = () => {
    return (
        <div id="benefits">
            <BenefitsSvg />
            <div className="benefits-text">
                <h1>Beneficios por usar o Pest<span>Bot</span></h1>
                <ul>
                    <li>Duis est Lorem occaecat exercitation cillum culpa et sunt sint consectetur velit culpa laborum nulla.</li>
                    <br/>
                    <li>Ullamco fugiat minim minim id cillum dolor tempor.</li>
                    <br/>
                    <li>Voluptate veniam excepteur sit <span>incididunt</span> est veniam.</li>
                    <br/>
                    <li>Officia incididunt nulla ad ex exercitation consequat aute non quis do ullamco commodo veniam cupidatat.</li>
                    <br/>
                    <li>Dolore magna consequat incididunt voluptate reprehenderit ex anim enim <span>dolor</span> aute culpa enim.</li>
                </ul>
            </div>
        </div>
    );
}

export default Benefits;