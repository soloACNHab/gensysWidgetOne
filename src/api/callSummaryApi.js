export async function saveCallSummary(payload){
    console.log("Sending payload to API:", payload);
    //Placeholder for API call - replace with actual endpoint and method
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
} 

    /*
const CALL_SUMMARY_API_URL = process.env.REACT_APP_CALL_SUMMARY_API_URL || "http://localhost:4000/api/call-summary";

export async function saveCallSummary(payload) {    
    console.log("Sending payload to API:", payload);


    const response = await fetch(CALL_SUMMARY_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error:", errorText);
        throw new Error(`Call Summary API Error (${response.status} ${response.statusText}): ${errorText}`);
    }

    const data = await response.json().catch(() => ({}));
    console.log("API Response:", data);
    return data;
}

*/