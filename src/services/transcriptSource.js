/**
 * Abstracts transcript stream source for live transcription.
 * Mock: uses transcriptConfig. Real: would use WebSocket or real-time API.
 */

import { transcriptStream as mockTranscriptStream } from "../config/transcriptConfig";

const USE_MOCK = process.env.REACT_APP_USE_MOCK_TRANSCRIPT !== "false";

export async function getTranscriptStream(callId) {
  if (USE_MOCK) return mockTranscriptStream;
  return mockTranscriptStream;
}

export function getTranscriptStreamSync(callId) {
  if (USE_MOCK) return mockTranscriptStream;
  return mockTranscriptStream;
}
