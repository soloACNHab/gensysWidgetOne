import React from "react";
import Avatar from "./Avatar";
import Timestamp from "./TimeStamp";

function CallerMessage({ message }) {
  return (
    <div className="message-row caller">
      <div className="message-column caller-column">
        <div className="caller-bubble">
          {message.text}
        </div>        
          <Timestamp time={message.time} />
      </div>
      <Avatar type="caller" />
    </div>
  );
}

export default CallerMessage;
