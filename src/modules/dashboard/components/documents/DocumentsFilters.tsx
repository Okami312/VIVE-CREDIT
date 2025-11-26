import { useState } from "react";
import { Filter } from "lucide-react";
import type {
  DocumentItem,
  DocumentCategory,
  DocumentStatus,
} from "@/modules/dashboard/types/documents";
import DocumentsListCard from "./DocumentsListCard";

interface Props {
  documents: DocumentItem[];
}

type CategoryFilter = DocumentCategory | "all";
type StatusFilter = DocumentStatus | "all";

export default function DocumentsFilters({ documents }: Props) {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [year, setYear] = useState<string>("all");

  const years = Array.from(
    new Set(documents.map((d) => new Date(d.uploadedAt).getFullYear()))
  ).sort((a, b) => b - a);

  const filtered = documents.filter((doc) => {
    const categoryMatch = category === "all" || doc.category === category;
    const statusMatch = status === "all" || doc.status === status;
    const yearValue = new Date(doc.uploadedAt).getFullYear().toString();
    const yearMatch = year === "all" || yearValue === year;

    return categoryMatch && statusMatch && yearMatch;
  });

  return (
    <div className="space-y-4">
      <div className="bg-white border border-blue-100 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Filter size={18} className="text-blue-600" />
          <p className="text-sm font-medium text-gray-800">
            Filtrează documentele
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <select
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value as CategoryFilter)}
          >
            <option value="all">Toate tipurile</option>
            <option value="contract">Contracte</option>
            <option value="schedule">Grafice rambursare</option>
            <option value="kyc">Documente KYC</option>
            <option value="income">Documente venit</option>
            <option value="other">Alte documente</option>
          </select>

          <select
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={status}
            onChange={(e) => setStatus(e.target.value as StatusFilter)}
          >
            <option value="all">Toate statusurile</option>
            <option value="available">Disponibile</option>
            <option value="processing">În prelucrare</option>
            <option value="expired">Expirate</option>
          </select>

          <select
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="all">Toți anii</option>
            {years.map((y) => (
              <option key={y} value={y.toString()}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      <DocumentsListCard documents={filtered} />
    </div>
  );
}
