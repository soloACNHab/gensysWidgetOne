import styles from "../styling/callSummary/CallSummary.module.css";

export default function RenderReadOnlyField({ label, value }) {
  return (
    <div className={styles.fieldRow}>
      <span className={`${styles.fieldLabel}`}>
        {label}:
      </span>

      <span className={styles.fieldValue}>
        {value ?? "-"}
      </span>
    </div>
  );
}