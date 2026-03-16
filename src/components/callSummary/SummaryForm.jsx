import { useFormContext } from "react-hook-form";
import useSaveSummary from "../../hooks/useSaveSummary";

import checkCircle from "../../assets/check-circle.png";  

import styles from "./CallSummary.module.css";
import RenderReadOnlyField from "../../utils/renderReadOnlyField";
import { PROGRAM_OPTIONS } from "../../config/programOptions";
import ProgramMultiSelect from "./ProgramMultiSelect";
import InlineField from "../../utils/InlineField";  
import FormField from "../../utils/FormField";
import FormError from "../../utils/FormError";
import { useEffect } from "react";

export default function SummaryForm({ templateType, displayData, programs, selectedTags, satisfactionAnswers, errors, setErrors }) {
  const { register, watch, setValue, getValues } = useFormContext();
  const threeWayCall = watch ? watch("threeWayCall") : false;
  //const [errors, setErrors] = useState({});


  const { saveSummary, saving, saved } = useSaveSummary();
  //const selectedPrograms = watch("program") || [];  

  /* working handleSave before adding satisfaction and error
  const handleSave = () => {
    const formData = watch();

    console.log("Form Data to Save:", formData);
    saveSummary(
      {
        ...formData,
        programs: selectedPrograms,
        wrapUpTags: selectedTags,
        satisfactionAnswers: satisfactionAnswers,
      },
      displayData,
      templateType,
    );
  };*/
  useEffect(() => {setValue("program", [])}, [setValue]); // Reset program selection when form loads

  const handleSave = () => {
    //const formData = watch();
    const formData = getValues(); // Get all form values at once, including unchecked checkboxes
    console.log("Form Data to Save:", formData);

    const newErrors = {};
    const selectedPrograms = watch("program") || [];

    if (selectedPrograms.length === 0) {
      newErrors.program = "At least one program must be selected";
    }
   if(!satisfactionAnswers?.q1){
      newErrors.q1 = "Please answer the satisfaction question #1";
    }
    
    if(!satisfactionAnswers?.q2 ){
      newErrors.q2 = "Please answer the satisfaction question #2";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    saveSummary(
      {
        ...formData,
        programs: selectedPrograms,
        wrapUpTags: selectedTags,
        satisfactionAnswers: satisfactionAnswers,
      },
      displayData,
      templateType,
    );
  };

  return (
    
      <div className={`${styles.callSummaryPanel } ${saved ? styles.callSummarySaved : ""}`}>
      {/* CALL SUMMARY */}      
      <InlineField label="Call Summary" value={displayData.callSummary || ""} />


      {/* READ ONLY DATA */}

      <RenderReadOnlyField label="Queue" value={displayData.queue} />
      <RenderReadOnlyField label="Phone" value={displayData.phone} />
      <RenderReadOnlyField label="DCN" value={displayData.dcn} />

      {/*Working one before adding validation and error display
      <div className={styles.fieldRow}>
        <label className={styles.fieldLabel}>Program</label>
        <ProgramMultiSelect
          options={PROGRAM_OPTIONS}
          value={watch("program") || []}
          onChange={(val) => setValue("program", val)}
        />
      </div>
      */}

      <div className={styles.fieldRow}>
        <label className={styles.fieldLabel}>Program</label>
        <ProgramMultiSelect
          options={PROGRAM_OPTIONS}
          value={watch("program") || []}
          onChange={(val) => setValue("program", val)}
        />

        <FormError message={errors?.program} /> {/* Display program selection error */}
      </div>

      {/* INTERVIEW FIELDS */}

      {templateType === "interview" && (
        <>
          <RenderReadOnlyField
            label="Household Size"
            value={displayData.householdSize}
          />
          <RenderReadOnlyField
            label="Household Name(s)"
            value={displayData.householdNames}
          />
          <RenderReadOnlyField
            label="Action Type"
            value={displayData.actionType}
          />
          <RenderReadOnlyField
            label="Third Party Involvement"
            value={displayData.thirdPartyInvolvement}
          />
          <RenderReadOnlyField label="ADA" value={displayData.ada} />

          <RenderReadOnlyField
            label="Voter Registration"
            value={displayData.voterRegistration}
          />
          <RenderReadOnlyField
            label="Online Services Blocked"
            value={displayData.onlineServicesBlocked}
          />
          <RenderReadOnlyField
            label="Ownership Status"
            value={displayData.ownershipStatus}
          />

          <RenderReadOnlyField
            label="Expedited Benefits"
            value={displayData.expeditedBenefits}
          />
          <RenderReadOnlyField
            label="Household Income"
            value={displayData.householdIncome}
          />
          <RenderReadOnlyField
            label="Unearned Income"
            value={displayData.unearnedIncome}
          />

          <RenderReadOnlyField label="Expenses" value={displayData.expenses} />

          <RenderReadOnlyField label="HHG Case" value={displayData.hhgCase} />
          <RenderReadOnlyField
            label="Work Requirements/ABAWD"
            value={displayData.workRequirements}
          />
          <RenderReadOnlyField
            label="College Student Status"
            value={displayData.collegeStudentStatus}
          />
          <RenderReadOnlyField
            label="Unique Details/Circumstances"
            value={displayData.uniqueDetails}
          />

          <RenderReadOnlyField
            label="Case Status"
            value={displayData.caseStatus}
          />
          <RenderReadOnlyField
            label="Telephonic Signature"
            value={displayData.telephonicSignature}
          />
          <RenderReadOnlyField label="EBT Card" value={displayData.ebtCard} />
          <RenderReadOnlyField
            label="Sanctions"
            value={displayData.sanctions}
          />
        </>
      )}

      {/* REASON FOR CALL */}
      <InlineField label="Reason for the Call" value={displayData.reasonforCall || ""} />
      <InlineField label="3-way Call" value={displayData.threeWayCallDetails || ""} />

      {/* THREE WAY CALL */}

      <div className={styles.fieldRow}>
        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            className={styles.checkbox}
            {...register("threeWayCall")}
          />

          <label className={styles.fieldLabel}>3-way Call</label>
        </div>

        {threeWayCall && (
          <textarea
            className={styles.textarea}
            {...register("threeWayCallDetails")}
          />
        )}
      </div>

      <InlineField label="3-way Call" value={displayData.threeWayCallDetails || ""} />

    

      {/* ADDITIONAL ACTION */}

      <FormField label="Additional Action / Details" htmlFor="additionalActions">
        <textarea
          id="additionalActions"
          className={`${styles.textarea} ${styles.textareaLarge}`}
          {...register("additionalActions")}
        />
      </FormField> 
      
      
{/* Satisfaction Questions 
      <SatisfactionQuestions
        onChange={(answers) => setSatisfactionAnswers(answers)}
        errors={errors}
      />*/}

      <div className={styles.saveButtonContainer}>
        <button
          type="button"
          className={styles.saveButton}
          //disabled={!selectedPrograms.length || saving}
          onClick={handleSave}
        >
          {saving
            ? "Saving..."
            : templateType === "interview"
              ? "Save Note"
              : "Save Summary"}
        </button>
        {saved && (
          <span className={styles.saveSuccess}>
            Successfully saved 
            <img 
             src={checkCircle} 
            alt="saved" 
            className={styles.checkIcon} 
            />
          </span>
        )}
      </div>
    </div>
  );
}
