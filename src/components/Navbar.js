import React from 'react';

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

const Navbar = () => {
    return (
        <div className="navbar-pestbot">
            <h1 className="logo"><a href="#call-to-action">Pest<span>Bot</span></a></h1>
            <ul>
                <li><a href="#explain-bot">Como Funciona</a></li>
                <li><a href="#benefits">Beneficios</a></li>
                <li><a href="#" onClick={watson}>ChatBot</a></li>
            </ul>
        </div>
    );
}

export default Navbar;