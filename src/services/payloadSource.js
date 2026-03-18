import { MOCK_INTERVIEW, MOCK_NON_INTERVIEW } from "../config/callSummaryConfig";
import { fetchPayload } from "../api/payloadApi";

const USE_MOCK = process.env.REACT_APP_USE_MOCK_PAYLOAD !== "false";

export async function getPayload(callId, templateType) {
  if (USE_MOCK) {
    return templateType === "interview" ? MOCK_INTERVIEW : MOCK_NON_INTERVIEW;
  }
  return await fetchPayload(callId);
}
