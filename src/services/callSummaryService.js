import { saveCallSummary } from "../api/callSummaryApi";
import { mapCallSummaryToApi } from "../mappers/callSummaryMapper";

export async function submitCallSummary(formData, displayData, templateType) {

  const payload = mapCallSummaryToApi(
    formData,
    displayData,
    templateType
  );

  console.log("Mapped Payload:", payload);

  return await saveCallSummary(payload);
}