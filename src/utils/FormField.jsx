
import styles from "../styling/utils/FormField.module.css";

const FormField = ({ label, htmlFor, children }) => {
    return (
        <div className={styles.fieldRow}>
            {label && (
                <label htmlFor={htmlFor} className={styles.fieldLabel}>
                    {label}
                </label>
            )}
            <div className={styles.fieldControl}>
                {children}
            </div>
        </div>
    );
};

export default FormField;
