import styles from "./InlineField.module.css";
export default function InlineField({ label, value }) {
    if (!value) return null;

    return (
        <div className={styles.inlineField}>
            <span className={styles.label}>{label}:</span>{""}
            <span className={styles.value}>{value}</span>
        </div>
    );
}