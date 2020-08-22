import React from 'react';
import { ReactComponent as CallSvg } from '../media/undraw_flowers_vx06.svg';

const watson = () => {
    window.watsonAssistantChatOptions = {
        integrationID: "20b9f1a5-27fd-4f76-9524-ae8ecdcd8ee8", // The ID of this integration.
        region: "us-south", // The region your integration is hosted in.
        openChatByDefault: true,
        serviceInstanceID: "4dbe5db4-cf25-4533-9d72-0bf130b54754", // The ID of your service instance.
        onLoad: function(instance) { instance.render(); }
    };
    setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
    });
}

const CallToAction = () => {
    return (
        <div id="call-to-action">
            <CallSvg />
            <div className="call-box">
                <h1>Pest<span>Bot</span></h1>
                <h2>Elit sint sint <span>dolore</span> exercitation tempor ea.<br/> 
                Tempor consectetur quis fugiat in <span>cupidatat</span> irure.</h2>
                <button className="btn-call" onClick={watson}>Testar Agora</button>
            </div>
        </div>
    );
}

export default CallToAction;