import React from "react";
import AgentMessage from "./AgentMessage";
import CallerMessage from "./CallerMessage";

function MessageItem ({message}){
    if (message.speaker === "agent"){
        return <AgentMessage message={message}/>;
    }

    return <CallerMessage message={message}/>;
}

export default MessageItem;