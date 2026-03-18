import React from "react";
import callSummaryIcon from "../../assets/callSummary.png";
import  "../../styling/transcription/transcription.css";

function CallSummaryHeader() {
    return (
        <div className="call-summary-header">
            <img src={callSummaryIcon} alt="Call Summary" />
            <span className="call-summary-title">Call Summary</span>
        </div>
    );
}

export default CallSummaryHeader;