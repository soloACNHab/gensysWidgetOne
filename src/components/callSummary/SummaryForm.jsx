import { useFormContext } from "react-hook-form";
import useSaveSummary from "../../hooks/useSaveSummary";
import checkCircle from "../../assets/check-circle.png";
import styles from "../../styling/callSummary/CallSummary.module.css";
import RenderReadOnlyField from "../../utils/renderReadOnlyField";
import { PROGRAM_OPTIONS } from "../../config/programOptions";
import ProgramMultiSelect from "./ProgramMultiSelect";
import InlineField from "../../utils/InlineField";
import FormError from "../../utils/FormError";
import { useEffect } from "react";
export default function SummaryForm({
  templateType,
  displayData,
  programs,
  selectedTags,
  satisfactionAnswers,
  errors,
  setErrors,
}) {
  const { register, watch, setValue, getValues } = useFormContext();
  const threeWayCall = watch ? watch("threeWayCall") : false; //const [errors, setErrors] = useState({});

  const { saveSummary, saving, saved } = useSaveSummary(); //const selectedPrograms = watch("program") || [];
  /* working handleSave before adding satisfaction and error const handleSave = () => { const formData = watch();
 console.log("Form Data to Save:", formData); saveSummary( { ...formData, programs: selectedPrograms, wrapUpTags: selectedTags, satisfactionAnswers: satisfactionAnswers, }, displayData, templateType, ); };*/ useEffect(() => {
    setValue("program", []);
  }, [setValue]); // Reset program selection when form loads
  const handleSave = () => {
    //const formData = watch(); const formData = getValues(); // Get all form values at once, including unchecked checkboxes console.log("Form Data to Save:", formData);
    
    const formValues = getValues();const newErrors = {};
    const selectedPrograms = watch("program") || [];
    if (selectedPrograms.length === 0) {
      newErrors.program = "At least one program must be selected";
    }
    if (!satisfactionAnswers?.q1) {
      newErrors.q1 = "Please answer the satisfaction question #1";
    }
    if (!satisfactionAnswers?.q2) {
      newErrors.q2 = "Please answer the satisfaction question #2";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    saveSummary(
      {
        ...formValues,
        programs: selectedPrograms,
        wrapUpTags: selectedTags,
        satisfactionAnswers: satisfactionAnswers,
      },
      displayData,
      templateType,
    );
  };
  return (
    <div
      className={`${styles.callSummaryPanel} ${saved ? styles.callSummarySaved : ""}`}
    >
      {" "}
      {/* CALL SUMMARY */}{" "}
      <InlineField label="Call Summary" value={displayData.callSummary || ""} />
      {/* READ ONLY DATA */}
      <RenderReadOnlyField label="Queue" value={displayData.queue} />{" "}
      <RenderReadOnlyField label="Phone" value={displayData.phone} />{" "}
      <RenderReadOnlyField label="DCN" value={displayData.dcn} />{" "}
      <RenderReadOnlyField
        label="Case Action Type"
        value={displayData.caseActionType}
      />
      {/*Working one before adding validation and error display <div className={styles.fieldRow}> <label className={styles.fieldLabel}>Program</label> <ProgramMultiSelect options={PROGRAM_OPTIONS} value={watch("program") || []} onChange={(val) => setValue("program", val)} /> </div> */}
      <div className={styles.fieldRow}>
        {" "}
        <label className={styles.fieldLabel}>Program</label>{" "}
        <ProgramMultiSelect
          options={PROGRAM_OPTIONS}
          value={watch("program") || []}
          onChange={(val) => setValue("program", val)}
        />
        <FormError message={errors?.program} />{" "}
        {/* Display program selection error */}{" "}
      </div>
      {/* INTERVIEW FIELDS */}
      {templateType === "interview" && (
        <>
          {" "}
          <RenderReadOnlyField
            label="Household Size"
            value={displayData.householdSize}
          />{" "}
          <RenderReadOnlyField
            label="Household Member Names"
            value={displayData.householdMemberNames}
          />{" "}
          <RenderReadOnlyField
            label="3-way Call"
            value={displayData.threeWayCall}
          />{" "}
          <RenderReadOnlyField
            label="Third Party Verification"
            value={displayData.thirdPartyVerification}
          />{" "}
          <RenderReadOnlyField label="ADA" value={displayData.ada} />{" "}
          <RenderReadOnlyField
            label="Client Disability Reported"
            value={displayData.clientDisabilityReported}
          />{" "}
          <RenderReadOnlyField
            label="Domestic Violence"
            value={displayData.domesticViolence}
          />{" "}
          <RenderReadOnlyField
            label="Child Support"
            value={displayData.childSupport}
          />{" "}
          <RenderReadOnlyField
            label="Out of State Benefits"
            value={displayData.outofStateBenefits}
          />{" "}
          <RenderReadOnlyField
            label="Management"
            value={displayData.management}
          />{" "}
          <RenderReadOnlyField
            label="Citizenship Status"
            value={displayData.citizenshipStatus}
          />{" "}
          <RenderReadOnlyField
            label="Expedited Benefits"
            value={displayData.expeditedBenefits}
          />{" "}
          <RenderReadOnlyField label="Income" value={displayData.income} />{" "}
          <RenderReadOnlyField label="Expenses" value={displayData.expenses} />{" "}
          <RenderReadOnlyField label="EBT Card" value={displayData.ebtCard} />{" "}
          <RenderReadOnlyField
            label="Work Requirements/ABAWD"
            value={displayData.workRequirementsOrABAWD}
          />{" "}
          <RenderReadOnlyField
            label="Student Status"
            value={displayData.studentStatus}
          />{" "}
          <RenderReadOnlyField
            label="Sanctions"
            value={displayData.sanctions}
          />{" "}
          <RenderReadOnlyField
            label="Case Status"
            value={displayData.caseStatus}
          />{" "}
        </>
      )}
      {/* REASON FOR CALL - Non-Interview from payload; Interview can be agent input */}{" "}
      <InlineField
        label="Reason for the Call"
        value={displayData.reasonForCall || ""}
      />
      {/* THREE WAY CALL - Agent can override/supplement */}{" "}
      <div className={styles.fieldRow}>
        {" "}
        <div className={styles.checkboxGroup}>
          {" "}
          <input
            type="checkbox"
            className={styles.checkbox}
            {...register("threeWayCall")}
          />{" "}
          <label className={styles.fieldLabel}>3-way Call</label>{" "}
        </div>{" "}
        {threeWayCall && (
          <textarea
            className={styles.textarea}
            {...register("threeWayCallDetails")}
          />
        )}{" "}
      </div>
      {/* ADDITIONAL ACTION */}
       {/* ADDITIONAL ACTION - symmetric with other fields, InlineField when saved */}
      {saved ? (
        <div className={styles.additionalActionInline}>
          <span className={styles.additionalActionInlineLabel}>
            Additional Action / Details:
          </span>
          <span className={styles.additionalActionInlineValue}>
            {watch("additionalActions") || ""}
          </span>
        </div>
      ) : (
        <div className={styles.fieldRow}>
          <span className={styles.fieldLabel}>
            Additional Action / Details:
          </span>
          <textarea
            id="additionalActions"
            className={styles.textareaInRow}
            placeholder="Enter additional action or details..."
            {...register("additionalActions")}
          />
        </div>
      )}
     

      {/* Satisfaction Questions <SatisfactionQuestions onChange={(answers) => setSatisfactionAnswers(answers)} errors={errors} />*/}
      <div className={styles.saveButtonContainer}>
        <button
          type="button"
          className={styles.saveButton}
          /*disabled={!selectedPrograms.length || saving}*/
          onClick={handleSave}
        >
          {saving
            ? "Saving..."
            : templateType === "interview"
              ? "Save Note"
              : "Save Summary"}{" "}
        </button>{" "}
        {saved && (
          <span className={styles.saveSuccess}>
            {" "}
            Successfully saved{" "}
            <img
              src={checkCircle}
              alt="saved"
              className={styles.checkIcon}
            />{" "}
          </span>
        )}{" "}
      </div>{" "}
    </div>
  );
}
