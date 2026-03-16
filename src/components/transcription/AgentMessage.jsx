import React from "react";
import Avatar from "./Avatar";
import TimeStamp from "./TimeStamp";

function AgentMessage({ message }) {
  return (
    <div className="message-row agent" role="listitem" aria-label={`${message.speaker} at ${message.time}: ${message.text}`}>
      <Avatar type="agent" />
      <div className="message-column">
        <div className="agent-bubble">
          {message.text}
          
        </div>
        <TimeStamp time={message.time} />
      </div>
    </div>
  );
}

export default AgentMessage;
