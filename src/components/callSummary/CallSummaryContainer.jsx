import InterviewSummary from "./InterviewSummary";
import NonInterviewSummary from "./NonInterviewSummary";
import TranscriptionSection from "../transcription/TranscriptionSection";
import styles from "../../styling/callSummary/CallSummary.module.css";
export default function CallSummaryContainer({
  callState,
  onCallStateChange,
  templateType,
  selectedTags,
  onRemoveTag,
}) {
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
      {" "}
      <button onClick={() => onCallStateChange("ended")}> End Call </button>
      {callState === "ended" && renderSummary()}
      <TranscriptionSection callState={callState} />{" "}
    </div>
  );
}
