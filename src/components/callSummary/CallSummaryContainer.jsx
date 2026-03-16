import { useState } from "react";
import InterviewSummary from "./InterviewSummary";
import NonInterviewSummary from "./NonInterviewSummary";
import LiveTranscriptionPanel from "../transcription/LiveTranscriptionPanel";
import styles from "./CallSummary.module.css";

export default function CallSummaryContainer({
  templateType,
  selectedTags,
  onRemoveTag,
}) {
  const [callState, setCallState] = useState("live");
  const [isTranscriptionOpen, setIsTranscriptionOpen] = useState(false);

  const renderSummary = () => {
    if (templateType === "interview") {
      return (
        <InterviewSummary
          selectedTags={selectedTags}
          onRemoveTag={onRemoveTag}
        />
      );
    }
    return (
      <NonInterviewSummary
        selectedTags={selectedTags}
        onRemoveTag={onRemoveTag}
      />
    );
  };

  

  return (
    <div className={styles.callSummaryPanel}>

      

      <button
       onClick={() => setCallState("ended")}>
        End Call
       </button>

      {/*show summary only after call ends*/}
      {callState === "ended" && renderSummary()}

      {/*Transcription always visible*/}
      <LiveTranscriptionPanel 
      callState={callState}
      isOpen={isTranscriptionOpen}
      toggleOpen={() => setIsTranscriptionOpen(prev => !prev)} 
      />
    </div>
  );
}
