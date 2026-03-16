import React from "react";

function TimeStamp({time}){

    const formatTime = (time) => {
        return time;
    };

    return (
        <div className="timeStamp">
            {formatTime(time)}
        </div>
    );
}

export default TimeStamp;