const PAYLOAD_API_BASE =
  process.env.REACT_APP_PAYLOAD_API_BASE_URL ||
  "https://medes-dev.state.mo.us/medes/call-summary-api/v1";

export async function fetchPayload(callId) {
  const url = `${PAYLOAD_API_BASE}/calls/${callId}/payload`;
  const response = await fetch(url);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch payload (${response.status}): ${errorText || response.statusText}`);
  }
  return response.json();
}