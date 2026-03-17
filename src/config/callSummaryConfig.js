export const NOTE_HEADER_TIMEZONE = process.env.REACT_APP_NOTE_HEADER_TIMEZONE || "CST";

export const PROGRAMS = [
  "SNAP",
  "MAGI",
  "Non-MAGI",
  "TA001",
  "TA002",
  "TA003",
  "TA004",
  "TA005",
  "TA010",
];

export const MOCK_NON_INTERVIEW = {
  requestId: "WS4NINT00004567",
  timestamp: "2026-02-28T20:36:59Z",
  subject: "NINT-0228-01",
  templateType: "Non-Interview",
  callSummary:
    "Client called regarding benefit status and reported an income change. Agent verified identity, confirmed current case data, and provided instructions for submitting required verification documents.",
  dcn: "87654321",
  famisEU: "001",
  agentId: "AGT002914",
  phone: "5735550199",
  program: ["SNAP", "MAGI"],
  queue: "Tier 2",
  caseActionType: "Case maintenance",
  caseStatus:
    "Active - pending verification of updated income. A recalculation will occur after receipt of documents.",
  reasonForCall:
    "case maintenance: client reported income change. Caller asked for clarification on process and next steps.",
  additionalActionDetails:
    "Client will upload two January paystubs or an employer letter by 2026-03-03; agent documented the request and set a reminder for follow-up.",
};

export const MOCK_INTERVIEW = {
  requestId: "WS4INT00000123",
  timestamp: "2026-02-28T16:22:11Z",
  subject: "INT-0228-01",
  templateType: "Interview",
  callSummary:
    "Inbound interview completed. Reviewed household composition, income, and expenses. Determined likely eligibility pending verification and provided next steps to the client.",
  dcn: "12345678",
  famisEU: "001",
  agentId: "AGT004731",
  phone: "3145550144",
  program: ["SNAP", "MAGI"],
  queue: "Tier 3",
  caseActionType: "Inbound interview",
  caseStatus:
    "Pending verification of January income. Status will be updated upon document validation.",
  additionalActionDetails:
    "Client will upload two January paystubs by 2026-03-03; eligibility will be finalized after verification. Agent documented follow-up steps.",
  // Interview-specific
  householdSize: "3",
  householdMemberNames: "Jane Doe (HOH); John Doe (Spouse); Emily Doe (Child)",
  threeWayCall: "No",
  thirdPartyVerification: "No",
  ada: "N/A",
  clientDisabilityReported: "No",
  domesticViolence: "No",
  childSupport:
    "Client pays $150 monthly; verified start date January 2026. Payments reviewed and discussed for accuracy.",
  outofStateBenefits: "No",
  management:
    "No escalations during the call. All steps followed under standard handling guideline.",
  citizenshipStatus:
    "All household members are U.S. citizens. No pending verification related to citizenship.",
  expeditedBenefits: "Ineligible",
  income:
    "Earned: $1200 monthly from Acme Corp; Unearned: $250 monthly child support. Income changes reviewed for SNAP impact.",
  expenses:
    "Rent: $800 monthly; Utilities: $118 monthly; Child care: $200 monthly. Expense review completed with applicant.",
  ebtCard: "New card requested.",
  workRequirementsOrABAWD: "Subject to general work requirements.",
  studentStatus: "No household members enrolled as college students.",
  sanctions: "No sanctions.",
};


