import { mapInterviewPayloadToDisplay } from "./interviewPayloadMapper";
import { mapNonInterviewPayloadToDisplay } from "./nonInterviewPayloadMapper";
/** * Maps incoming Google payload to displayData based on template_type. */

export function mapPayloadToDisplay(payload) {
  if (!payload) return {};
  const templateType = (payload.template_type || "").toLowerCase();
  if (templateType.includes("interview") && !templateType.includes("non")) {
    return mapInterviewPayloadToDisplay(payload);
  }
  return mapNonInterviewPayloadToDisplay(payload);
}
