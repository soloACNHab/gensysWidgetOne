import React, { useState, useCallback } from "react";
import CallSummaryHeader from "./components/transcription/CallSummaryHeader";
import CallSummaryContainer from "./components/callSummary/CallSummaryContainer";
import PossibleTags from "./components/callSummary/PossibleTags";
import WrapUpCodesSidebar from "./components/callSummary/WrapUpCodesSidebar";
import "./App.css";
function App() {
  const [callState, setCallState] = useState("live");
  const [templateType, setTemplateType] = useState("nonInterview");
  const [selectedTags, setSelectedTags] = useState([]);
  const handleAddTag = useCallback((tag) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev : [...prev, tag]));
  }, []);
  const handleRemoveTag = useCallback((tag) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  }, []);
  return (
    <div>
      {" "}
      <CallSummaryHeader />
      {/* Dev toggle: switch template type for development */}{" "}
      <div
        style={{
          padding: "8px 12px",
          fontSize: "12px",
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        {" "}
        <span>Template:</span>{" "}
        <button
          type="button"
          onClick={() => setTemplateType("nonInterview")}
          style={{
            padding: "4px 12px",
            background: templateType === "nonInterview" ? "#1976d2" : "#eee",
            color: templateType === "nonInterview" ? "#fff" : "#333",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {" "}
          Non-Interview{" "}
        </button>{" "}
        <button
          type="button"
          onClick={() => setTemplateType("interview")}
          style={{
            padding: "4px 12px",
            background: templateType === "interview" ? "#1976d2" : "#eee",
            color: templateType === "interview" ? "#fff" : "#333",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {" "}
          Interview{" "}
        </button>{" "}
      </div>
      <div className="summaryLayout">
        {" "}
        <div className="summaryMain">
          {" "}
          <CallSummaryContainer
            callState={callState}
            onCallStateChange={setCallState}
            templateType={templateType}
            selectedTags={selectedTags}
            onRemoveTag={handleRemoveTag}
          />{" "}
        </div>
        <aside
          className="tagPanel"
          aria-label="Wrap-up codes and possible tags"
        >
          {" "}
          <h4>Possible Tags</h4>{" "}
          <PossibleTags selectedTags={selectedTags} onAddTag={handleAddTag} />{" "}
          <WrapUpCodesSidebar />{" "}
        </aside>{" "}
      </div>{" "}
    </div>
  );
}
export default App;