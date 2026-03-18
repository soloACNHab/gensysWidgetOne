import styles from "../styling/utils/FormError.module.css";
export default function FormError({ message }) {
  if (!message) return null;
  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`${styles.error} ${styles.errorBlock}`}
    >
      <div className="errorMessage">{message}</div>
    </div>
  );
}
