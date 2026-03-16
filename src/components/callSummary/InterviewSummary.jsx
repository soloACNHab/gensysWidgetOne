import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import SummaryForm from "./SummaryForm";
import WrapUpSuggestions from "./WrapUpSuggestions";
import SatisfactionQuestions from "./SatisfactionQuestions";
import styles from "./CallSummary.module.css";

import { MOCK_INTERVIEW, PROGRAMS } from "../../config/callSummaryConfig.js";

export default function InterviewSummary({ selectedTags, onRemoveTag }) {
  const methods = useForm();
  const displayData = MOCK_INTERVIEW; // In a real app, this would come from props or API
  const [satisfactionAnswers, setSatisfactionAnswers] = useState({
    q1: null,
    q2: null,
  });

  const [errors, setErrors] = useState({});
  return (
    <FormProvider {...methods}>
      <div>
        <h2>Interview Summary</h2>

        <SummaryForm
          templateType="interview"
          displayData={displayData}
          programs={PROGRAMS}
          selectedTags={selectedTags}
          satisfactionAnswers={satisfactionAnswers}
          errors={errors}
          setErrors={setErrors}
        />
        <div className={styles.bottomSection}>
          <WrapUpSuggestions
            selectedTags={selectedTags}
            onRemoveTag={onRemoveTag}
          />

          <SatisfactionQuestions 
          onChange={setSatisfactionAnswers}
          errors={errors} />
        </div>
      </div>
    </FormProvider>
  );
}
