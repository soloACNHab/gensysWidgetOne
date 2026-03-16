import styles from "../components/callSummary/CallSummary.module.css";

export default function RenderReadOnlyField({ label, value }) {
  return (
    <div className={styles.fieldRow}>
      <span className={`${styles.fieldLabel} `}>
        {label}:
      </span>

      <span className={styles.fieldRow}>
        {value ?? "-"}
      </span>
    </div>
  );
}