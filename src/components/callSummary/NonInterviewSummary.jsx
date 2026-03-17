import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import SummaryForm from "./SummaryForm";
import WrapUpSuggestions from "./WrapUpSuggestions";
import SatisfactionQuestions from "./SatisfactionQuestions";
import styles from "./CallSummary.module.css";
import {
  MOCK_NON_INTERVIEW,
  PROGRAMS,
} from "../../config/callSummaryConfig.js";
export default function NonInterviewSummary({ selectedTags, onRemoveTag }) {
  const methods = useForm();
  const displayData = MOCK_NON_INTERVIEW;
  const [satisfactionAnswers, setSatisfactionAnswers] = useState({
    q1: null,
    q2: null,
  });
  const [errors, setErrors] = useState({});
  return (
    <FormProvider {...methods}>
      {" "}
      <div>
        {" "}
        <h2>Non-Interview Summary</h2>
        <SummaryForm
          templateType="nonInterview"
          displayData={displayData}
          programs={PROGRAMS}
          selectedTags={selectedTags}
          satisfactionAnswers={satisfactionAnswers}
          errors={errors}
          setErrors={setErrors}
        />{" "}
        <div className={styles.bottomSection}>
          {" "}
          <WrapUpSuggestions
            selectedTags={selectedTags}
            onRemoveTag={onRemoveTag}
          />
          <SatisfactionQuestions
            onChange={setSatisfactionAnswers}
            errors={errors}
          />{" "}
        </div>{" "}
      </div>{" "}
    </FormProvider>
  );
}
