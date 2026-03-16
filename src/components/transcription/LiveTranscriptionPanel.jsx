import { useState } from "react";
import useAutoScroll from "../../hooks/useAutoScroll.js";
import chevronDoubleUp from "../../assets/chevron-double-up.png";
import useMessages from "../../hooks/useMessages";
import { transcriptStream } from "../../config/transcriptConfig.js";
import MessageItem from "./MessageItem";
import "./transcription.css";

export default function LiveTranscriptionPanel({ callState }) {
  const messages = useMessages(transcriptStream, callState);
  const [collasped, setCollapsed] = useState(false);
  const scrollRef = useAutoScroll(messages);

  return (
    <div className="transcription-panel">
      <div className="transcription-header">
        <span>
          {callState === "live" ? "Live Transcription" : "Transcription"}
        </span>

        {callState !== "live" && (
          <button
            className="collapse-btn"
            onClick={() => setCollapsed(!collasped)}
          >
            <img
              src={chevronDoubleUp}
              alt="collapse"
              className={collasped ? "chevron rotate" : "chevron"}
            />
          </button>
        )}
      </div>
      {(collasped === "live" || !collasped) && (
        <div className="transcription-body" ref={scrollRef} role="log" aria-live="polite" aria-relevant="additions">
          {messages.map((msg, index) => (
            <MessageItem key={index} message={msg} />
          ))}
        </div>
      )}
    </div>
  );
}
