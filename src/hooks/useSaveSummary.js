import { useState } from "react";
import { submitCallSummary } from "../services/callSummaryService";

export default function useSaveSummary() {

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const saveSummary = async (formData, displayData, templateType) => {

    try {

      setSaving(true);

      await submitCallSummary(formData, displayData, templateType);

      console.log("Summary saved successfully");
      console.log("Form Data:", formData);
      console.log("Display Data:", displayData);
      console.log("Template Type:", templateType);

      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 3000);

    } finally {
      setSaving(false);
    }

  };

  return { saveSummary, saving, saved };
}