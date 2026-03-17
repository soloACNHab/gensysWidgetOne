import { useState } from "react";
import useAutoScroll from "../../hooks/useAutoScroll.js";
import useMessages from "../../hooks/useMessages";
import { transcriptStream } from "../../config/transcriptConfig.js";
import MessageItem from "./MessageItem";
import chevronDoubleUp from "../../assets/chevron-double-up.png";
import "./transcription.css";
export default function TranscriptionSection({ callState }) {
  const messages = useMessages(transcriptStream, callState);
  const [collapsed, setCollapsed] = useState(false);
  const scrollRef = useAutoScroll(messages);
  const isLive = callState === "live";
  return (
    <div className="transcription-panel">
      {" "}
      <div className="transcription-header">
        {" "}
        <span>{isLive ? "Live Transcription" : "Transcription"}</span>
        {!isLive && (
          <button
            className="collapse-btn"
            onClick={() => setCollapsed(!collapsed)}
          >
            {" "}
            <img
              src={chevronDoubleUp}
              alt="collapse"
              className={collapsed ? "chevron rotate" : "chevron"}
            />{" "}
          </button>
        )}{" "}
      </div>
      {!collapsed && (
        <div
          className="transcription-body"
          ref={scrollRef}
          role="log"
          aria-live="polite"
          aria-relevant="additions"
        >
          {" "}
          {messages.map((msg, index) => (
            <MessageItem key={index} message={msg} />
          ))}{" "}
        </div>
      )}{" "}
    </div>
  );
}
