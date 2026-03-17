import { NOTE_HEADER_TIMEZONE } from "../config/callSummaryConfig";




/**
 * Formats timestamp for note-header: MM.DD.YYYY hh:mmAM/PM TZ
 * Example: 02.06.2026 02:36PM CST
 */
export function formatNoteHeaderTimestamp(date, timeZone = NOTE_HEADER_TIMEZONE) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const minStr = String(minutes).padStart(2, "0");
  return `${month}.${day}.${year} ${hours}:${minStr}${ampm} ${timeZone}`;
}

/**
 * Builds note-header String: <Template Type>-<Queue>-<Timestamp>
 * Example: Non-Interview-Tier 2-02.06.2026 02:36PM CST
 */
export function buildNoteHeader(templateType, queue) {
  const templateLabel =
    templateType === "interview" ? "Interview" : "Non-Interview";
  const formatted = formatNoteHeaderTimestamp(new Date());
  return `${templateLabel}-${queue}-${formatted}`;
}

/** * Maps formData + displayData to the payload sent to the Save API.
 * * Aligns with production schema (request_id, template_type, etc.). */

export function mapCallSummaryToApi(formData, displayData, templateType) {
  const selectedPrograms = formData.program || [];
  const programString = Array.isArray(selectedPrograms)
    ? selectedPrograms.join("; ")
    : String(selectedPrograms || "");
  const basePayload = {
    request_id: displayData.requestId || "",
    timestamp: new Date().toISOString(),
    subject: displayData.subject || "",
    template_type: templateType === "interview" ? "Interview" : "Non-Interview",
    note_header: buildNoteHeader(templateType, displayData.queue || ""),
    call_summary: displayData.callSummary || "",
    dcn: displayData.dcn ?? "",
    famisEU: displayData.famisEU ?? "",
    agentId: displayData.agentId ?? "",
    phone: displayData.phone ?? "",
    queue: displayData.queue ?? "",
    program: programString,
    caseActionType: displayData.caseActionType ?? "",
    caseStatus: displayData.caseStatus ?? "",
    additionalActionDetails:
      formData.additionalActions || displayData.additionalActionDetails || "",
    wrapUpTags: formData.wrapUpTags || [],
    satisfactionAnswers: formData.satisfactionAnswers || {},
  };
  if (templateType === "interview") {
    basePayload.householdSize = displayData.householdSize ?? "";
    basePayload.householdMemberNames = displayData.householdMemberNames ?? "";
    basePayload["3waycall"] = formData.threeWayCall ? "Yes" : "No";
    basePayload.thirdPartyVerification =
      displayData.thirdPartyVerification ?? "";
    basePayload.ada = displayData.ada ?? "";
    basePayload.clientDisabilityReported =
      displayData.clientDisabilityReported ?? "";
    basePayload.domesticViolence = displayData.domesticViolence ?? "";
    basePayload.childSupport = displayData.childSupport ?? "";
    basePayload.outofStateBenefits = displayData.outofStateBenefits ?? "";
    basePayload.management = displayData.management ?? "";
    basePayload.citizenshipStatus = displayData.citizenshipStatus ?? "";
    basePayload.expeditedBenefits = displayData.expeditedBenefits ?? "";
    basePayload.income = displayData.income ?? "";
    basePayload.expenses = displayData.expenses ?? "";
    basePayload.ebtCard = displayData.ebtCard ?? "";
    basePayload.workRequirementsOrABAWD =
      displayData.workRequirementsOrABAWD ?? "";
    basePayload.studentStatus = displayData.studentStatus ?? "";
    basePayload.sanctions = displayData.sanctions ?? "";
  } else {
    basePayload.reasonForCall =
      formData.reasonForCall || displayData.reasonForCall || "";
  }
  return basePayload;
}
