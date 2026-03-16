import { useState } from "react";
import styles from "./SatisfactionQuestions.module.css";

import faceFrown from "../../assets/face-frown.png";
import faceFromOutline from "../../assets/face-frown-outline.png";
import handThumbUp from "../../assets/hand-thumb-up.png";
import handThumbDown from "../../assets/hand-thumb-down.png";
import subtractIcon from "../../assets/subtract.png";

export default function SatisfactionQuestions() {
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);

  return (
    <div className={styles.satisfactionSection}>
      <div className={styles.questionBlock}>
        <div className={styles.questionTitle}>
          Satisfaction Question #1
          <span className={styles.subtractIcon}>
            <img src={subtractIcon} alt="Subtract Icon" width={12} height={2} />
          </span>
        </div>

        <div className={styles.iconGroup}>
          <img
            src={q1 === "sad" ? faceFrown : faceFromOutline}
            alt="Face Frown"
            className={styles.icon}
            onClick={() => setQ1("sad")}
          />
          <img
            src={q1 === "happy" ? faceFromOutline : faceFrown}
            alt="Face Neutral"
            className={styles.icon}
            onClick={() => setQ1("happy")}
          />
        </div>
      </div>

      <div className={styles.questionBlock}>
        <div className={styles.questionTitle}>
          Satisfaction Question #2
          <span className={styles.subtractIcon}>
            <img src={subtractIcon} alt="Subtract Icon" width={12} height={2} />
          </span>
        </div>

        <div className={styles.iconGroup}>
          <img
            src={q2 === "sad" ? handThumbDown : handThumbUp}
            alt="Thumbs Down"
            className={styles.icon}
            onClick={() => setQ2("sad")}
          />
          <img
            src={q2 === "happy" ? handThumbUp : handThumbDown}
            alt="Thumbs Up"
            className={styles.icon}
            onClick={() => setQ2("happy")}
          />
        </div>
      </div>
    </div>
  );
}
