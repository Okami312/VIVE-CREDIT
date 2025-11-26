import type { DecisionStatus } from "../types/decision.types";

export const StatusBadge = ({ status }: { status: DecisionStatus }) => {
  const styles = {
    APPROVED: "bg-green-100 text-green-700 border-green-200",
    REJECTED: "bg-red-100 text-red-700 border-red-200",
    MANUAL_REVIEW: "bg-yellow-100 text-yellow-700 border-yellow-200",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-bold border ${styles[status]}`}
    >
      {status.replace("_", " ")}
    </span>
  );
};
