import FilterInput from "../../../components/ui/FilterInput";
import FilterSelect from "../../../components/ui/FilterSelect";

interface Props {
  filters: { status: string; search: string };
  onChange: (filters: { status: string; search: string }) => void;
}

export default function RiskFiltersBar({ filters, onChange }: Props) {
  const statusOptions = [
    { label: "Toate", value: "" },
    { label: "În așteptare", value: "pending" },
    { label: "Manual review", value: "manual_review" },
    { label: "Documente cerute", value: "documents_requested" },
    { label: "Trimise AML", value: "aml_review" },
    { label: "Aprobate", value: "approved" },
    { label: "Respinse", value: "rejected" },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between w-full mb-4">
      <div className="flex-1">
        <FilterInput
          value={filters.search}
          placeholder="Caută după nume client..."
          onChange={(v) => onChange({ ...filters, search: v })}
        />
      </div>

      <div>
        <FilterSelect
          value={filters.status}
          options={statusOptions}
          onChange={(v) => onChange({ ...filters, status: v })}
        />
      </div>
    </div>
  );
}
