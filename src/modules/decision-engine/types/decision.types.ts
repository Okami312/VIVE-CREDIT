export type DecisionStatus = 'APPROVED' | 'REJECTED' | 'MANUAL_REVIEW';

export interface ScoringResult {
  applicationId: string;
  decision: DecisionStatus;
  score: number;           
  maxAmount?: number;      
  currency: string;
  summary: string;         
  reasonCodes: string[];   
  createdAt: string;
}