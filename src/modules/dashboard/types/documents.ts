export type DocumentCategory =
  | "contract"
  | "schedule"
  | "kyc"
  | "income"
  | "other";

export type DocumentStatus = "available" | "processing" | "expired";

export interface DocumentItem {
  id: string;
  name: string;
  category: DocumentCategory;
  uploadedAt: string;
  sizeKb: number;
  status: DocumentStatus;
  url: string;
}
