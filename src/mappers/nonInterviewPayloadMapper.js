/** * Maps incoming Google Non-Interview payload to displayData for the UI. */ export function mapNonInterviewPayloadToDisplay(
  payload,
) {
  if (!payload) return {};
  const parseProgram = (val) => {
    if (!val) return [];
    if (Array.isArray(val)) return val;
    return String(val)
      .split(";")
      .map((s) => s.trim())
      .filter(Boolean);
  };
  return {
    requestId: payload.request_id,
    timestamp: payload.timestamp,
    subject: payload.subject,
    templateType: payload.template_type,
    callSummary: payload.call_summary ?? "",
    dcn: payload.dcn ?? "",
    famisEU: payload.famisEU ?? "",
    agentId: payload.agentId ?? "",
    phone: payload.phone ?? "",
    queue: payload.queue ?? "",
    program: parseProgram(payload.program),
    caseActionType: payload.caseActionType ?? "",
    caseStatus: payload.caseStatus ?? "",
    reasonForCall: payload.reasonForCall ?? "",
    additionalActionDetails: payload.additionalActionDetails ?? "",
  };
}
