export function mapCallSummaryToApi(formData, displayData, templateType) {

  return {

    metadata: {
      templateType,
      savedAt: new Date().toISOString()
    },

    callInfo: {
      callSummary : displayData.callSummary || "",
      queue: displayData.queue ?? "",
      phone: displayData.phone ?? "",
      dcn: displayData.dcn ?? "", 
      wrapUpTags: formData.wrapUpTags || [],
      satisfactionAnswers: formData.satisfactionAnswers || {}

    },

    agentInput: {
      program: formData.program || [],
      reasonForCall: formData.reasonForCall || "",
      threeWayCall: formData.threeWayCall || false,
      threeWayCallDetails: formData.threeWayCallDetails || "",
      additionalActions: formData.additionalActions || ""
    },

    interviewData:
      templateType === "interview"
        ? {
            householdSize: displayData.householdSize,
            householdNames: displayData.householdNames,
            actionType: displayData.actionType,
            thirdPartyInvolvement: displayData.thirdPartyInvolvement,
            ada: displayData.ada,
            voterRegistration: displayData.voterRegistration,
            onlineServicesBlocked: displayData.onlineServicesBlocked,
            ownershipStatus: displayData.ownershipStatus,
            expeditedBenefits: displayData.expeditedBenefits,
            householdIncome: displayData.householdIncome,
            unearnedIncome: displayData.unearnedIncome,
            expenses: displayData.expenses,
            hhgCase: displayData.hhgCase,
            workRequirements: displayData.workRequirements,
            collegeStudentStatus: displayData.collegeStudentStatus,
            uniqueDetails: displayData.uniqueDetails,
            caseStatus: displayData.caseStatus,
            telephonicSignature: displayData.telephonicSignature,
            ebtCard: displayData.ebtCard,
            sanctions: displayData.sanctions
          }
        : null
  };
}