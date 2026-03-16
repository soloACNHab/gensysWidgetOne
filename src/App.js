import React, { useState, useCallback } from "react";

import CallSummaryHeader from "./components/transcription/CallSummaryHeader";
import LiveTranscriptionPanel from "./components/transcription/LiveTranscriptionPanel";
import CallSummaryContainer from "./components/callSummary/CallSummaryContainer";
import PossibleTags from "./components/callSummary/PossibleTags";

import headphoneIcon from "./assets/headphone.png";
import callSummaryIcon from "./assets/callSummary.png";
import callerIcon from "./assets/caller-user.png";
import "./App.css";

function App() {
  const [messages] = useState([]);
  const [view, setView] = useState("live");

  /*
  == Possible tags 
  const selectedTags = ["Eligibility", "Verification"];
 
  const handleRemoveTag = (tag) => {
    console.log("remove tag", tag);
  };*/
  const [selectedTags, setSelectedTags] = useState([]);
  const handleAddTag = useCallback((tag) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev : [...prev, tag]));
  }, []);
  const handleRemoveTag = useCallback((tag) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  }, []);

  return (
    <div >
      

      {/* Icon Switch */}
      <div style={{ display: "flex", gap: "12px", padding: "12px" }}>
        <img
          src={headphoneIcon}
          alt="Live Transcription"
          style={{ width: "28px", cursor: "pointer" }}
          onClick={() => setView("live")}
        />

        <img
          src={callSummaryIcon}
          alt="Non Interview Summary"
          style={{ width: "28px", cursor: "pointer" }}
          onClick={() => setView("nonInterview")}
        />

        <img
          src={callerIcon}
          alt="Interview Summary"
          style={{ width: "28px", cursor: "pointer" }}
          onClick={() => setView("interview")}
        />
      </div>

      {/* Header */}
      <CallSummaryHeader />

      {/* View Switching */}

      {view === "live" && (
        <div>
          <LiveTranscriptionPanel messages={messages} />
        </div>
      )}

      {view === "nonInterview" && (
        <div>
          <CallSummaryContainer
            templateType="nonInterview"
            selectedTags={selectedTags}
            onRemoveTag={handleRemoveTag}
          />
          <aside style={{ padding: "12px", fontSize: "12px", color: "#666" }}>
            <PossibleTags
              selectedTags={selectedTags}
              onAddTag={handleAddTag}
            />{" "}
          </aside>
        </div>
      )}

      {view === "interview" && (
        <div className="summaryLayout">
          <div className="summaryMain">
            <CallSummaryContainer
              templateType="interview"
              selectedTags={selectedTags}
              onRemoveTag={handleRemoveTag}
            />
          </div>

          <aside className="tagPanel">
            <h4>Possible Tags</h4>
            <PossibleTags
              selectedTags={selectedTags}
              onAddTag={handleAddTag}
            />{" "}
          </aside>
        </div>
      )}
    </div>
  );
}

export default App;
