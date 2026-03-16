export const PROGRAMS = [
  "SNAP",
  "TANF",
  "Medicaid",
  "Child Care",
  "Energy Assistance"
];

export const MOCK_NON_INTERVIEW = {
  queue: "Benefits Queue",
  phone: "410-555-1212",
  dcn: "DCN-001",
  program: ["SNAP"]
};

export const MOCK_INTERVIEW = {
  callSummary: "The client called regarding benefit eligibility. The agent reviewed recent income changes, recalculated SNAP benefits, and informed the client of updated amounts.The client called regarding benefit eligibility. The agent reviewed recent income changes, recalculated SNAP benefits, and informed the client of updated amounts.The client called regarding benefit eligibility. The agent reviewed recent income changes, recalculated SNAP benefits, and informed the client of updated amounts.The client called regarding benefit eligibility. The agent reviewed recent income changes, recalculated SNAP benefits, and informed the client of updated amounts.",
  queue: "Interview Queue",
  phone: "410-555-3434",
  dcn: "DCN-002",
  reasonforCall: "Client called to report a change in household income and to inquire about how this affects their SNAP benefits. The client recently started a new part-time job, which has reduced their overall household income. They are seeking information on whether they need to report this change and how it will impact their current benefit amount.",

  householdSize: "3",
  householdNames: "John Doe, Jane Doe",
  actionType: "Recertification",
  thirdPartyInvolvement: "None",
  ada: "No",

  clientDisabilityReported: "No",
  domesticViolenceReported: "No",

  voterRegistration: "Declined",
  onlineServicesBlocked: "No",
  ownershipStatus: "Rent",

  expeditedBenefits: "No",
  householdIncome: "$1200",
  unearnedIncome: "$0",

  expenses: "$650",

  utilities: "Electric",
  dependentCare: "$0",
  medical: "$0",
  childSupport: "$0",

  hhgCase: "Yes",
  workRequirements: "ABAWD Exempt",
  collegeStudentStatus: "No",

  uniqueDetails: "None",

  caseStatus: "Pending",
  telephonicSignature: "Yes",
  ebtCard: "Active",
  sanctions: "None",

  program: ["SNAP"]
};
