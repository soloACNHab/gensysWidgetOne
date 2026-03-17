import { useState } from "react";
import styles from "./SatisfactionQuestions.module.css";
import SatisfactionQuestion from "./SatisfactionQuestion";

import faceFrown from "../../assets/face-frown.png";
import faceFromOutline from "../../assets/face-frown-outline.png";
import handThumbUp from "../../assets/hand-thumb-up.png";
import handThumbDown from "../../assets/hand-thumb-down.png";

export default function SatisfactionQuestions({ onChange, errors }) {
  const [answers, setAnswers] = useState({
    q1: null,
    q2: null,
  });

  const handleChange = (question, value) => {
    const updated = { ...answers, [question]: value };
    setAnswers(updated);

    if (onChange) {
      setTimeout(() => onChange(updated), 0);
    }
  };

  return (
    <div className={styles.satisfactionSection}>
      <SatisfactionQuestion
        questionTitle="Satisfaction Question #1"
        options={[
          { value: "sad", icon: faceFromOutline, activeIcon: faceFrown },
          { value: "happy", icon: faceFrown, activeIcon: faceFromOutline },
        ]}
        value={answers.q1}
        onChange={(value) => handleChange("q1", value)}
        error={errors?.q1}
      />

      <SatisfactionQuestion
        questionTitle="Satisfaction Question #2"
        options={[
          { value: "sad", icon: handThumbUp, activeIcon: handThumbDown },
          { value: "happy", icon: handThumbDown, activeIcon: handThumbUp },
        ]}
        value={answers.q2}
        onChange={(value) => handleChange("q2", value)}
        error={errors?.q2}
      />
    </div>
  );
}
