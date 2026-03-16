import styles from "./SatisfactionQuestions.module.css";
import subtractIcon from "../../assets/subtract.png";
import FormError from "../../utils/FormError";

export default function SatisfactionQuestion({
  questionTitle,
  options,
  value,
  onChange,
  error
}) {
  return (
    <div className={styles.questionBlock}>
      <div className={styles.questionTitle}>
        {questionTitle}
        <span className={styles.subtractIcon}>
          <img src={subtractIcon} alt="Subtract Icon" width={12} height={2} />
        </span>
      </div>

      <div className={styles.iconGroup}>
        {options.map((option) => (
          <img
            key={option.value}
            src={value === option.value ? option.activeIcon : option.icon}
            alt={option.value}
            className={styles.icon}
            onClick={() => onChange(option.value)}
          />
        ))}
      </div>
      <FormError message={error}/>
    </div>
  );
}
