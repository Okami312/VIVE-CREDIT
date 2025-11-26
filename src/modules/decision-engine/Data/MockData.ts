import type { ScoringResult } from "../types/decision.types";

//dosar bun
export const MOCK_APPROVED: ScoringResult = {
  applicationId: "APP-2024-001",
  decision: "APPROVED",
  score: 850,
  maxAmount: 45000,
  currency: "RON",
  summary: "Client eligibil. Istoric de plata pozitiv si venituri stabile.",
  reasonCodes: [],
  createdAt: new Date().toISOString(),
};

//dosar slab
export const MOCK_REJECTED: ScoringResult = {
  applicationId: "APP-2024-002",
  decision: "REJECTED",
  score: 420,
  currency: "RON",
  summary: "Scor insuficient. Gradul de indatorare depaseste limita admisa.",
  reasonCodes: [
    "R01 - Grad de indatorare > 40%",
    "R05 - Istoric negativ in Biroul de Credit"
  ],
  createdAt: new Date().toISOString(),
};

//dosar incert
export const MOCK_MANUAL: ScoringResult = {
  applicationId: "APP-2024-003",
  decision: "MANUAL_REVIEW",
  score: 680,
  currency: "RON",
  summary: "Necesita analiza umana. Documente de venit neclare.",
  reasonCodes: ["Discrepanta venit declarat vs ANAF"],
  createdAt: new Date().toISOString(),
};