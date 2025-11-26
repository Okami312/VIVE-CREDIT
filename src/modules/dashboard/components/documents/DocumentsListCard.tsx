import {
  FileText,
  BadgeCheck,
  Clock,
  AlertTriangle,
  Download,
} from "lucide-react";
import CardWrapper from "../CardWrapper";
import type { DocumentItem } from "@/modules/dashboard/types/documents";

interface Props {
  documents: DocumentItem[];
}

const formatSize = (kb: number): string => {
  if (kb >= 1024) {
    return `${(kb / 1024).toFixed(1)} MB`;
  }
  return `${kb} KB`;
};

const formatDate = (value: string): string => {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("ro-RO");
};

const categoryLabel: Record<DocumentItem["category"], string> = {
  contract: "Contract",
  schedule: "Grafic rambursare",
  kyc: "KYC / Identitate",
  income: "Document venit",
  other: "Alte documente",
};

export default function DocumentsListCard({ documents }: Props) {
  const getStatusBadge = (status: DocumentItem["status"]) => {
    switch (status) {
      case "available":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[11px] font-medium">
            <BadgeCheck size={14} />
            Disponibil
          </span>
        );
      case "processing":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-700 text-[11px] font-medium">
            <Clock size={14} />
            În prelucrare
          </span>
        );
      case "expired":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-100 text-red-700 text-[11px] font-medium">
            <AlertTriangle size={14} />
            Expirat
          </span>
        );
    }
  };

  return (
    <CardWrapper
      title="Documentele mele"
      icon={<FileText size={22} className="text-blue-600" />}
    >
      <div className="space-y-3">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="bg-blue-50/60 border border-blue-100 rounded-xl px-3 py-3 sm:px-4 sm:py-3 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 hover:bg-blue-50 transition"
          >
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div className="mt-0.5">
                <FileText className="text-blue-600" size={22} />
              </div>

              <div className="min-w-0">
                <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                  {doc.name}
                </p>

                <p className="text-[11px] sm:text-xs text-blue-700 mt-0.5">
                  {categoryLabel[doc.category]}
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-1 text-[11px] sm:text-xs text-gray-500">
                  <span>{formatDate(doc.uploadedAt)}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{formatSize(doc.sizeKb)}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  {getStatusBadge(doc.status)}
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 flex items-center justify-end">
              {doc.status === "available" ? (
                <a
                  href={doc.url}
                  download
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white text-blue-700 text-xs sm:text-sm border border-blue-100 hover:bg-blue-600 hover:text-white transition shadow-sm"
                >
                  <Download size={16} />
                  <span>Descarcă</span>
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-gray-400 text-xs sm:text-sm border border-gray-200 cursor-not-allowed"
                >
                  <Download size={16} />
                  <span>Indisponibil</span>
                </button>
              )}
            </div>
          </div>
        ))}

        {documents.length === 0 && (
          <p className="text-sm text-gray-500 italic">
            Nu există documente care să corespundă filtrelor selectate.
          </p>
        )}
      </div>
    </CardWrapper>
  );
}
